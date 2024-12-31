import { UploadMethod } from "@/typeDef/typeDef";
import { Upload } from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import { useState } from "react";

export function UploadImage({
  uploadMethod,
  onUpload = () => {},
}: {
  uploadMethod: UploadMethod;
  onUpload?: () => void;
}) {
  const [value, setValue] = useState("");
  const type = uploadMethod === "fromDesktop" ? "file" : "text";
  const UploadImg = () => {
    alert("Subiendo Imagen");
    onUpload ? onUpload() : false;
  };
  return (
    <TextField
      id="uploadImage"
      label="Subir Imagen"
      type={type}
      InputLabelProps={{ shrink: type === "file" || value ? true : false }}
      value={value}
      fullWidth
      sx={{ display: uploadMethod === "none" ? "none" : "inherit" }}
      InputProps={{
        endAdornment: (
          <Button
            color="primary"
            fullWidth
            sx={{
              width: `${(100 / 12) * 2}%`,
              py: 2,
              boxShadow: "none",
            }}
            onClick={UploadImg}
          >
            <Upload />
          </Button>
        ),
      }}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}
