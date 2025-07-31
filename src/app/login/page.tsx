
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Loader2, Mail, Phone, ArrowLeft, AlertCircle } from 'lucide-react';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber, ConfirmationResult } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuth } from '@/context/AuthProvider';
import { createUserInFirestore } from '@/lib/firestore';
import { HourglassLoader } from '@/components/layout/HourglassLoader';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import { useNotification } from '@/hooks/use-notification';

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);


export default function LoginPage() {
  const [loginMethod, setLoginMethod] = useState<'email' | 'phone'>('email');
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);
  const [isPhoneLoading, setIsPhoneLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [error, setError] = useState('');

  const { addNotification } = useNotification();
  const router = useRouter();
  const { user, loading } = useAuth();
  
  const [recaptchaVerifier, setRecaptchaVerifier] = useState<RecaptchaVerifier | null>(null);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (recaptchaContainerRef.current && !recaptchaVerifier) {
      const verifier = new RecaptchaVerifier(auth, recaptchaContainerRef.current, {
        size: 'invisible',
        callback: () => {},
      });
      setRecaptchaVerifier(verifier);
    }
  }, [recaptchaVerifier]);


  useEffect(() => {
    if (!loading && user) {
        router.push('/');
    }
  }, [user, loading, router]);

  const handleAuthError = (error: any) => {
    let title = "Login Failed";
    let message = error.message || "An unexpected error occurred.";

    if (error.code === 'auth/operation-not-allowed') {
        title = "Phone Sign-In Disabled";
        message = "Phone sign-in is not enabled for this project. Please go to your Firebase Console -> Authentication -> Sign-in method and enable the Phone provider.";
    } else if (error.code === 'auth/unauthorized-domain') {
      title = "Unauthorized Domain";
      message = "This domain is not authorized. Please add it to your Firebase project's Authentication > Settings > Authorized domains.";
    } else if (error.code === 'auth/invalid-credential') {
      setError('Invalid email or password. Please try again.');
      return; 
    } else if (error.code === 'auth/invalid-phone-number') {
      title = "Invalid Phone Number";
      if (error.message.includes('TOO_SHORT')) {
        message = "The phone number you entered is too short. Please check it and try again."
      } else {
        message = "Please check the number and try again. It must be in E.164 format (e.g., +15551234567).";
      }
    }

    addNotification({
        type: 'error',
        title: title,
        message: message,
    });
  }

  const handleEmailSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      addNotification({
        type: 'success',
        title: "Logged In",
        message: "Welcome back!",
      });
      router.push('/');
    } catch (error: any) {
      handleAuthError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePhoneSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      if (!recaptchaVerifier) {
          addNotification({
              type: "error",
              title: "Error",
              message: "reCAPTCHA verifier is not ready. Please try again in a moment.",
          });
          return;
      }
      setIsPhoneLoading(true);
      setError('');
      try {
        const result = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
        setConfirmationResult(result);
        setShowOtpInput(true);
        addNotification({
            type: 'success',
            title: 'Verification Code Sent',
            message: 'Please check your phone for the OTP.',
        });
      } catch (error: any) {
        handleAuthError(error);
        recaptchaVerifier.render().then(widgetId => {
            (window as any).grecaptcha.reset(widgetId);
        });
      } finally {
          setIsPhoneLoading(false);
      }
  }

  const handleOtpSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!confirmationResult) return;
    setIsPhoneLoading(true);
    setError('');
    try {
        const result = await confirmationResult.confirm(otp);
        await createUserInFirestore(result.user);
        addNotification({
            type: 'success',
            title: 'Logged In Successfully',
            message: 'Welcome!',
        });
        router.push('/');
    } catch(error: any) {
        addNotification({
            type: 'error',
            title: 'Login Failed',
            message: 'The verification code is incorrect. Please try again.',
        });
    } finally {
        setIsPhoneLoading(false);
    }
  }

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true);
    setError('');
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        await createUserInFirestore(result.user);
        addNotification({
            type: 'success',
            title: "Logged In",
            message: "Welcome back!",
        });
        router.push('/');
    } catch (error: any) {
        if (error.code === 'auth/popup-closed-by-user') {
            console.log("Google Sign-In popup closed by user.");
        } else {
            handleAuthError(error);
        }
    } finally {
        setIsGoogleLoading(false);
    }
  };


  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-screen-header bg-background">
          <HourglassLoader text="Loading..."/>
        </div>
    );
  }
  
  if (user) return null;


  const renderEmailForm = () => (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center h-48">
          <HourglassLoader text="Signing in..."/>
        </div>
      ) : (
        <form onSubmit={handleEmailSubmit} className="form">
          {error && (
            <Alert variant="destructive" className="mb-2">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Login Failed</AlertTitle>
              <AlertDescription>
                {error}
              </AlertDescription>
            </Alert>
          )}
          <input type="email" name="email" className={cn("input", error && "border-destructive focus-visible:ring-destructive")} placeholder="Email" required onChange={() => setError('')} />
          <input type="password" name="password" className={cn("input", error && "border-destructive focus-visible:ring-destructive")} placeholder="Password" required onChange={() => setError('')} />
          <p className="page-link">
            <Link href="/forgot-password" className="page-link-label">Forgot Password?</Link>
          </p>
          <button className="form-btn" disabled={isLoading}>
            Log in
          </button>
        </form>
      )}
    </>
  );

  const renderPhoneForm = () => (
    <>
      {isPhoneLoading ? (
         <div className="flex justify-center items-center h-48">
          <HourglassLoader text="Verifying..."/>
        </div>
      ) : !showOtpInput ? (
        <form onSubmit={handlePhoneSubmit} className="form">
          <input 
            type="tel" 
            name="phone" 
            className="input" 
            placeholder="e.g. +15551234567" 
            required 
            value={phoneNumber}
            onChange={(e) => { setPhoneNumber(e.target.value); setError(''); }}
          />
          <button className="form-btn">
            Send Code
          </button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit} className="form">
          <p className="text-center text-sm text-muted-foreground -mt-2">Enter the code we sent to {phoneNumber}</p>
          <input 
            type="text" 
            name="otp" 
            className="input" 
            placeholder="6-digit code" 
            required 
            value={otp}
            onChange={(e) => { setOtp(e.target.value); setError(''); }}
          />
          <button className="form-btn">
            Verify and Log In
          </button>
           <button type="button" onClick={() => setShowOtpInput(false)} className="text-sm text-muted-foreground hover:text-primary flex items-center justify-center gap-1">
             <ArrowLeft className="h-3 w-3" /> Back to phone number
           </button>
        </form>
      )}
    </>
  );

  return (
    <div className="flex items-center justify-center min-h-screen-header py-12 px-4 bg-secondary">
      <div id="recaptcha-container" ref={recaptchaContainerRef}></div>
      <div className="login-form-container">
        <p className="title">Welcome back</p>
        
        {loginMethod === 'email' ? renderEmailForm() : renderPhoneForm()}

        <p className="sign-up-label">
          Don't have an account?
          <Link href="/register" className="sign-up-link">Sign up</Link>
        </p>

        <div className="buttons-container">
          <button className="social-login-button" onClick={() => { setLoginMethod(loginMethod === 'email' ? 'phone' : 'email'); setError(''); }}>
            {loginMethod === 'email' 
              ? <><Phone className="social-icon" /><span>Log in with Phone</span></>
              : <><Mail className="social-icon" /><span>Log in with Email</span></>
            }
          </button>
          <button className="social-login-button" onClick={handleGoogleSignIn} disabled={isGoogleLoading}>
            {isGoogleLoading 
              ? <Loader2 className="h-5 w-5 animate-spin mx-auto" /> 
              : <><GoogleIcon className="social-icon" /><span>Log in with Google</span></>
            }
          </button>
        </div>
      </div>
    </div>
  );
}
