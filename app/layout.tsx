
import type { Metadata } from 'next';
import './globals.css';
import './nprogress.css';
import './chatbot.css';
import './payment-form.css';
import './login-form.css';
import './heart-animation.css';
import './payment-processing.css';
import './explore-button.css';
import './hourglass-loader.css';
import './error-alert.css';
import './success-alert.css';
import './order-alert.css';
import './learn-more-button.css';
import './scroll-to-top.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CartProvider } from '@/context/CartProvider';
import { AuthProvider } from '@/context/AuthProvider';
import { TopLoader } from '@/components/layout/TopLoader';
import { Suspense } from 'react';
import { ThemeProvider } from '@/components/layout/ThemeProvider';
import { WishlistProvider } from '@/context/WishlistProvider';
import { NotificationProvider } from '@/context/NotificationProvider';
import { NotificationContainer } from '@/components/notifications/NotificationContainer';
import { ScrollToTopButton } from '@/components/layout/ScrollToTopButton';

export const metadata: Metadata = {
  title: {
    default: 'Sehar Melo Éclat',
    template: '%s | Sehar Melo Éclat',
  },
  description: 'High-end e-commerce website for "Sehar Melo" perfume brand.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Lexend+Deca:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          'flex flex-col'
        )}
        suppressHydrationWarning={true}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <TopLoader />
          </Suspense>
          <NotificationProvider>
            <AuthProvider>
              <CartProvider>
                <WishlistProvider>
                  <Header />
                  <main className="flex-grow flex flex-col">{children}</main>
                  <Footer />
                  <ScrollToTopButton />
                </WishlistProvider>
              </CartProvider>
            </AuthProvider>
            <NotificationContainer />
          </NotificationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
