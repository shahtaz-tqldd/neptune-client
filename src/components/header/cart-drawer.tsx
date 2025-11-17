"use client";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import Image from "next/image";
import Button from "../buttons/primary-button";
import { DEMO_PRODUCTS } from "@/templates/product-details/demo-data";
import Title from "../ui/title";

const mockCart = DEMO_PRODUCTS.slice(6, 9);

export default function CartDrawer({ open, setOpen }: any) {
  return (
    <Drawer open={open} onOpenChange={setOpen} direction="right">
      <DrawerContent className="right-0 left-auto !max-w-[420px] w-full rounded-none border-l border-l-primary/10">
        <DrawerHeader>
          <DrawerTitle></DrawerTitle>
          <Title variant="sm">Your Cart</Title>
          <DrawerDescription>Items you’ve added to cart</DrawerDescription>
        </DrawerHeader>

        <div className="px-4 py-2 flex flex-col gap-5 max-h-[70vh] overflow-y-auto">
          {mockCart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-b-gray-200 pb-3"
            >
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  height={100}
                  width={100}
                  className="rounded-md border h-16 w-16 object-cover"
                />
                <div>
                  <p className="text-primary text-xs font-semibold w-fit">
                    nike
                  </p>
                  <h5 className="font-medium turncate">{item.name}</h5>
                  <p className="text-sm mt-1">{item.price}</p>
                </div>
              </div>
              <Button variant="alert" size="xs" className="px-4">
                Remove
              </Button>
            </div>
          ))}
        </div>

        <DrawerFooter className="border-t border-t-gray-200">
          <Button className="w-full" link="/checkout">
            Checkout
          </Button>
          <DrawerClose asChild>
            <Button variant="rubix" className="w-full">
              Close
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
