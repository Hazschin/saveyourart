"use client";

import {
  Accordion,
  AccordionSummary,
  Backdrop,
  Box,
  Button,
  Divider,
  FormControlLabel,
  IconButton,
  InputAdornment,
  MenuItem,
  Switch,
  SxProps,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import Package from "../Package/Package";
import React, { useEffect, useState } from "react";
import { Delete, Add, Close, Upload, ExpandMore } from "@mui/icons-material";
import { Image, SelectOption } from "@/typeDef/typeDef";
import ImageClass from "../ImageData/ImageData";
import { SelectImage } from "../SelectImage/SelectImage";
import ImageContainer from "../ImageContainer/ImageContainer";
import { UploadMethod } from "@/typeDef/typeDef";

export default class FormClass {
  public title?: string;

  private inputSizingMobile: { [key: number]: number[] } = [
    [],
    [12],
    [6, 6],
    [12, 6, 6],
    [12, 6, 6, 12],
    [12, 4, 4, 4, 12],
    [4, 4, 4, 6, 6, 12],
  ];

  constructor(title: string = "") {
    this.title = title;
  }

  ReactForm = ({
    children,
    sx = {},
  }: {
    children: React.ReactNode;
    sx?: SxProps;
  }): React.ReactNode => {
    return (
      <Package
        title={this.title}
        sx={{ ...sx, justifyContent: "space-around" }}
      >
        {children}
      </Package>
    );
  };

  FormSection = ({
    title = "",
    inputSizingMobile = [],
    inputSizingDesktop = [],
    children,
  }: {
    title?: string;
    inputSizingMobile?: number[];
    inputSizingDesktop?: number[];
    children?: React.ReactNode;
  }) => {
    return (
      <>
        <Typography width={"100%"} textAlign={"center"} variant="h6">
          {title}
        </Typography>
        {children}
      </>
    );
  };

  MultiInput = ({
    id = "",
    names = [],
    model = <></>,
    children,
  }: {
    id?: string;
    names?: string[];
    model?: React.ReactNode;
    children?: React.ReactNode;
  }) => {
    const [modelsCount, setModelsCount] = useState(
      React.Children.count(children) > 2 ? [] : [1]
    );
    useEffect(() => {
      if (names) {
        for (let name of names) {
          let elementsByName = document.getElementsByName(name);
          for (let i = 0; i < elementsByName.length; i++) {
            document.getElementsByName(name)[i].id = `${name}-${i}`;
          }
        }
      }
    }, [modelsCount, names]);

    function addInput() {
      setModelsCount([...modelsCount, 1]);
    }

    const removeInput = (e: any) => {
      console.log(e.target);
      const index = parseInt(e.target.id.replace(`iconButton-${id}-`, ""));
      console.log(index);
      document.querySelector(`#pluralInput-${id}-${index}`)?.remove();
    };

    return (
      <Box
        width={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"right"}
        rowGap={2}
      >
        {React.Children.map(children, (child, i) => {
          return (
            <Box
              id={`pluralInput-${id}-${i}`}
              key={i}
              width={"100%"}
              display={"flex"}
              flexWrap={"wrap"}
              rowGap={2}
            >
              {child}
              <IconButton id={`iconButton-${id}-${i}`} onClick={removeInput}>
                <Delete sx={{ pointerEvents: "none" }} />
              </IconButton>
            </Box>
          );
        })}
        {modelsCount.map((modelIndex, i) => {
          return (
            <Box
              id={`pluralInput-${id}-${i + React.Children.count(children)}`}
              key={i}
              width={"100%"}
              display={"flex"}
              flexWrap={"wrap"}
              rowGap={2}
            >
              {model}
              <IconButton
                id={`iconButton-${id}-${i + React.Children.count(children)}`}
                onClick={removeInput}
              >
                <Delete sx={{ pointerEvents: "none" }} />
              </IconButton>
            </Box>
          );
        })}

        <IconButton onClick={addInput}>
          <Add />
        </IconButton>
      </Box>
    );
  };

  ReactInput = ({
    id = "",
    name = "id",
    label = "",
    helperText = "",
    error = false,
    type = "string",
    variant = "input",
    startAdornment,
    width = 12,
    sx = {},
    value = "",
    options = [],
    shrink,
    onChange,
  }: {
    id?: string;
    name?: string;
    label?: string;
    helperText?: string;
    error?: boolean;
    type?: string;
    variant?: string;
    startAdornment?: React.ReactNode;
    width?: number;
    sx?: SxProps;
    value?: string | number;
    options?: SelectOption[];
    shrink?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => {
    const [thisValue, setThisValue] = useState(
      value ? value : options && options.length > 0 ? options[0].value : ""
    );

    const [inputProps, setInputProps] = useState({
      id,
      name: name ? name : id,
      label,
      helperText,
      error,
      type,
      select: variant === "select" ? true : false,
      multiline: variant === "textarea" ? true : false,
      InputProps: startAdornment
        ? {
            startAdornment: (
              <InputAdornment position="start">{startAdornment}</InputAdornment>
            ),
          }
        : {},
      sx: { width: `${(100 / 12) * width}%`, ...sx },
      value: thisValue,
    });

    return (
      <TextField
        id={inputProps.id}
        name={inputProps.name}
        label={inputProps.label}
        helperText={inputProps.helperText}
        error={inputProps.error}
        type={inputProps.type}
        select={inputProps.select}
        multiline={inputProps.multiline}
        InputProps={inputProps.InputProps}
        InputLabelProps={{ shrink }}
        sx={inputProps.sx}
        value={thisValue}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          console.log(e.target.value);
          setThisValue(e.target.value);
          onChange ? onChange(e) : false;
        }}
      >
        {!!variant && variant === "select"
          ? options?.map((option, i) => {
              return (
                <MenuItem key={i} value={option.value}>
                  {option.icon}
                  {option.label}
                </MenuItem>
              );
            })
          : ""}
      </TextField>
    );
  };

  SelectUploadImage = ({
    onChange,
    limit = 1,
    images = [
      {
        name: "Anatomía",
        image: "/assets/anatomia.png",
      },
      {
        name: "Conquista",
        image: "/assets/conquista.png",
      },
      {
        name: "La tempestad",
        image: "/assets/latempestad.png",
      },
      {
        name: "Retrato",
        image: "/assets/retrato.png",
      },
    ],
    defaultSelected = [
      {
        name: "Retrato",
        image: "/assets/retrato.png",
      },
    ],
  }: {
    onChange?: (e: any, imgs: any) => void;
    limit?: number;
    images?: Image[];
    defaultSelected?: Image[];
  }) => {
    const Img = new ImageClass("superadmin", false);
    const [openBackdrop, setOpenBackdrop] = useState(false);
    const [view, setView] = useState(0);
    const [imagesSelected, setImagesSelected] = useState<Image[]>([
      ...defaultSelected,
    ]);

    const [uploadMethod, setUploadMethod] =
      useState<UploadMethod>("fromDesktop");

    const handleOpen = () => {
      setOpenBackdrop(true);
    };
    const handleClose = () => {
      setOpenBackdrop(false);
    };
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setView(newValue);
    };
    const onSelect = (selectedImages: Image[]) => {
      setImagesSelected(selectedImages);
      handleClose();
    };

    return (
      <Accordion defaultExpanded sx={{ width: "100%", borderRadius: 2 }}>
        <AccordionSummary expandIcon={<ExpandMore />}>
          {limit == 1 ? "Imagen seleccionada" : "Imágenes seleccionadas"}
        </AccordionSummary>
        <Box
          width={`${(100 / 12) * 11}%`}
          display={"flex"}
          flexWrap={"wrap"}
          justifyContent={"space-around"}
          rowGap={2}
          sx={{
            px: 3,
            paddingBottom: 3,
          }}
        >
          <Box width={"100%"}>
            <IconButton onClick={handleOpen}>
              <Add />
            </IconButton>
          </Box>
          {imagesSelected.map((image, i) => {
            return (
              <Img.Image
                name={image.name}
                image={image.image}
                key={`image-${i}`}
              />
            );
          })}
        </Box>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={openBackdrop}
        >
          <Box
            width={`${(100 / 12) * 10}%`}
            bgcolor={"rgba(255,255,255,1)"}
            py={1}
            px={3}
            borderRadius={2}
          >
            <Box
              width={"100%"}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography color={"rgba(0,0,0,0.5)"}></Typography>
              <IconButton onClick={handleClose}>
                <Close />
              </IconButton>
            </Box>

            <Box>
              <Tabs
                value={view}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label="Subir"
                  onClick={() => setUploadMethod("fromDesktop")}
                />
                <Tab
                  label="Enlace"
                  onClick={() => setUploadMethod("fromURL")}
                />
                <Tab
                  label="Mis imágenes"
                  onClick={() => setUploadMethod("none")}
                />
              </Tabs>
              <Divider sx={{ width: "100%", marginBottom: 3 }} />

              <SelectImage
                imgs={images}
                defaultSelected={defaultSelected}
                height={`${(100 / 12) * 9}vh`}
                uploadMethod={uploadMethod}
                limit={-1}
                onSelect={onSelect}
              />
            </Box>
          </Box>
        </Backdrop>
      </Accordion>
    );
  };

  SocialNetwork = ({
    network,
    username,
    link,
  }: {
    network: {
      helperText?: string;
      error?: boolean;
      value?: string | number;
      options?: SelectOption[];
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    username: {
      helperText?: string;
      error?: boolean;
      value?: string | number;
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
    link: {
      helperText?: string;
      error?: boolean;
      value?: string | number;
      onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    };
  }) => {
    const [isNewNetwork, setIsNewNetwork] = useState(
      network.value
        ? network.options?.find(
            (option: any) => option.value === network.value
          ) && network.value !== "other"
          ? false
          : true
        : false
    );
    const networkSelectValue = isNewNetwork ? "other" : network.value;

    return (
      <>
        <this.ReactInput
          id="network"
          name="network"
          label="Red social"
          variant="select"
          width={3}
          helperText={network.helperText}
          value={isNewNetwork ? "other" : network.value}
          options={network.options}
          error={network.error}
          onChange={(e) => {
            setIsNewNetwork(
              network.options?.find(
                (option: any) => option.value === e.target.value
              ) && e.target.value !== "other"
                ? false
                : true
            );
            network?.onChange ? network?.onChange(e) : false;
          }}
        />
        <this.ReactInput
          id="username"
          name="username"
          label="Nombre de usuario"
          helperText={username.helperText}
          value={username.value}
          error={username.error}
          width={9}
          onChange={(e) => {
            username?.onChange ? username?.onChange(e) : false;
          }}
        />
        <this.ReactInput
          id="link"
          name="link"
          label="URL"
          width={12}
          helperText={link.helperText}
          value={link.value}
          error={link.error}
          onChange={(e) => {
            link?.onChange ? link?.onChange(e) : false;
          }}
        />
        <TextField
          id="isNewNetwork"
          name="isNewNetwork"
          label="Nombre de la red social"
          value={
            network.options?.find(
              (option: any) => option.value === network.value
            ) && network.value !== "other"
              ? ""
              : network.value
          }
          sx={{ display: isNewNetwork ? "" : "none" }}
          fullWidth
        />
      </>
    );
  };

  Switch = ({
    id = "",
    name = "id",
    label = "",
    width = 12,
    value,
    onChange,
  }: {
    id?: string;
    name?: string;
    label?: React.ReactNode;
    width?: number;
    value?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  }) => {
    const [thisValue, setThisValue] = useState(value);
    return (
      <FormControlLabel
        sx={{ width: `${(100 / 12) * width}%`, margin: 0, padding: 0 }}
        control={
          <Switch
            id={id}
            name={name}
            color="primary"
            checked={thisValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              onChange ? onChange(e) : false;
              setThisValue(e.target.checked);
            }}
          />
        }
        label={label}
        labelPlacement="end"
      />
    );
  };
}
