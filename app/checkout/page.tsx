import AddressInfoSection from "@/components/checkout/AddressInfoSection";
import CartSection from "@/components/checkout/CartSection";
import PaymentSection from "@/components/checkout/PaymentSection";
import StepProgressSection from "@/components/checkout/StepProgressSection";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container-fluid">
        <StepProgressSection />
        <CartSection />
        <AddressInfoSection />
        <PaymentSection/>
      </div>
    </>
  );
};

export default page;
