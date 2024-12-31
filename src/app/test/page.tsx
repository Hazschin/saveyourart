"use client";

import Header from "@/organisms/Header/Header";
import Footer from "@/organisms/Footer/Footer";
import ProductClass from "@/organisms/Product/Product";
import Sidebar from "@/organisms/Sidebar/Sidebar";
import Divider from "@mui/material/Divider";
import Package from "@/organisms/Package/Package";
import ArtistClass from "@/organisms/Artist/Artist";
import ImageContainer from "@/organisms/ImageContainer/ImageContainer";
import ButtonMenu from "@/organisms/ButtonMenu/ButtonMenu";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Dehaze from "@mui/icons-material/Dehaze";
import ButtonSidebar from "@/organisms/ButtonSidebar/ButtonSidebar";
import FormClass from "@/organisms/FormV2/Form";
import LoginForm from "@/organisms/LoginForm/LoginForm";
import SignupForm from "@/organisms/SignupForm/SignupForm";
import { useDevice } from "@/contexts/deviceContext";
import ImageClass from "@/organisms/ImageData/ImageData";
import ContactClass from "@/organisms/Contact/Contact";
import { useThemeCapart } from "@/contexts/themeContext";
import {
  FileUpload,
  FormatAlignCenter,
  Numbers,
  Phone,
  TextDecrease,
} from "@mui/icons-material";
import { SelectImage } from "@/organisms/SelectImage/SelectImage";

export default function Test() {
  const { device } = useDevice();
  const Form = new FormClass("Formulario de ejemplo");
  const Product = new ProductClass({
    title: "product-1",
    price: 9999,
    productImgs: ["/assets/latempestad.png"],
  });
  const Artist = new ArtistClass();
  const Image = new ImageClass();
  const Contact = new ContactClass({
    image: "/assets/retrato.png",
    productTitle: "product-1",
    contactName: "Anónimo",
    network: "facebook",
    username: "anonimo",
    phone: 3322114455,
    phoneType: "telegram",
    email: "correo@hotmail.com",
  });
  const { phoneTypes } = useThemeCapart();
  return (
    <>
      {device}
      <Divider sx={{ my: 5 }} />
      <Header>
        <Sidebar />
      </Header>
      <Divider sx={{ my: 5 }} />

      <Sidebar />
      <Divider sx={{ my: 5 }} />

      <Package title={"Products"}>
        <Product.Product />
      </Package>
      <Divider sx={{ my: 5 }} />

      <Package title={"Images"}>
        <Image.Image name="image-1" image="/assets/anatomia.png" />
      </Package>
      <Divider sx={{ my: 5 }} />

      <Package title={"Artists"}>
        <Artist.Artist />
      </Package>
      <Divider sx={{ my: 5 }} />

      <Package title={"Contactos"}>
        <Contact.Contact />
      </Package>
      <Divider sx={{ my: 5 }} />

      <Package title={"Subir Imagen"}>
        <ImageContainer></ImageContainer>
      </Package>
      <Divider sx={{ my: 5 }} />

      <Package title={"Button Menu"}>
        <ButtonMenu icon={<MoreVertIcon />} />
      </Package>
      <Divider sx={{ my: 5 }} />

      <Package title={"Button Menu"}>
        <ButtonSidebar icon={<Dehaze />} />
      </Package>
      <Divider sx={{ my: 5 }} />

      <Form.ReactForm>
        <Form.FormSection title="Tipos de input">
          <Form.ReactInput
            name="nombre"
            label="Input String"
            helperText="Helper Text"
            startAdornment={<TextDecrease />}
          />
          <Form.ReactInput
            name="largo"
            label="Input Number"
            helperText="Helper Text"
            type="number"
            startAdornment={<Numbers />}
            width={5}
          />
          <Form.ReactInput
            name="ancho"
            label="Input Number"
            helperText="Helper Text"
            type="number"
            startAdornment={<Numbers />}
            width={5}
          />
          <Form.ReactInput
            name="productImgs"
            label="Input File"
            helperText="Helper Text"
            type="file"
            startAdornment={<FileUpload />}
            width={10}
          />
          <Form.ReactInput
            name="productType"
            label="Select"
            helperText="Helper Text"
            variant="select"
            startAdornment={<FileUpload />}
            width={8}
            options={[
              {
                label: "Option 1",
                value: "option-1",
              },
            ]}
          />
        </Form.FormSection>
        <Form.FormSection title="Multi Input">
          <Form.MultiInput
            model={
              <>
                <Form.ReactInput
                  name="phoneType"
                  label="Phone Type"
                  helperText="Helper Text"
                  variant="select"
                  width={3}
                  options={phoneTypes}
                />
                <Form.ReactInput
                  name="phoneType"
                  label="Phone Number"
                  helperText="Helper Text"
                  type="number"
                  startAdornment={<Phone />}
                  width={9}
                />
              </>
            }
          >
            <>
              <Form.ReactInput
                name="phoneType"
                label="Phone Type"
                helperText="Helper Text"
                variant="select"
                width={3}
                options={phoneTypes}
                value={"home"}
              />
              <Form.ReactInput
                name="phoneType"
                label="Phone Number"
                helperText="Helper Text"
                type="number"
                startAdornment={<Phone />}
                width={9}
                value={36010203}
              />
            </>
          </Form.MultiInput>
        </Form.FormSection>

        <Form.FormSection title="Seleccionar imagenes">
          <Form.SelectUploadImage limit={1} />
        </Form.FormSection>
      </Form.ReactForm>
      <Divider sx={{ my: 5 }} />

      <SelectImage uploadMethod="fromDesktop" />
      <Divider sx={{ my: 5 }} />

      <LoginForm />
      <Divider sx={{ my: 5 }} />

      <SignupForm />
      <Divider sx={{ my: 5 }} />

      <Footer />
      <Divider sx={{ my: 5 }} />
    </>
  );
}
