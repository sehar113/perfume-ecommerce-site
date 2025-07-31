
import type { Metadata } from 'next'
import Image from 'next/image'
import { Bot, Quote } from 'lucide-react'


export const metadata: Metadata = {
    title: 'Our Story',
    description: 'The story behind Sehar Melo Éclat and our passion for fragrance.',
}

export default function StoryPage() {
    return (
        <div className="flex-grow bg-secondary">
            <div className="container mx-auto px-4 py-16">
                <div className="text-center mb-16">
                    <Bot className="mx-auto h-12 w-12 text-primary" />
                    <h1 className="mt-4 text-4xl md:text-5xl font-headline font-bold">Our Story</h1>
                    <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
                        From a sibling's dream to a fragrant reality, this is how Sehar Melo Éclat came to be.
                    </p>
                </div>

                <div className="max-w-5xl mx-auto text-lg text-foreground space-y-12">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/imagesandvideo/ourstory/sehar.jpg"
                                alt="Sulman, the developer brother who built the website"
                                width={800}
                                height={1000}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-headline font-semibold">A Spark in the Game</h2>
                            <p>
                                One day, my brother and I were playing Free Fire on our phones, completely engrossed in the game. The room was filled with the sounds of gunfire and our excited shouts as we strategized. Suddenly, my sister, Sehar, walked in and said, "I wish I could create my own perfume brand called 'Sehar Melo.'"
                            </p>
                            <p>
                                At first, we barely paid attention, too focused on our match. But her words lingered. Later that evening, I thought about her dream again. Sehar had always loved fragrances—she would often mix different scents to create unique combinations. The idea of her owning a luxury perfume brand didn’t seem far-fetched at all.
                            </p>
                        </div>
                    </div>

                    <div className="bg-background p-8 md:p-12 rounded-lg shadow-xl my-12 border">
                        <Quote className="h-10 w-10 text-primary mb-4" />
                        <blockquote className="text-xl md:text-2xl font-light italic text-center">
                            “As a developer, I had the skills to bring her vision to life. I decided to take on the challenge of building an entire online luxury perfume store for her brand.”
                        </blockquote>
                        <p className="text-right mt-4 text-muted-foreground">- The Developer Brother</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 md:order-2">
                            <h2 className="text-3xl font-headline font-semibold">The Struggle and The Code</h2>
                            <p>
                                I started coding the website, full of enthusiasm. But soon, I ran into problems. The website kept crashing, the payment gateway wouldn’t integrate properly, and the fragrance customization feature was glitching. Every time I fixed one bug, another appeared. My sister would test the site and point out issues—"The 'Add to Cart' button disappears sometimes!" or "The scent mixer isn’t saving selections!"
                            </p>
                            <p>
                                Frustration set in. There were moments when I thought this was too difficult. But my sister never lost hope. She kept encouraging me, "We can do this! Let’s keep trying." After weeks of debugging, research, and rewriting code, things finally started falling into place. The website became smoother, the payment system worked, and the fragrance customization feature was fully functional.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-2xl md:order-1">
                           <Image
                                src="/imagesandvideo/ourstory/seahr.jpg"
                                alt="Sulman, the developer brother who built the website"
                                width={800}
                                height={1000}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
                        <div className="rounded-lg overflow-hidden shadow-2xl">
                            <Image
                                src="/imagesandvideo/ourstory/amna.jpg"
                                alt="Sulman, the developer brother who built the website"
                                width={800}
                                height={1000}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-headline font-semibold">The Grand Launch</h2>
                            <p>
                                Finally, the day arrived—Sehar Melo was ready to go live. My sister designed beautiful packaging, and we uploaded high-quality images of each perfume. We even ran a social media campaign, sharing the story behind the brand.
                            </p>
                            <p>
                                When the website launched, we held our breaths. Then, the first order notification popped up. Then another. And another. People loved the concept! The unique blends, the luxury feel, and the personal touch made Sehar Melo stand out. Months later, her dream had come true.
                            </p>
                            <p>
                                And the best part? My brother, who was busy playing Free Fire that day, now helps with marketing!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
