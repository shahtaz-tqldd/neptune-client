"use client";

import React from "react";
import Button from "@/components/buttons/primary-button";
import LinkButton from "@/components/buttons/link-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";

const CheckoutPage = () => {
  return (
    <main className="pb-20 pt-28 container">
      {/* Heading */}
      <h3 className="text-3xl font-semibold mb-6">Checkout</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Form Section */}
        <div className="lg:col-span-2 space-y-10">
          {/* Shipping Information */}
          <Card className="space-y-4">
            <h4 className="mb-6">Shipping Information</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Email Address" />
            <Input placeholder="Phone Number" />
            </div>
            <Textarea placeholder="Street Address" />
            <div className="grid md:grid-cols-3 gap-6">
              <Input placeholder="City" />
              <Input placeholder="State/Province" />
              <Input placeholder="Postal Code" />
            </div>
          </Card>
          {/* Notes */}
          <Card className="space-y-4">
            <h4 className="mb-6">Order Notes</h4>
            <Textarea placeholder="Add any special delivery notes here..." />
          </Card>
        </div>

        {/* Order Summary */}
        <Card className="space-y-6 h-fit">
          <h4 className="mb-6">Order Summary</h4>
          <div className="space-y-4">
            {/* Example item */}
            <div className="flex justify-between">
              <span>Nike Air Max 270</span>
              <span>$150</span>
            </div>
            <div className="flex justify-between">
              <span>Puma Running Shoes</span>
              <span>$120</span>
            </div>
            <div className="border-t border-t-green-500/30 pt-4 flex justify-between font-medium">
              <span>Subtotal</span>
              <span>$270</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$20</span>
            </div>
            <div className="border-t border-t-green-500/30 pt-4 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>$290</span>
            </div>
          </div>
          <h4 className="mb-6">Payment Method</h4>
            <div className="space-y-3">
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" defaultChecked />
                <span>Credit/Debit Card</span>
              </label>
              <label className="flex items-center gap-3">
                <input type="radio" name="payment" />
                <span>Cash on Delivery</span>
              </label>
            </div>

          <Button size="sm" variant="accent" className="w-full mt-6">
            Place Order
          </Button>
          <LinkButton link="/cart" className="block text-center">
            Return to Cart
          </LinkButton>
          </Card>
      </div>
    </main>
  );
};

export default CheckoutPage;
