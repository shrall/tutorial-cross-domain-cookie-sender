"use client";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

export default function Home() {
  const [cookie, setCookie] = useState("");
  useEffect(() => {
    if (Cookies.get("token") === undefined) {
      const tokenValue = "Token-" + Math.floor(Math.random() * 1000 + 1);
      Cookies.set("token", tokenValue, {
        domain: process.env.NEXT_PUBLIC_COOKIE_DOMAIN,
        sameSite: "none",
        secure: true,
      });
      setCookie(tokenValue);
    } else {
      const tokenValue = Cookies.get("token");
      if (tokenValue) setCookie(tokenValue);
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Cookie: {cookie}</div>
    </main>
  );
}
