"use client";
import React, { useState } from "react";
import {
  ShoppingCart,
  Lock,
  CreditCard,
  Truck,
  Gift,
  AlertCircle,
  Check,
  MapPinned,
  MapPinIcon,
} from "lucide-react";
import Button from "@/components/buttons/primary-button";
import { Input } from "@/components/ui/input";
import {
  CityIcon,
  EmailIcon,
  MapIcon,
  UserIcon,
  WorldIcon,
} from "@/assets/algo-icons";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  color?: string;
  size?: string;
}

interface ShippingInfo {
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  country: string;
}

const CheckoutPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState<ShippingInfo>({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "United States",
  });
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [promoCode, setPromoCode] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);

  // Mock cart data
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Nike ZoomX Velocity Running Shoes",
      price: 299.99,
      quantity: 1,
      image:
        "https://img.kwcdn.com/product/fancy/49bd82d7-2205-44a1-bde4-b5d5eb2b1b8d.jpg",
      color: "#0eb56aff",
    },
    {
      id: "2",
      name: " Engineered ZoomX Edge 2",
      price: 399.99,
      quantity: 1,
      image:
        "https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/00/2419663/1.jpg?2369",
      size: "42",
    },
  ];

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 15.99;
  const discount = promoApplied ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const handleInputChange = (field: keyof ShippingInfo, value: string) => {
    setShippingInfo((prev) => ({ ...prev, [field]: value }));
  };

  const handlePromoApply = () => {
    if (promoCode.toLowerCase() === "save10") {
      setPromoApplied(true);
    }
  };

  const isStepComplete = (step: number) => {
    if (step === 1) return currentStep > 1;
    if (step === 2) return currentStep > 2;
    return false;
  };

  return (
    <div className="container pt-32 pb-20">
      <div className="">
        {/* Header */}
        <div className="flbx mb-12">
          <div className="">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Checkout</h2>
            <p className="text-gray-600">
              Complete your order in just a few steps
            </p>
          </div>

          {/* Progress Steps */}
          <div className="">
            <div className="flex items-center justify-center space-x-8">
              {[1, 2, 3].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-300 ${
                      currentStep >= step
                        ? "bg-green-500 border-green-500 text-white"
                        : "border-gray-300 text-gray-400"
                    } ${isStepComplete(step) ? "bg-green-600" : ""}`}
                  >
                    {isStepComplete(step) ? <Check size={16} /> : step}
                  </div>
                  <span
                    className={`ml-2 text-sm font-medium ${
                      currentStep >= step ? "text-green-600" : "text-gray-400"
                    }`}
                  >
                    {step === 1
                      ? "Shipping"
                      : step === 2
                      ? "Payment"
                      : "Review"}
                  </span>
                  {step < 3 && (
                    <div
                      className={`ml-8 w-16 h-px ${
                        currentStep > step ? "bg-green-500" : "bg-gray-300"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              {/* Step 1: Shipping Information */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Truck className="w-6 h-6 text-green-500" />
                    <h4 className="text-xl font-semibold text-gray-900">
                      Shipping Information
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <Input
                        icon={<UserIcon size={5} />}
                        placeholder="First Name"
                        value={shippingInfo.firstName}
                        onChange={(e) =>
                          handleInputChange("firstName", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <Input
                        icon={<UserIcon size={5} />}
                        placeholder="Last Name"
                        value={shippingInfo.lastName}
                        onChange={(e) =>
                          handleInputChange("lastName", e.target.value)
                        }
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      icon={<EmailIcon size={5} />}
                      placeholder="example@email.com"
                      value={shippingInfo.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address
                    </label>
                    <Input
                      icon={<MapIcon size={5} />}
                      placeholder="Address"
                      value={shippingInfo.address}
                      onChange={(e) =>
                        handleInputChange("address", e.target.value)
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <Input
                        icon={<CityIcon size={5} />}
                        placeholder="Dhaka"
                        value={shippingInfo.city}
                        onChange={(e) =>
                          handleInputChange("city", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code
                      </label>
                      <Input
                        icon={<WorldIcon size={5} />}
                        placeholder="Zip Code"
                        value={shippingInfo.zipCode}
                        onChange={(e) =>
                          handleInputChange("zipCode", e.target.value)
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <Input
                        icon={<MapPinIcon size={20} />}
                        placeholder="Bangladesh"
                        value={shippingInfo.country}
                        onChange={(e) =>
                          handleInputChange("country", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                    <Button size="lg" variant="deccent">
                      Go Back to Cart
                    </Button>

                    <Button onClick={() => setCurrentStep(2)}>
                      Continue to Payment
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <CreditCard className="w-6 h-6 text-green-500" />
                    <h4 className="text-xl font-semibold text-gray-900">
                      Payment Method
                    </h4>
                  </div>

                  <div className="space-y-4">
                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === "card"
                          ? "border-green-500 bg-green-50/50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setPaymentMethod("card")}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          checked={paymentMethod === "card"}
                          onChange={() => setPaymentMethod("card")}
                          className="text-green-500 focus:ring-green-500"
                        />
                        <span className="font-medium text-gray-900">
                          Credit/Debit Card
                        </span>
                      </div>
                      {paymentMethod === "card" && (
                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                          <div className="flex items-center space-x-2">
                            <AlertCircle className="w-5 h-5 text-green-500" />
                            <p className="text-sm text-green-700">
                              Card payment will be processed securely through
                              Stripe on the next step.
                            </p>
                          </div>
                        </div>
                      )}
                    </div>

                    <div
                      className={`border-2 rounded-lg p-4 cursor-pointer transition-all ${
                        paymentMethod === "paypal"
                          ? "border-green-500 bg-green-50/50"
                          : "border-gray-200"
                      }`}
                      onClick={() => setPaymentMethod("paypal")}
                    >
                      <div className="flex items-center space-x-3">
                        <input
                          type="radio"
                          checked={paymentMethod === "paypal"}
                          onChange={() => setPaymentMethod("paypal")}
                          className="text-green-500 focus:ring-green-500"
                        />

                        <span className="font-medium text-gray-900">
                          Cash on Delivery
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
                    <Button
                      size="lg"
                      variant="deccent"
                      onClick={() => setCurrentStep(1)}
                    >
                      Back
                    </Button>
                    <Button size="lg" onClick={() => setCurrentStep(3)}>
                      Review Order
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Order Review */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <Check className="w-6 h-6 text-green-500" />
                    <h4 className="text-xl font-semibold text-gray-900">
                      Review Your Order
                    </h4>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6 space-y-4">
                    <h4 className="font-medium text-gray-900">
                      Shipping Information
                    </h4>
                    <p className="text-gray-600">
                      {shippingInfo.firstName} {shippingInfo.lastName}
                      <br />
                      {shippingInfo.email}
                      <br />
                      {shippingInfo.address}
                      <br />
                      {shippingInfo.city}, {shippingInfo.zipCode}
                      <br />
                      {shippingInfo.country}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h4 className="font-medium text-gray-900 mb-2">
                      Payment Method
                    </h4>
                    <p className="text-gray-600">
                      {paymentMethod === "card"
                        ? "Credit/Debit Card (via Stripe)"
                        : "PayPal"}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    <Button
                      size="lg"
                      variant="deccent"
                      onClick={() => setCurrentStep(2)}
                    >
                      Back
                    </Button>
                    <Button size="lg" isArrow={false}>
                      <div className="flx gap-3">
                        <Lock className="w-4 h-4" />
                        <span>Complete Order</span>
                      </div>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="max-w-[480px] w-full">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 sticky top-8">
              <div className="flex items-center space-x-3 mb-6">
                <ShoppingCart className="w-6 h-6 text-green-500" />
                <h4 className="text-xl font-semibold text-gray-900">
                  Order Summary
                </h4>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {item.name}
                      </p>
                      <div className="mt-2 space-y-1">
                        <p className="text-sm text-gray-500">
                          Qty: {item.quantity}
                        </p>
                        {item.size && (
                          <p className="text-sm text-gray-500">
                            Size: {item.size}
                          </p>
                        )}
                        {item.color && (
                          <p className="text-sm text-gray-500 flx gap-2">
                            Color: <div style={{backgroundColor: item.color}} className="h-4 w-4 rounded-full" />
                          </p>
                        )}
                      </div>
                    </div>
                    <p className="text-sm font-medium text-gray-900">
                      ${item.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <div className="w-full flex space-x-2">
                  <div className="w-full">
                    <Input
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Promo code"
                      className="max-w-full"
                      icon={<Gift className="w-5 h-5" />}
                    />
                  </div>

                  <button
                    onClick={handlePromoApply}
                    className="px-5 py-2 bg-black/90 hover:bg-black text-white text-sm rounded-md transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoApplied && (
                  <div className="mt-2 flex items-center space-x-2 text-sm text-green-600 px-1">
                    <span>10% discount applied!</span>
                  </div>
                )}
              </div>

              {/* Order Totals */}
              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Shipping</span>
                  <span className="text-gray-900">${shipping.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Discount (10%)</span>
                    <span className="text-green-600">
                      -${discount.toFixed(2)}
                    </span>
                  </div>
                )}
                <div className="border-t border-gray-200 pt-3 flex justify-between font-semibold text-lg">
                  <span className="text-gray-900">Total</span>
                  <span className="text-gray-900">${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Security Badge */}
              <div className="mt-12 flex items-center justify-center space-x-2 text-sm text-gray-500">
                <Lock className="w-4 h-4" />
                <span>Secure checkout with SSL encryption</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
