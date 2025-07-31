
"use client";

import Link from "next/link";
import { Bot, Home, Search, ShoppingCart, User, LogIn, UserPlus, Menu, ChevronDown, Bell, LogOut, Wand2, Info, UserRound, ListOrdered, Heart, Sun, Moon, Laptop } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useAuth } from "@/context/AuthProvider";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Badge } from "../ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useState } from "react";
import { auth, db } from "@/lib/firebase";
import { signOut } from "firebase/auth";
import { useRouter } from "next/navigation";
import { doc, updateDoc, writeBatch } from "firebase/firestore";
import { formatDistanceToNow } from "date-fns";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { useTheme } from "next-themes";
import { Separator } from "../ui/separator";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { 
    label: "Shop", 
    icon: ShoppingCart,
    subLinks: [
      { href: "/products", label: "All Products" },
      { href: "/products?category=Women", label: "For Women" },
      { href: "/products?category=Men", label: "For Men" },
      { href: "/products?category=Unisex", label: "Unisex" },
    ]
  },
  { 
    label: "AI Tools", 
    icon: Wand2,
    subLinks: [
      { href: "/scent-explorer", label: "Scent Explorer" },
      { href: "/layering-guide", label: "Layering Guide" },
    ]
  },
  {
    label: "About",
    icon: Info,
    subLinks: [
        { href: "/about/story", label: "Our Story" },
        { href: "/about/faq", label: "FAQs" },
        { href: "/about/contact", label: "Contact Us" },
    ]
  }
];

const getInitials = (name?: string | null, email?: string | null) => {
  if (name) {
    const names = name.split(' ');
    if (names.length > 1 && names[0] && names[names.length - 1]) {
      return `${names[0][0]}${names[names.length - 1][0]}`.toUpperCase();
    }
    return name.substring(0, 2).toUpperCase();
  }
  if (email) {
    return email.substring(0, 2).toUpperCase();
  }
  return 'U';
};


