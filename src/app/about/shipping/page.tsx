
import type { Metadata } from 'next'
import { Package, Truck, Globe } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Shipping & Returns',
  description: 'Information about shipping and returns for Sehar Melo Éclat.',
}

export default function ShippingReturnsPage() {
  return (
    <div className="flex-grow bg-secondary">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Shipping & Returns</h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about how we get our fragrances to you, and what to do if you need to make a return.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background p-8 rounded-lg border">
              <h2 className="text-2xl font-headline font-semibold mb-4">Shipping Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-4">
                  <Truck className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p><strong>Standard Shipping:</strong> We offer complimentary standard shipping on all orders. Please allow 3-5 business days for your order to arrive.</p>
                </div>
                <div className="flex items-start gap-4">
                  <Package className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p><strong>Express Shipping:</strong> Need it faster? Choose express shipping at checkout for an additional fee. Your order will arrive in 1-2 business days.</p>
                </div>
                <div className="flex items-start gap-4">
                  <Globe className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <p><strong>International Shipping:</strong> We ship worldwide! International shipping rates and times vary by destination and will be calculated at checkout.</p>
                </div>
              </div>
            </div>
            <div className="bg-background p-8 rounded-lg border">
              <h2 className="text-2xl font-headline font-semibold mb-4">Return Policy</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>We want you to be completely in love with your new fragrance. If for any reason you are not satisfied, we are here to help.</p>
                <p>We accept returns for unopened products in their original packaging within <strong>30 days of purchase</strong> for a full refund or exchange.</p>
                <p>Please note that return shipping costs are the responsibility of the customer. To initiate a return, please contact our support team through our <a href="/about/contact" className="text-primary hover:underline">Contact Page</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
