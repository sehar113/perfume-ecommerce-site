
import Link from "next/link";
import Image from "next/image";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import { Bot, Mail, Phone } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.9 3.3 4.9s-1.4 1.2-3.3 1.2c-.1 0 .1 3.5-2.5 5.5s-6.4 2-8.9-.2c-2.5-2.2-4.1-6.1-4.1-6.1s-2.1-.2-3.3-1.2c-1.2-1-1.2-2.3 0-3.3 1.2-1 2.3-1.2 3.3-1.2s-.2-2.1.2-3.3c.4-1.2 1.5-2.3 2.5-2.3s4.1.2 6.4 2c2.3 1.8 3.3 3.3 3.3 3.3s1.4-.2 2.5-.2c1.1 0 2.1.2 2.1.2z" /></svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
)

export function Footer() {
    const shopLinks = (
        <ul className="space-y-3 text-sm text-center md:text-left">
            <li><Link href="/products" className="text-muted-foreground hover:text-primary transition-colors">All Products</Link></li>
            <li><Link href="/products?category=Men" className="text-muted-foreground hover:text-primary transition-colors">For Men</Link></li>
            <li><Link href="/products?category=Women" className="text-muted-foreground hover:text-primary transition-colors">For Women</Link></li>
            <li><Link href="/products?category=Unisex" className="text-muted-foreground hover:text-primary transition-colors">Unisex</Link></li>
        </ul>
    );

    const aboutLinks = (
        <ul className="space-y-3 text-sm text-center md:text-left">
            <li><Link href="/about/story" className="text-muted-foreground hover:text-primary transition-colors">Our Story</Link></li>
            <li><Link href="/about/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link href="/about/faq" className="text-muted-foreground hover:text-primary transition-colors">FAQs</Link></li>
            <li><Link href="/about/shipping" className="text-muted-foreground hover:text-primary transition-colors">Shipping & Returns</Link></li>
        </ul>
    );

    const contactLinks = (
        <ul className="space-y-3 text-sm text-center md:text-left">
            <li>
                <a href="mailto:seharbashir114@gmail.com" className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    <span>seharbashir114@gmail.com</span>
                </a>
            </li>
            <li>
                <a href="tel:03165535971" className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    <span>03165535971</span>
                </a>
            </li>
        </ul>
    );

    const newsletterSection = (
        <div>
            <h3 className="font-semibold mb-4 text-center md:text-left">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center md:text-left">
                Subscribe for exclusive offers and new arrivals.
            </p>
            <form className="flex">
                <Input type="email" placeholder="Your email" className="rounded-r-none" />
                <Button type="submit" className="rounded-l-none">Subscribe</Button>
            </form>
        </div>
    );

    const newsletterSectionMobile = (
        <div className="mt-8">
            <h3 className="font-semibold mb-4 text-base text-center">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4 text-center">
                Subscribe for exclusive offers and new arrivals.
            </p>
            <form className="flex flex-col sm:flex-row w-full max-w-sm mx-auto">
                <Input type="email" placeholder="Your email" className="rounded-b-none sm:rounded-r-none sm:rounded-l-md" />
                <Button type="submit" className="rounded-t-none sm:rounded-l-none sm:rounded-r-md mt-2 sm:mt-0">Subscribe</Button>
            </form>
        </div>
    );


    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
                    <div className="lg:col-span-1 md:col-span-2">{newsletterSection}</div>

                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-4">Shop</h3>
                        {shopLinks}
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-4">About Us</h3>
                        {aboutLinks}
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="font-semibold mb-4">Get in Touch</h3>
                        {contactLinks}
                    </div>
                </div>

                <div className="md:hidden text-center mt-8">
                    <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="shop">
                            <AccordionTrigger className="font-semibold text-base">Shop</AccordionTrigger>
                            <AccordionContent>{shopLinks}</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="about">
                            <AccordionTrigger className="font-semibold text-base">About Us</AccordionTrigger>
                            <AccordionContent>{aboutLinks}</AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="contact">
                            <AccordionTrigger className="font-semibold text-base">Get in Touch</AccordionTrigger>
                            <AccordionContent>{contactLinks}</AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    {newsletterSectionMobile}
                </div>

                <Separator className="my-8 bg-border" />

                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Sehar Melo . All Rights Reserved.
                    </div>

                    <div className="flex items-center gap-4">
                        <Link href="/" className="inline-flex items-center space-x-2">
                            <Image
                                src="/imagesandvideo/forsmallitems/logo.png"
                                alt="Sehar Melo Éclat Logo"
                                width={140}
                                height={40}
                                className="h-16 w-auto"
                                priority
                            />
                        </Link>
                        <div className="flex space-x-3">
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><TwitterIcon className="h-5 w-5" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><InstagramIcon className="h-5 w-5" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><FacebookIcon className="h-5 w-5" /></Link>
                            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors"><WhatsAppIcon className="h-5 w-5" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
