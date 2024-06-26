"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [cookie, setCookie] = useState("");
  useEffect(() => {
    if (!document.cookie.includes("token")) {
      console.log("cookie token not available");
      const tokenValue = "Token-" + Math.floor(Math.random() * 1000 + 1);
      const cookieData = `token=${tokenValue}; domain=${process.env.NEXT_PUBLIC_COOKIE_DOMAIN}; path=/`;
      console.log("cookieData", cookieData);
      console.log("domain", process.env.NEXT_PUBLIC_COOKIE_DOMAIN);
      window.postMessage(
        { type: "setCookie", cookie: cookieData },
        process.env.NEXT_PUBLIC_COOKIE_DOMAIN || "*"
      );
      setCookie(tokenValue);
    } else {
      const tokenValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("token"));
      console.log("tokenValue", tokenValue);
      if (tokenValue) {
        const token = tokenValue.split("=")[1];
        setCookie(token);
      }
    }
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Cookie: {cookie}</div>
    </main>
  );
}
