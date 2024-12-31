"use client";

import { useUser } from "@/contexts/userContext";
import FormClass from "@/organisms/Form/Form";
import ImageClass from "@/organisms/ImageData/ImageData";
import Package from "@/organisms/Package/Package";
import { UploadImage } from "@/organisms/UploadImage/UploadImage";

export default function SubirImagenPage() {
  const Image = new ImageClass("superadmin", false);
  const { images } = useUser();

  return (
    <Package title={"Subir Imagen"}>
      <UploadImage uploadMethod="fromDesktop" />
      {images?.map((image, i) => {
        return <Image.Image name={image.name} image={image.image} key={i} />;
      })}
    </Package>
  );
}
