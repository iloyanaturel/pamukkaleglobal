"use client";

import {useEffect} from "react";
import {useSearchParams} from "next/navigation";

export function ScrollToContact() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("product")) {
      document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
    }
  }, [searchParams]);

  return null;
}
