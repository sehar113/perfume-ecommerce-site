
"use client";

import { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { onAuthStateChanged, User } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import { doc, onSnapshot, updateDoc, collection, query, orderBy, writeBatch } from "firebase/firestore";
import { HourglassLoader } from "@/components/layout/HourglassLoader";

interface FirestoreUser {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  firstName?: string;
  lastName?: string;
  createdAt: any;
}

interface AuthContextType {
  user: User | null;
  firestoreUser: FirestoreUser | null;
  loading: boolean;
  notifications: any[];
  unreadCount: number;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [firestoreUser, setFirestoreUser] = useState<FirestoreUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (!user) {
        setFirestoreUser(null);
        setLoading(false);
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    let unsubscribeFirestore: (() => void) | undefined;
    let unsubscribeNotifications: (() => void) | undefined;

    if (user) {
      // Fetch user profile from Firestore
      const userDocRef = doc(db, "users", user.uid);
      unsubscribeFirestore = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists()) {
          const userData = docSnap.data() as FirestoreUser;
          // Retroactively fix missing photoURL for existing users
          if (!userData.photoURL) {
              const nameForAvatar = userData.displayName || userData.email || 'User';
              const newPhotoURL = `https://ui-avatars.com/api/?name=${encodeURIComponent(nameForAvatar)}&background=random&color=fff`;
              updateDoc(userDocRef, { photoURL: newPhotoURL });
              // The onSnapshot will trigger again with the updated data.
          } else {
             setFirestoreUser(userData);
          }
        } else {
          // This might happen briefly before createUserInFirestore runs
          setFirestoreUser(null);
        }
        setLoading(false);
      });

      // Fetch notifications
      const notificationsQuery = query(
        collection(db, "users", user.uid, "notifications"),
        orderBy("createdAt", "desc")
      );
      unsubscribeNotifications = onSnapshot(notificationsQuery, (snapshot) => {
        const userNotifications = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setNotifications(userNotifications);
        const unread = userNotifications.filter(n => !n.read).length;
        setUnreadCount(unread);
      });

    } else {
        setNotifications([]);
        setUnreadCount(0);
        setLoading(false); // No user, so not loading
    }

    return () => {
      if (unsubscribeFirestore) unsubscribeFirestore();
      if (unsubscribeNotifications) unsubscribeNotifications();
    };
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, firestoreUser, loading, notifications, unreadCount }}>
      {loading ? (
        <div className="flex items-center justify-center flex-grow h-screen">
          <HourglassLoader text="Loading Session..."/>
        </div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
