
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Bot, Loader2 } from 'lucide-react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { HourglassLoader } from '@/components/layout/HourglassLoader';
import { useNotification } from '@/hooks/use-notification';

export default function ForgotPasswordPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const { addNotification } = useNotification();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await sendPasswordResetEmail(auth, email);
      addNotification({
        type: 'success',
        title: "Email Sent!",
        message: "If an account exists, we've sent password reset instructions.",
      });
    } catch (error: any) {
      console.error(error);
      addNotification({
        type: 'error',
        title: "Error Sending Email",
        message: error.message || "An unexpected error occurred.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen-header py-12 px-4 bg-background">
      <Card className="w-full max-w-md shadow-2xl">
        <CardHeader className="text-center">
          <Bot className="mx-auto h-10 w-10 text-primary" />
          <CardTitle className="mt-4 font-headline text-3xl">Forgot Your Password?</CardTitle>
          <CardDescription>No worries. Enter your email and we'll send you a reset link.</CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading ? (
             <div className="flex justify-center items-center h-48">
                <HourglassLoader text="Sending email..." />
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="you@example.com" 
                  required 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                Send Reset Link
              </Button>
            </form>
          )}
        </CardContent>
        <CardFooter className="text-center text-sm">
          <p>
            Remembered your password?{' '}
            <Link href="/login" className="font-semibold text-primary hover:underline">
              Sign in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
