import { Image } from "@/typeDef/typeDef";
import { Close, ExpandMore, Upload } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import ImageContainer from "../ImageContainer/ImageContainer";
import ImageClass from "../ImageData/ImageData";
import { UploadImage } from "../UploadImage/UploadImage";

type UploadMethod = "fromDesktop" | "fromURL" | "none";

export function SelectImage({
  uploadMethod = "none",
  height = "auto",
  limit = 1,
  imgs = [],
  defaultSelected = [],
  onSelect = (selectedImages = []) => false,
}: {
  uploadMethod?: UploadMethod;
  height?: string;
  limit?: number;
  imgs?: Image[];
  defaultSelected?: Image[];
  onSelect?: (selectedImages: Image[]) => void;
}) {
  for (let img of defaultSelected) {
    let index = imgs.findIndex((image) => image.image === img.image);
    index > -1 ? (imgs[index].checked = true) : imgs.push(img);
  }

  const Image = new ImageClass("superadmin", true);
  const [areSelectables, setAreSelectables] = useState(true);
  let [selectedImages, setSelectedImages] = useState<Image[]>([
    ...defaultSelected,
  ]);
  let [images, setImages] = useState(imgs);

  const SelectedImage = (
    imgData: Image | undefined,
    checked: boolean | undefined
  ) => {
    if (checked) {
      imgData ? selectedImages.push(imgData) : false;
      images = images.map((img) =>
        img.image === imgData?.image ? { ...img, checked: true } : img
      );
    } else {
      selectedImages = selectedImages.filter(
        (img) => img.image !== imgData?.image
      );
      images = images.map((img) =>
        img.image === imgData?.image ? { ...img, checked: false } : img
      );
    }
    setSelectedImages(selectedImages);
    setImages(images);

    selectedImages.length >= limit && limit > -1
      ? setAreSelectables(false)
      : setAreSelectables(true);
  };

  const SelectImages = () => {
    console.log(selectedImages);
    onSelect ? onSelect(selectedImages) : false;
    return selectedImages;
  };

  return (
    <Box
      height={height}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      rowGap={3}
    >
      <UploadImage uploadMethod={uploadMethod} />

      <Box
        display={"flex"}
        flexWrap={"wrap"}
        rowGap={1}
        columnGap={1}
        justifyContent={"space-evenly"}
        px={1}
        py={3}
        my={3}
        sx={{ overflowY: "scroll" }}
      >
        {images.map((image, i) => {
          return (
            <Image.Image
              name={image.name}
              image={image.image}
              isChecked={image.checked ? image.checked : false}
              isSelectable={areSelectables}
              onClick={SelectedImage}
              key={`image-${i}`}
            />
          );
        })}
      </Box>
      <Box>
        <Typography display={"inline"} variant="subtitle2" color={"black"}>
          Imágenes seleccionadas:
        </Typography>{" "}
        <Typography
          variant="subtitle2"
          display={"inline"}
          color={areSelectables ? "black" : "red"}
        >
          {selectedImages.length}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ my: 1.5 }}
          onClick={SelectImages}
        >
          Seleccionar Imagen{`${limit === 1 ? "" : "(es)"}`}
        </Button>
      </Box>
    </Box>
  );
}
