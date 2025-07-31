
"use client"

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function PaymentProcessingAnimation() {
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        // Trigger the animation shortly after the component mounts
        const timer = setTimeout(() => setIsProcessing(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={cn("payment-processing-container", isProcessing && "processing")}>
            <div className="left-side">
                <div className="card">
                    <div className="card-line"></div>
                    <div className="buttons"></div>
                </div>
                <div className="post">
                    <div className="post-line"></div>
                    <div className="screen">
                        <div className="dollar">$</div>
                    </div>
                    <div className="numbers"></div>
                    <div className="numbers-line2"></div>
                </div>
            </div>
            <div className="right-side">
                <div className="new">Processing Payment</div>
                <svg viewBox="0 0 451.846 451.847" height="20" width="20" xmlns="http://www.w3.org/2000/svg" className="arrow">
                    <path d="M345.441 248.292L151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373z"></path>
                </svg>
            </div>
        </div>
    );
}