export function Header() {
  const { cartCount } = useCart();
  const { user, firestoreUser, notifications, unreadCount } = useAuth();
  const { setTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };
  
  const handleMarkAsRead = async (notificationId: string) => {
    if(user) {
      const notifRef = doc(db, "users", user.uid, "notifications", notificationId);
      await updateDoc(notifRef, { read: true });
    }
  }

  const handleMarkAllAsRead = async () => {
    if(user && unreadCount > 0) {
       const batch = writeBatch(db);
       const unreadNotifications = notifications.filter(n => !n.read);
       unreadNotifications.forEach(n => {
           const notifRef = doc(db, "users", user.uid, "notifications", n.id);
           batch.update(notifRef, { "read": true });
       });
       await batch.commit();
    }
  }

  const userAccountLinks = [
      { href: "/profile", label: "Profile", icon: UserRound },
      { href: "/orders", label: "Orders", icon: ListOrdered },
      { href: "/wishlist", label: "Wishlist", icon: Heart },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-border/40">
      <div className="container flex h-16 items-center">
        <div className="flex items-center mr-6">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/images/logo.png"
                alt="Sehar Melo Éclat Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
        </div>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-2 text-sm font-medium">
          {navLinks.map((link) => (
            link.subLinks ? (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="transition-colors text-foreground/80 hover:text-foreground font-semibold hover:border-b-2 hover:border-primary rounded-none">
                    {link.label}
                    <ChevronDown className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {link.subLinks.map(subLink => (
                    <DropdownMenuItem key={subLink.href} asChild>
                      <Link href={subLink.href} className="flex items-center gap-2">
                        {subLink.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
               <Button key={link.href} asChild variant="ghost">
                <Link
                  href={link.href!}
                  className="transition-colors text-foreground/80 hover:text-foreground font-semibold hover:border-b-2 hover:border-primary rounded-none"
                >
                  {link.label}
                </Link>
              </Button>
            )
          ))}
        </nav>

        <div className="hidden md:flex items-center justify-end space-x-1 md:space-x-2 ml-auto">
          <Button variant="ghost" size="icon" asChild>
            <Link href="/search">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Laptop className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                 {user && firestoreUser ? (
                   <Avatar className="h-8 w-8">
                      <AvatarImage src={firestoreUser.photoURL || undefined} alt={firestoreUser.displayName || 'User'} />
                      <AvatarFallback>{getInitials(firestoreUser.displayName, firestoreUser.email)}</AvatarFallback>
                    </Avatar>
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                <span className="sr-only">User Profile</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              {user ? (
                 <>
                  <DropdownMenuLabel>
                    <p>My Account</p>
                    <p className="text-xs text-muted-foreground font-normal">{user.email}</p>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    {userAccountLinks.map(link => (
                         <DropdownMenuItem key={link.href} asChild>
                            <Link href={link.href} className="flex items-center">
                                <link.icon className="mr-2 h-4 w-4" />
                                <span>{link.label}</span>
                            </Link>
                        </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                   <DropdownMenuItem asChild>
                    <Link href="/login">
                      <LogIn className="mr-2 h-4 w-4" />
                      <span>Log In</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/register">
                      <UserPlus className="mr-2 h-4 w-4" />
                      <span>Sign Up</span>
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {user && (
            <Popover>
              <PopoverTrigger asChild>
                 <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5" />
                    {unreadCount > 0 && (
                       <Badge
                        variant="destructive"
                        className="absolute -right-2 -top-2 h-5 w-5 justify-center rounded-full p-0 text-xs"
                      >
                        {unreadCount}
                      </Badge>
                    )}
                    <span className="sr-only">Notifications</span>
                  </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-0">
                 <div className="p-4 border-b">
                    <h4 className="font-medium text-sm">Notifications</h4>
                 </div>
                 <div className="p-2 max-h-80 overflow-y-auto">
                    {notifications.length > 0 ? (
                      notifications.map(notif => (
                        <div key={notif.id} className={`p-2 rounded-lg ${!notif.read && 'bg-secondary'}`}>
                           <Link href={notif.link || "#"} onClick={() => handleMarkAsRead(notif.id)}>
                             <h5 className="font-semibold text-sm">{notif.title}</h5>
                             <p className="text-xs text-muted-foreground">{notif.message}</p>
                             <p className="text-xs text-muted-foreground/70 mt-1">
                              {notif.createdAt ? formatDistanceToNow(notif.createdAt.toDate(), { addSuffix: true }) : ''}
                             </p>
                           </Link>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-muted-foreground text-center py-4">No notifications yet.</p>
                    )}
                 </div>
                 {unreadCount > 0 && (
                    <div className="p-2 border-t">
                      <Button variant="link" size="sm" onClick={handleMarkAllAsRead} className="w-full text-primary">Mark all as read</Button>
                    </div>
                  )}
              </PopoverContent>
            </Popover>
          )}

          <Button variant="ghost" size="icon" className="relative" asChild>
            <Link href="/cart">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -right-2 -top-2 h-5 w-5 justify-center rounded-full p-0 text-xs"
                >
                  {cartCount}
                </Badge>
              )}
              <span className="sr-only">Shopping Cart</span>
            </Link>
          </Button>
        </div>

        <div className="ml-auto flex items-center gap-1 md:hidden">
            <Button variant="ghost" size="icon" asChild>
                <Link href="/search">
                    <Search className="h-5 w-5" />
                    <span className="sr-only">Search</span>
                </Link>
            </Button>
             <Button variant="ghost" size="icon" asChild>
                 <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8">
                        {user && firestoreUser ? (
                          <Avatar className="h-8 w-8">
                              <AvatarImage src={firestoreUser.photoURL || undefined} alt={firestoreUser.displayName || 'User'} />
                              <AvatarFallback>{getInitials(firestoreUser.displayName, firestoreUser.email)}</AvatarFallback>
                            </Avatar>
                          ) : (
                            <User className="h-5 w-5" />
                          )}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                      {user ? (
                         <>
                          <DropdownMenuLabel>My Account</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                           {userAccountLinks.map(link => (
                             <DropdownMenuItem key={link.href} asChild>
                                <Link href={link.href} className="flex items-center">
                                    <link.icon className="mr-2 h-4 w-4" />
                                    <span>{link.label}</span>
                                </Link>
                            </DropdownMenuItem>
                           ))}
                          <DropdownMenuSeparator />
                          <DropdownMenuItem onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                          </DropdownMenuItem>
                        </>
                      ) : (
                        <>
                           <DropdownMenuItem asChild>
                            <Link href="/login">
                              <LogIn className="mr-2 h-4 w-4" />
                              <span>Log In</span>
                            </Link>
                          </DropdownMenuItem>
                          <DropdownMenuItem asChild>
                            <Link href="/register">
                              <UserPlus className="mr-2 h-4 w-4" />
                              <span>Sign Up</span>
                            </Link>
                          </DropdownMenuItem>
                        </>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
            </Button>
             <Button variant="ghost" size="icon" className="relative" asChild>
                <Link href="/cart">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                        <Badge
                        variant="destructive"
                        className="absolute -right-1 -top-1 h-4 w-4 justify-center rounded-full p-0 text-xs"
                        >
                        {cartCount}
                        </Badge>
                    )}
                    <span className="sr-only">Cart</span>
                </Link>
            </Button>

            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-sm">
                <SheetHeader>
                  <SheetTitle>
                     <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                        <Image 
                          src="/images/logo.png"
                          alt="Sehar Melo Éclat Logo"
                          width={140}
                          height={40}
                          className="h-10 w-auto"
                        />
                      </Link>
                  </SheetTitle>
                </SheetHeader>
                 <div className="flex flex-col mt-8 gap-2">
                  {navLinks.map((link) => (
                    link.subLinks ? (
                      <Accordion type="single" collapsible className="w-full" key={link.label}>
                        <AccordionItem value={link.label} className="border-b-0">
                          <AccordionTrigger className="text-lg hover:no-underline py-3 px-2">
                            {link.label}
                          </AccordionTrigger>
                          <AccordionContent className="pl-6">
                             <div className="flex flex-col gap-4 mt-2">
                              {link.subLinks.map(subLink => (
                                <Link
                                  key={subLink.href}
                                  href={subLink.href}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-md text-muted-foreground hover:text-foreground"
                                >
                                  {subLink.label}
                                </Link>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    ) : (
                      <Link
                        key={link.href}
                        href={link.href!}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-lg p-3 rounded-md hover:bg-muted"
                      >
                        {link.label}
                      </Link>
                    )
                  ))}
                  <Separator className="my-4" />
                  <div className="px-2">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Theme</p>
                    <div className="flex justify-around">
                        <Button variant="outline" size="icon" onClick={() => { setTheme("light"); setIsMobileMenuOpen(false); }}>
                            <Sun />
                        </Button>
                        <Button variant="outline" size="icon" onClick={() => { setTheme("dark"); setIsMobileMenuOpen(false); }}>
                            <Moon />
                        </Button>
                         <Button variant="outline" size="icon" onClick={() => { setTheme("system"); setIsMobileMenuOpen(false); }}>
                            <Laptop />
                        </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
      </div>
    </header>
  );
}
