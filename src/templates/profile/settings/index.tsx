import React from "react";
import MyProfileLayout from "../profile-layout";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";
import Button from "@/components/buttons/primary-button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CreditCard, Info } from "lucide-react";

const SettingsPage = () => {
  return (
    <MyProfileLayout>
      <div>
        <h3>Profile Settings</h3>

        <div className="mt-8 space-y-8">
          {/* Account Info */}
          <div className="border border-gray-200 rounded-xl shadow-sm p-6">
            <h4 className="mb-4">Account Information</h4>

            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Name</Label>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <Label>Email</Label>
                  <Input type="email" placeholder="Enter your email" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>New Password</Label>
                  <Input type="password" placeholder="Enter new password" />
                </div>
                <div>
                  <Label>Confirm Password</Label>
                  <Input type="password" placeholder="Confirm new password" />
                </div>
              </div>

              <Button size="xs" className="mt-2">
                Save Changes
              </Button>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="border border-gray-200 rounded-xl shadow-sm p-6">
            <h4 className="mb-4">Shipping Information</h4>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label>Address Line 1</Label>
                  <Input placeholder="House, Street" />
                </div>
                <div>
                  <Label>Address Line 2</Label>
                  <Input placeholder="Apartment, Suite (Optional)" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <Label>City</Label>
                  <Input placeholder="City" />
                </div>
                <div>
                  <Label>State</Label>
                  <Input placeholder="State" />
                </div>
                <div>
                  <Label>Zip Code</Label>
                  <Input placeholder="Zip" />
                </div>
              </div>

              <Button size="xs" className="mt-2">
                Update Shipping
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-6">
            {/* Saved Payment Methods */}
            <div className="col-span-3 border border-gray-200 rounded-xl shadow-sm p-6">
              <h4 className="mb-4">Saved Cards</h4>

              <div className="space-y-4">
                <div className="flex items-center justify-between border p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <CreditCard className="w-6 h-6" />
                    <div>
                      <p className="text-sm font-medium">Visa **** 4242</p>
                      <p className="text-xs text-muted-foreground">
                        Expires 12/27
                      </p>
                    </div>
                  </div>
                  <Button size="xs" variant="alert">
                    Remove
                  </Button>
                </div>
              </div>
            </div>

            {/* Assistant Message Limit */}
            <div className="col-span-2 border border-gray-200 rounded-xl shadow-sm p-6">
              <h4 className="mb-4">Assistant Message Limit</h4>

              <div className="flex items-center gap-3">
                <p className="text-sm">30 messages</p>

                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Info className="w-4 h-4 text-muted-foreground cursor-pointer" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-xs">
                        Based on your purchase, you have
                        <br /> access to 30 assistant messages.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MyProfileLayout>
  );
};

export default SettingsPage;
