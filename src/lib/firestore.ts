
"use client";

import { User } from "firebase/auth";
import { db } from "@/lib/firebase";
import { doc, getDoc, setDoc, serverTimestamp, collection } from "firebase/firestore";

export const createUserInFirestore = async (user: User, firstName?: string, lastName?: string) => {
  const userRef = doc(db, "users", user.uid);
  const userDoc = await getDoc(userRef);

  if (!userDoc.exists()) {
    let displayName = user.displayName;
    if (!displayName && firstName && lastName) {
        displayName = `${firstName} ${lastName}`;
    }
    
    // Fallback for photoURL
    let photoURL = user.photoURL;
    if (!photoURL) {
      const nameForAvatar = displayName || user.email || 'User';
      photoURL = `https://ui-avatars.com/api/?name=${encodeURIComponent(nameForAvatar)}&background=random&color=fff`;
    }

    await setDoc(userRef, {
      uid: user.uid,
      email: user.email,
      displayName: displayName,
      photoURL: photoURL,
      createdAt: serverTimestamp(),
      firstName: firstName || user.displayName?.split(' ')[0] || '',
      lastName: lastName || user.displayName?.split(' ').slice(1).join(' ') || '',
    });
     // Create a welcome notification
    const notificationRef = doc(collection(db, "users", user.uid, "notifications"));
    await setDoc(notificationRef, {
      title: "Welcome to Sehar Melo Éclat!",
      message: "We're so happy to have you. Explore our collection to find your signature scent.",
      read: false,
      createdAt: serverTimestamp(),
      link: "/products"
    });
  }
};
