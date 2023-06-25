"use client";
import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function Main({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if(pathname == "/")
      router.push('/dashboard')
  }, []);
}
