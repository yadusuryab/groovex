import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface PaymentMethodProps {
  paymentMethod: "online" | "cod";
  handlePaymentChange: (method: "online" | "cod") => void;
  handleCheckout: () => void;
  isLoading: boolean;
}

export const PaymentMethod = ({
  paymentMethod,
  handlePaymentChange,
  handleCheckout,
  isLoading,
}: PaymentMethodProps) => (
  <div className="space-y-4">
    {/* Payment Mode */}
    <div>
      <p className="font-medium">Select Payment Mode:</p>
      <div className="space-y-2 mt-2">
        <Label className="flex items-center space-x-2">
          <Input
            type="radio"
            value="online"
            checked={paymentMethod === "online"}
            onChange={() => handlePaymentChange("online")}
          />
          <span>Online Payment</span>
        </Label>
        <Label className="flex items-center space-x-2">
          <Input
            type="radio"
            value="cod"
            checked={paymentMethod === "cod"}
            onChange={() => handlePaymentChange("cod")}
          />
          <span>Cash on Delivery</span>
        </Label>
      </div>
    </div>

    {/* Terms */}
    <div>
      <p>
        By placing order you agree to our{" "}
        <Link href="/T&C" className="underline">
          Terms & Conditions
        </Link>.
      </p>
    </div>

    {/* Checkout Button */}
    <Button className="w-full" onClick={handleCheckout} disabled={isLoading}>
      {isLoading ? "Processing..." : "Place Order"}
    </Button>
  </div>
);
