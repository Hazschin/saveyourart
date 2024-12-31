"use client";

import { useUser } from "@/contexts/userContext";
import Package from "@/organisms/Package/Package";
import ProductClass from "@/organisms/Product/Product";

export default function Admin() {
  const { products } = useUser();
  return (
    <>
      <Package title={"Tus obras"}>
        {products?.map((product, i) => {
          const Product = new ProductClass(product);
          return <Product.Product key={i}></Product.Product>;
        })}
      </Package>
    </>
  );
}
