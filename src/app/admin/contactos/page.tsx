"use client";

import { useUser } from "@/contexts/userContext";
import ContactClass from "@/organisms/Contact/Contact";
import Package from "@/organisms/Package/Package";

export default function CotizacionesPage() {
  const { contacts } = useUser();
  return (
    <Package title={"Tus cotizaciones"}>
      {contacts?.map((contact, i) => {
        let Contact = new ContactClass(contact);
        return <Contact.Contact key={i} />;
      })}
    </Package>
  );
}
