"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import LoginModal from "../components/LoginModal/page";

const LoginPage = () => {

   const router = useRouter();
  const [model, setModel] = useState(true);
  return (
    <>
    <LoginModal open={model} handleClose={() => router.push('/')} />
      </>
  )
}

export default LoginPage

