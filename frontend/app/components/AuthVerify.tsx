"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { parseCookies } from "nookies";

export default function AuthVerify() {
  const router = useRouter();

  useEffect(() => {
    const cookies = parseCookies();
    const key = localStorage.getItem("key");
    const token = cookies.token;

    if (!token || token != key) {
      router.push("/");
      localStorage.removeItem("key");
    } else {
      router.push("/home");
    }
  }, []);

  return <></>;
}
