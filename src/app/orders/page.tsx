
import type { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Package } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'My Orders',
  description: 'View your order history at Sehar Melo Éclat.',
}

export default function OrdersPage() {
  // Placeholder data - in a real app, this would come from a database
  const orders = [] as any[]; 

  return (
    <div className="flex-grow bg-secondary">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-headline font-bold mb-8">My Orders</h1>

        {orders.length === 0 ? (
          <div className="text-center py-20 border-2 border-dashed rounded-lg">
            <Package className="mx-auto h-24 w-24 text-muted-foreground/50" />
            <h2 className="mt-6 text-2xl font-semibold">You haven't placed any orders yet.</h2>
            <p className="mt-2 text-muted-foreground">All your future orders will appear here.</p>
            <Button asChild className="mt-6">
              <Link href="/products">Start Shopping</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <Card key={order.id}>
                <CardHeader className="flex flex-row justify-between items-center">
                  <div>
                    <CardTitle>Order #{order.id}</CardTitle>
                    <CardDescription>Date: {order.date}</CardDescription>
                  </div>
                  <div className="text-right">
                     <p className="font-semibold">${order.total.toFixed(2)}</p>
                     <span className="text-sm text-green-600">{order.status}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="divide-y">
                      {order.items.map((item: any) => (
                          <li key={item.id} className="py-4 flex items-center justify-between">
                            <span>{item.name} (x{item.quantity})</span>
                            <span>${(item.price * item.quantity).toFixed(2)}</span>
                          </li>
                      ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button variant="outline">View Details</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
