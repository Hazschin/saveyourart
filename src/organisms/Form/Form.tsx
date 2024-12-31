"use client";

import {
  Box,
  ButtonGroup,
  Divider,
  IconButton,
  InputAdornment,
  MenuItem,
  SxProps,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import Package from "../Package/Package";
import React, { ChangeEvent, useState } from "react";
import { Delete, Link, Add, Email, Numbers } from "@mui/icons-material";
import { useThemeCapart } from "@/contexts/themeContext";
import {
  PhoneNumberGroup,
  ReactInput,
  ReactInputs,
  SocialNetworkGroup,
} from "@/typeDef/typeDef";
import { useDevice } from "@/contexts/deviceContext";

export default class FormClass {
  public title?: string;
  public columnGap: number = 5;

  private inputs?: ReactInputs;
  private output?: { [key: string]: Object };

  private inputSizingMobile: { [key: number]: number[] } = [
    [],
    [12],
    [6, 6],
    [12, 6, 6],
    [12, 6, 6, 12],
    [12, 4, 4, 4, 12],
    [4, 4, 4, 6, 6, 12],
  ];

  private changeEvents: Array<
    (e: React.ChangeEvent<HTMLInputElement>) => void
  > = [];

  constructor(
    title: string = "",
    inputs: ReactInputs = [
      {
        title: "Datos de la obra",
        inputSizingMobile: [1, 2, 2, 1, 1],
        childrens: [
          {
            title: "Autor",
            id: "autor",
            label: "Esta información es pública",
            type: "string",
            variant: "input",
            value: "John Doe",
          },
          {
            title: "Nombre artístico",
            id: "stagename",
            label: "Esta información es pública",
            type: "string",
            variant: "input",
          },
          {
            title: "Nombre de la obra",
            id: "title",
            label: "Esta información es pública",
            type: "string",
            variant: "input",
          },
          {
            title: "Técnica",
            id: "medium",
            type: "number",
            variant: "select",
            options: [
              {
                value: "oleo sobre tela",
                label: "Óleo sobre tela",
              },
              {
                value: "bronce y granito",
                label: "Bronce y granito",
              },
            ],
          },
          {
            title: "Imagen de la obra",
            id: "image",
            type: "file",
            variant: "input",
          },
        ],
      },
      {
        title: "Medidas",
        childrens: [
          {
            title: "Ancho de la obra",
            id: "width",
            label: "Esta información es pública",
            type: "number",
            variant: "input",
          },
          {
            title: "Alto de la obra",
            id: "height",
            label: "Esta información es pública",
            type: "number",
            variant: "input",
          },
          {
            title: "Largo de la obra",
            id: "large",
            label: "Esta información es pública",
            type: "number",
            variant: "input",
          },
        ],
        inputSizingMobile: [3, 3, 3],
      },
      {
        title: "Dirección de envío",
        childrens: [
          {
            title: "Calle",
            id: "calle",
            label: "",
            type: "string",
            variant: "input",
          },
          {
            title: "Número",
            id: "numero",
            label: "",
            type: "number",
            variant: "input",
          },
          {
            title: "Código postal",
            id: "codigoPostal",
            label: "",
            type: "number",
            variant: "input",
          },
          {
            title: "Ciudad",
            id: "ciudad",
            label: "",
            type: "string",
            variant: "input",
          },
          {
            title: "Estado",
            id: "estado",
            label: "",
            type: "string",
            variant: "input",
          },
          {
            title: "País",
            id: "pais",
            label: "",
            type: "string",
            variant: "input",
          },
        ],
      },
      {
        title: "Redes sociales",
        childrens: [
          {
            title: "Username o link",
            id: "username",
            label: "",
            type: "string",
            variant: "socialNetwork",
            value: [
              {
                network: "facebook",
                username: "a",
                link: "https://localhost:8000/",
              },
              {
                network: "linkedinn",
                username: "e",
                link: "https://localhost:8000/",
              },
            ],
          },
        ],
      },
      {
        title: "Inputs Multiples",
        inputSizingMobile: [1, 1],
        childrens: [
          {
            title: "Input Multiple",
            id: "multiInput",
            label:
              "Esta información es pública, ajena a cualquier partido político",
            type: "string",
            variant: "input",
            isPlural: true,
            value: [""],
            startAdornment: <Email />,
          },
          {
            title: "Input Multiple",
            id: "multiInputNumber",
            label: "",
            type: "number",
            variant: "input",
            isPlural: true,
            value: [0, 1],
            startAdornment: <Numbers />,
          },
          {
            title: "Phone Number",
            id: "phoneNumber",
            label: "",
            type: "number",
            variant: "phoneNumber",
          },
        ],
      },
    ],
    ...onChange: Array<(elementName: string) => void>
  ) {
    this.title = title;
  }

  onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Ejecutando evento onChange del Form");

    for (let ev of this.changeEvents) {
      ev(e);
    }
  };

  ReactForm = ({
    sx,
    onChange = [],
    inputs = [],
  }: {
    sx?: SxProps;
    onChange?: Array<
      (elementName: React.ChangeEvent<HTMLInputElement>) => void
    >;
    inputs?: ReactInputs;
  }): React.ReactNode => {
    this.changeEvents = [...this.changeEvents, ...onChange];
    this.inputs = [...inputs];
    const Nodes: React.ReactNode[] = [];
    const { device } = useDevice();
    var keyBox = 0;

    if (this.inputs) {
      let inputsCount: number = 0;
      for (const box of this.inputs) {
        if (!box.childrens) box.childrens = [];
        var sizing: number[] = this.inputSizingMobile[box.childrens.length];

        (device === "mobile" && box.inputSizingMobile) ||
        (device === "desktop" &&
          !box.inputSizingDesktop &&
          box.inputSizingMobile)
          ? (sizing = box.inputSizingMobile)
          : [];

        (device === "mobile" &&
          !box.inputSizingMobile &&
          box.inputSizingDesktop) ||
        (device === "desktop" && box.inputSizingDesktop)
          ? (sizing = box.inputSizingDesktop)
          : [];

        Nodes.push(
          <>
            <Typography width={"100%"} textAlign={"center"} variant="h6">
              {box.title}
            </Typography>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                rowGap: 2,
                flexWrap: "wrap",
              }}
            >
              {box.childrens?.map((child, i) => {
                let fieldSize: number =
                  sizing && sizing[i]
                    ? sizing[i] > 12
                      ? 100
                      : (100 / 12) * sizing[i]
                    : 12;

                child.id = child.id ? child.id : `input-${inputsCount}`;
                inputsCount++;

                if (child.isPlural) {
                  return (
                    <this.MultiInput
                      id={child.id}
                      model={
                        <this.ReactInputData
                          data={child}
                          width={`${fieldSize}%`}
                        />
                      }
                      key={`multiinput-${i}`}
                    />
                  );
                }
                return (
                  <this.ReactInputData
                    data={child}
                    width={`${fieldSize}%`}
                    key={`input-${i}`}
                  />
                );
              })}
            </Box>
          </>
        );

        keyBox++;
      }
    }

    return (
      <Package title={this.title} sx={{ ...sx }}>
        {Nodes.map((Node, i) => {
          return (
            <Box width="100%" key={`box-${i}`}>
              {Node}
            </Box>
          );
        })}
      </Package>
    );
  };

  MultiInputsss = ({
    data,
    width,
    sx,
  }: {
    data?: ReactInput;
    width?: string;
    sx?: SxProps;
  }) => {
    const [value, setValue] = useState(
      Array.isArray(data?.value)
        ? [...data?.value]
        : [data?.variant === "socialNetwork" ? {} : ""]
    );
    const addInput = () => {
      setValue([...value, data?.variant === "socialNetwork" ? {} : ""]);
    };

    const removeInput = (e: any) => {
      console.log(e.target);
      const index = parseInt(
        e.target.id.replace(`iconButton-${data?.id}-`, "")
      );
      console.log(index);
      console.log(value.filter((x, i) => i !== index));
      document.querySelector(`#pluralInput-${data?.id}-${index}`)?.remove();
    };

    return (
      <Box
        width={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"right"}
      >
        {value.map((value: any, i: number) => {
          let inputData = { ...data, value: value };
          return (
            <Box
              key={i}
              width={"100%"}
              display={"flex"}
              flexWrap={"wrap"}
              rowGap={2}
              id={`pluralInput-${data?.id}-${i}`}
            >
              <Divider
                sx={{
                  width: "100%",
                  height: "10px",
                  mb: 3,
                  display: i < 1 ? "none" : "",
                }}
              />
              <this.ReactInputData
                data={inputData}
                width={width}
                sx={sx}
                i={i}
              />
              <IconButton
                id={`iconButton-${data?.id}-${i}`}
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

  MultiInput = ({
    id = "",
    model = <></>,
    children = <></>,
  }: {
    id?: string;
    model?: React.ReactNode;
    children?: React.ReactNode;
  }) => {
    console.log(React.Children.count(children));
    const [modelsCount, setModelsCount] = useState(
      React.Children.count(children) > 2 ? [] : [1]
    );

    function addInput() {
      setModelsCount([...modelsCount, 1]);
    }

    return (
      <Box
        width={"100%"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"right"}
      >
        {children}
        {modelsCount.map((modelIndex, i) => {
          return (
            <Box
              id={`pluralInput-${id}-${i}`}
              key={i}
              width={"100%"}
              display={"flex"}
              flexWrap={"wrap"}
              rowGap={2}
            >
              {model}
            </Box>
          );
        })}
        <IconButton onClick={addInput}>
          <Add />
        </IconButton>
      </Box>
    );
  };

  ReactInputData = ({
    data,
    width,
    sx,
    i,
  }: {
    data?: ReactInput;
    width?: string;
    sx?: SxProps;
    i?: number;
  }): React.ReactNode => {
    const [inputProps, setInputProps] = useState({
      id: i || i === 0 ? `${data?.id}-${i}` : data?.id,
      name: i || i === 0 ? `${data?.id}-${i}` : data?.id,
      label: data?.title,
      helperText: data?.label,
      error: data?.error,
      type: data?.type,
      select: data?.variant === "select" ? true : false,
      multiline: data?.variant === "textarea" ? true : false,
      InputProps: data?.startAdornment
        ? {
            startAdornment: (
              <InputAdornment position="start">
                {data.startAdornment}
              </InputAdornment>
            ),
          }
        : {},
      sx: { width, ...sx },
      value: data?.value,
    });

    var Input = <></>;

    if (
      data?.variant === "input" ||
      data?.variant === "select" ||
      data?.variant === "textarea"
    ) {
      Input = (
        <this.ReactInput
          id={inputProps.id}
          name={inputProps.name}
          label={inputProps.label}
          helperText={inputProps.helperText}
          error={inputProps.error}
          type={inputProps.type}
          select={inputProps.select}
          multiline={inputProps.multiline}
          InputProps={inputProps.InputProps}
          sx={inputProps.sx}
          value={inputProps.value}
        >
          {!!data && data.variant === "select"
            ? data.options?.map((option, i) => {
                return (
                  <MenuItem key={i} value={option.value}>
                    {option.label}
                  </MenuItem>
                );
              })
            : ""}
        </this.ReactInput>
      );
    } else if (data?.variant === "socialNetwork") {
      Input = (
        <this.SocialNetworkGroup
          id={data.id}
          i={i}
          network={data?.value ? data.value.network : ""}
          username={data?.value ? data.value.username : ""}
          link={data?.value ? data.value.link : ""}
        />
      );
    } else if (data?.variant === "phoneNumber") {
      Input = (
        <this.PhoneNumber
          id={data.id}
          phone={data?.value?.phone ? data.value.phone : ""}
          phoneType={data?.value?.phoneType ? data.value.phoneType : "whatsapp"}
          i={i}
        />
      );
    }

    return Input;
  };

  ReactInput = (args: TextFieldProps) => {
    const [value, setValue] = useState(args.value);
    const [shrink, setShrink] = useState(
      value ||
        value === 0 ||
        args.type === "file" ||
        args.InputProps?.startAdornment
        ? true
        : false
    );

    return (
      <TextField
        id={args.id}
        name={args.name}
        label={args.label}
        helperText={args.helperText}
        error={args.error}
        type={args.type}
        select={args.select}
        multiline={args.multiline}
        InputProps={args.InputProps}
        InputLabelProps={{ ...args.InputLabelProps, shrink: true }}
        sx={args.sx}
        value={args.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          args.onChange ? args.onChange(e) : true;

          setValue(e.target.value);
          setShrink(
            e.target.value ||
              e.target.value ||
              args.type === "file" ||
              args.InputProps?.startAdornment
              ? true
              : false
          );

          this.onChange(e);
        }}
      >
        {args.children}
      </TextField>
    );
  };

  SocialNetworkGroup = ({
    network = "",
    username = "",
    link = "",

    id = "",
    error = false,
  }: SocialNetworkGroup) => {
    const { socialNetworksSelect } = useThemeCapart();
    const [thisNetwork, setThisNetwork] = useState(
      network ? network : socialNetworksSelect[0].network
    );
    const [isNewNetwork, setIsNewNetwork] = useState(
      socialNetworksSelect.find((net: any) => net.network === thisNetwork)
        ? false
        : true
    );
    const [thisNewNetwork] = useState(isNewNetwork ? network : "");

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setThisNetwork(value);
      value === "other" ? setIsNewNetwork(true) : setIsNewNetwork(false);
    };

    return (
      <>
        <this.ReactInput
          id={`network-${id ? id : ""}`}
          name={`network-${id ? id : ""}`}
          value={
            socialNetworksSelect.find((net: any) => net.network === thisNetwork)
              ? thisNetwork
              : "other"
          }
          onChange={handleSelect}
          sx={{ width: `${(100 / 12) * 3}%` }}
          select
        >
          {socialNetworksSelect.map((option: any, i: number) => {
            return (
              <MenuItem key={i} value={option.network} sx={{ py: 1.5 }}>
                {option.icon}
                {option.label}
              </MenuItem>
            );
          })}
        </this.ReactInput>
        <this.ReactInput
          id={`username-${id ? id : ""}`}
          name={`username-${id ? id : ""}`}
          label={"Username"}
          error={error}
          value={username}
          sx={{ width: `${(100 / 12) * 9}%` }}
        />
        <this.ReactInput
          id={`link-${id ? id : ""}`}
          name={`link-${id ? id : ""}`}
          label={"Link (opcional)"}
          error={error}
          value={link}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Link />
              </InputAdornment>
            ),
          }}
          sx={{ width: `${(100 / 12) * 12}%` }}
        />
        <this.ReactInput
          id={`newNetwork-${id ? id : ""}`}
          name={`newNetwork-${id ? id : ""}`}
          label="Nombre de la red social (opcional)"
          fullWidth
          sx={{
            display: isNewNetwork ? "" : "none",
            width: `${(100 / 12) * 12}%`,
          }}
          value={thisNewNetwork}
        />
      </>
    );
  };

  PhoneNumber = ({
    phone,
    phoneType = "whatsapp",
    id = "",
    error = false,
  }: PhoneNumberGroup) => {
    const [thisPhoneType, setThisPhoneType] = useState(phoneType);
    const { phoneTypes } = useThemeCapart();

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e.target);
      setThisPhoneType(
        e.target.value === "whatsapp" ||
          e.target.value === "telegram" ||
          e.target.value === "home"
          ? e.target.value
          : thisPhoneType
      );
    };
    return (
      <>
        <this.ReactInput
          id={`phoneType-${id ? id : ""}`}
          name={`phoneType-${id ? id : ""}`}
          value={thisPhoneType}
          onChange={handleSelect}
          sx={{ width: `${(100 / 12) * 3}%` }}
          error={error}
          select
        >
          {phoneTypes.map((option: any, i: number) => {
            return (
              <MenuItem key={i} value={option.value} sx={{ py: 1.5 }}>
                {option.icon}
                {option.label}
              </MenuItem>
            );
          })}
        </this.ReactInput>
        <this.ReactInput
          id={`phone-${id ? id : ""}`}
          name={`phone-${id ? id : ""}`}
          label={"Número de teléfono (opcional)"}
          error={error}
          value={phone}
          type="number"
          sx={{ width: `${(100 / 12) * 9}%` }}
        />
      </>
    );
  };
}
