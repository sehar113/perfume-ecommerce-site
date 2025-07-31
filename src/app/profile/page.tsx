
"use client"

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthProvider'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { Loader2, User } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HourglassLoader } from '@/components/layout/HourglassLoader';

export default function ProfilePage() {
  const { user, firestoreUser, loading } = useAuth()
  const router = useRouter()
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
    if (firestoreUser) {
        setFirstName(firestoreUser.firstName || '');
        setLastName(firestoreUser.lastName || '');
    }
  }, [user, firestoreUser, loading, router]);

  if (loading || !user) {
    return (
      <div className="flex items-center justify-center flex-grow">
        <HourglassLoader text="Loading Profile..." />
      </div>
    )
  }
  
  return (
    <div className="flex-grow bg-secondary py-12">
      <div className="container mx-auto px-4">
         <div className="text-center mb-8">
            <User className="mx-auto h-10 w-10 text-primary" />
            <h1 className="text-4xl font-headline font-bold mt-4">My Profile</h1>
            <p className="mt-2 text-muted-foreground">Manage your account settings and password.</p>
        </div>

        <div className="max-w-2xl mx-auto">
             <Tabs defaultValue="account" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="account">Account Information</TabsTrigger>
                    <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                 <TabsContent value="account">
                     <div className="payment-modal mx-auto">
                        <form className="payment-form">
                             <div className="credit-card-info--form">
                                <div className="split">
                                    <div className="input_container">
                                        <label htmlFor="first-name" className="input_label">First Name</label>
                                        <input id="first-name" className="input_field" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                    </div>
                                    <div className="input_container">
                                        <label htmlFor="last-name" className="input_label">Last Name</label>
                                        <input id="last-name" className="input_field" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                    </div>
                                </div>
                                <div className="input_container">
                                    <label htmlFor="email" className="input_label">Email</label>
                                    <input id="email" className="input_field" type="email" value={user.email || ''} readOnly disabled />
                                </div>
                             </div>
                             <button className="purchase--btn">Update Profile</button>
                        </form>
                    </div>
                </TabsContent>
                <TabsContent value="security">
                     <div className="payment-modal mx-auto">
                        <form className="payment-form">
                             <div className="credit-card-info--form">
                                 <div className="input_container">
                                    <label htmlFor="current-password" className="input_label">Current Password</label>
                                    <input id="current-password" type="password" className="input_field" />
                                </div>
                                 <div className="input_container">
                                    <label htmlFor="new-password" className="input_label">New Password</label>
                                    <input id="new-password" type="password" className="input_field" />
                                </div>
                                 <div className="input_container">
                                    <label htmlFor="confirm-password" className="input_label">Confirm New Password</label>
                                    <input id="confirm-password" type="password" className="input_field" />
                                </div>
                             </div>
                             <button className="purchase--btn">Change Password</button>
                        </form>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
      </div>
    </div>
  )
}
