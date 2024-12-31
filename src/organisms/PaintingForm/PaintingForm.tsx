"use client";

import { Typography } from "@mui/material";
import FormClass from "../FormV2/Form";
import { Image } from "@/typeDef/typeDef";

const Form = new FormClass();

export function PaintingForm() {
  const formChange: (e: any, imgs?: any) => void = (e: any, imgs: any) => {
    console.log(e.target.value);
    console.log(imgs);
  };
  return (
    <>
      <Form.ReactForm sx={{ width: "100%" }}>
        <Form.FormSection title="Ficha técnica">
          <Form.SelectUploadImage onChange={formChange} />

          <Form.ReactInput
            id="autor"
            label="Autor"
            width={12}
            onChange={formChange}
          />
          <Form.ReactInput
            id="title"
            label="Título"
            width={12}
            onChange={formChange}
          />

          <Form.ReactInput
            id="width"
            label="Ancho"
            type="number"
            width={4}
            shrink={true}
            onChange={formChange}
          />
          <Form.ReactInput
            id="height"
            label="Ancho"
            type="number"
            width={4}
            shrink={true}
            onChange={formChange}
          />
          <Form.ReactInput
            id="large"
            label="Ancho"
            type="number"
            width={4}
            shrink={true}
            onChange={formChange}
          />

          <Form.ReactInput
            id="medium"
            label="Técnica"
            variant="select"
            options={[]}
            width={12}
            onChange={formChange}
          />
          <Form.ReactInput
            id="price"
            label="Precio"
            type="number"
            width={12}
            shrink={true}
            onChange={formChange}
          />
          <Form.ReactInput
            id="date"
            label="Fecha de finalizaciíon"
            type="date"
            width={12}
            onChange={formChange}
            shrink={true}
          />

          <Form.ReactInput
            id="quantity"
            label="Cantidad producida"
            type="number"
            width={6}
            shrink={true}
            onChange={formChange}
          />
          <Form.ReactInput
            id="stock"
            label="Cantidad disponible"
            type="number"
            width={6}
            shrink={true}
            onChange={formChange}
          />

          <Form.ReactInput
            id="description"
            label="Descripcion"
            variant="textarea"
            onChange={formChange}
          />

          <Form.Switch
            id="capart"
            name="capart"
            label={
              <Typography>
                ¿Quieres publicar esta obra en{" "}
                <a href="https://instagram.com/" target="_blank">
                  Tienda A?
                </a>
              </Typography>
            }
            width={12}
            value={true}
            onChange={formChange}
          />
          <Form.Switch
            id="capart"
            name="capart"
            label={
              <Typography>
                ¿Quieres publicar esta obra en{" "}
                <a href="https://facebook.com/" target="_blank">
                  Tienda B
                </a>{" "}
                ?
              </Typography>
            }
            width={12}
            value={true}
            onChange={formChange}
          />
        </Form.FormSection>
      </Form.ReactForm>
    </>
  );
}
