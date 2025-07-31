
"use client";

import { useNotification } from "@/hooks/use-notification";
import Link from "next/link";

interface OrderAlertProps {
    id: string;
    title: string;
    message?: string;
}

export function OrderAlert({ id, title, message }: OrderAlertProps) {
    const { removeNotification } = useNotification();
    
    const handleDismiss = () => {
        removeNotification(id);
    }
    
    return (
        <div className="order-alert-container">
            <div className="success">
                <div className="flex">
                <div className="flex-shrink-0">
                    <svg className="succes-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                </div>
                <div className="success-prompt-wrap">
                    <p className="success-prompt-heading">{title}</p>
                    {message && (
                        <div className="success-prompt-prompt">
                            <p>{message}</p>
                        </div>
                    )}
                    <div className="success-button-container">
                        <Link href="/orders">
                            <button type="button" className="success-button-main" onClick={handleDismiss}>View status</button>
                        </Link>
                        <button type="button" className="success-button-secondary" onClick={handleDismiss}>Dismiss</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
