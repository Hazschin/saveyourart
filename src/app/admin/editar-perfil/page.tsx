"use client";

import { useThemeCapart } from "@/contexts/themeContext";
import { useUser } from "@/contexts/userContext";
import FormClass from "@/organisms/FormV2/Form";
import Package from "@/organisms/Package/Package";
import { ReactInputs } from "@/typeDef/typeDef";
import { Delete, Email, Upload } from "@mui/icons-material";
import { useState } from "react";

const Form = new FormClass();

export default function EditarPerfilPage() {
  const { name, lastname, stagename } = useUser();
  const { phoneTypes, socialNetworksSelect } = useThemeCapart();
  const [formTitle, setFormTitle] = useState("Aquí estoy");
  const inputs: ReactInputs = [
    {
      title: "",
      inputSizingMobile: [6, 6, 12, 12, 12, 12],
      childrens: [
        {
          title: "Nombre(s)",
          id: "name",
          type: "string",
          variant: "input",
          defaultValue: name,
        },
        {
          title: "Apellido(s)",
          id: "lastname",
          type: "string",
          variant: "input",
          defaultValue: lastname,
        },
        {
          title: "Nombre artístico",
          id: "stagename",
          label: "Esta información es pública",
          type: "string",
          variant: "input",
          defaultValue: stagename,
          isPlural: true,
        },
        {
          title: "Foto de perfil",
          id: "artistImg",
          type: "file",
          variant: "input",
          startAdornment: <Upload />,
        },
        {
          title: "email",
          id: "email",
          type: "string",
          variant: "input",
          startAdornment: <Email />,
        },
        {
          id: "phoneNumber",
          type: "number",
          variant: "phoneNumber",
          isPlural: true,
        },
      ],
    },
  ];
  const formChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFormTitle(e.target.value);
  };

  return (
    <Package title={"Editar Perfil"}>
      {formTitle}
      <Form.ReactForm sx={{ width: "100%" }}>
        <Form.FormSection title="">
          <Form.ReactInput
            id="name"
            label="Nombre(s)"
            width={6}
            onChange={formChange}
          />
          <Form.ReactInput
            id="lastname"
            label="Apellido(s)"
            width={6}
            onChange={formChange}
          />
          <Form.ReactInput
            id="stagename"
            label="Nombre artístico"
            helperText="Este dato es público"
            width={12}
            onChange={formChange}
          />
          <Form.ReactInput
            id="email"
            label="Correo electrónico"
            width={12}
            onChange={formChange}
          />
          <Form.MultiInput
            names={["phoneType", "phoneNumber"]}
            id="phone"
            model={
              <Form.FormSection>
                <Form.ReactInput
                  name="phoneType"
                  label="phoneType"
                  variant="select"
                  width={3}
                  options={phoneTypes}
                  value={phoneTypes[1].value}
                  onChange={formChange}
                />
                <Form.ReactInput
                  name="phoneNumber"
                  label="phoneNumber"
                  type="string"
                  width={9}
                  onChange={formChange}
                />
              </Form.FormSection>
            }
          />
        </Form.FormSection>

        <Form.FormSection title="Redes Sociales">
          <Form.FormSection>
            <Form.MultiInput
              id="social"
              model={
                <Form.SocialNetwork
                  network={{
                    options: socialNetworksSelect,
                    onChange: formChange,
                    value: "x",
                  }}
                  username={{ onChange: formChange }}
                  link={{ onChange: formChange }}
                />
              }
            />
          </Form.FormSection>
        </Form.FormSection>

        <Form.FormSection title="Foto de perfil">
          <Form.SelectUploadImage />
        </Form.FormSection>

        <Form.FormSection title="Dirección de envío y recolección (Opcional)">
          <Form.ReactInput
            id="calle"
            label="Calle"
            width={6}
            onChange={formChange}
          />
          <Form.ReactInput
            id="numero"
            label="Número"
            type="number"
            width={3}
            onChange={formChange}
          />
          <Form.ReactInput
            id="extension"
            label="Extension"
            width={3}
            onChange={formChange}
          />

          <Form.ReactInput
            id="cp"
            label="Código Postal"
            type="number"
            width={6}
            onChange={formChange}
          />
          <Form.ReactInput
            id="colonia"
            label="Colonia"
            width={6}
            onChange={formChange}
          />

          <Form.ReactInput
            id="municipio"
            label="Municipio"
            width={6}
            onChange={formChange}
          />
          <Form.ReactInput
            id="estado"
            label="Estado"
            width={6}
            onChange={formChange}
          />

          <Form.ReactInput
            id="pais"
            label="País"
            width={12}
            onChange={formChange}
            value={"México"}
          />
        </Form.FormSection>

        <Form.FormSection title="Descripción">
          <Form.ReactInput
            id="description"
            label="¿Quién eres?"
            variant="textarea"
          />
        </Form.FormSection>
      </Form.ReactForm>
    </Package>
  );
}
