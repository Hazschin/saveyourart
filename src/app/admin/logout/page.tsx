"use client";
import Package from "@/organisms/Package/Package";
import SimpleTemplate from "@/templates/SimpleTemplate/SimpleTemplate";
import { useEffect } from "react";

export default function LogoutPage() {
  useEffect(() => {
    window.location.href = "/login";
  });
  return <Package title={"Nos vemos pronto"}></Package>;
}
