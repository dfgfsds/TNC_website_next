"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginModal from "../components/LoginModal/page";
import { useVendor } from "../../../context/VendorContext";

const LoginPage = () => {
  const router = useRouter();
  const [model, setModel] = useState(true);
  const { vendorId } = useVendor();

  return (
    <>
      <LoginModal open={model} handleClose={() => router.push('/')} vendorId={vendorId} />
    </>
  );
};

export default LoginPage

