"use client";
import {
  Add,
  ContactEmergency,
  Edit,
  Facebook,
  Instagram,
  LinkedIn,
  Logout,
  Phone,
  Pinterest,
  Preview,
  RssFeed,
  Telegram,
  Twitter,
  Upload,
  WhatsApp,
} from "@mui/icons-material";
import React, { PropsWithChildren, createContext, useContext } from "react";
import { SxProps } from "@mui/material";
import { RowList, SelectOption } from "@/typeDef/typeDef";

export const ThemeCapartContext = createContext({});

export class ThemeCapartProvider extends React.Component<
  PropsWithChildren<{}>
> {
  state: {
    mode: string;
  } = {
    mode: "light",
  };
  iconSX: SxProps = { fontSize: 16, px: 1 };
  artistMenu: RowList[] = [
    {
      icon: <Add />,
      label: "Nueva obra",
      redirect: "/admin/crear-obra",
    },
    {
      icon: <Upload />,
      label: "Subir imagen",
      redirect: "/admin/subir-imagen",
    },
    {
      icon: <Preview />,
      label: "Obras",
      redirect: "/admin/obras",
    },
    {
      icon: <Edit />,
      label: "Editar Perfil",
      redirect: "/admin/editar-perfil",
    },
    {
      icon: <ContactEmergency />,
      label: "Contactos",
      redirect: "/admin/contactos",
    },
    {
      icon: <Logout />,
      label: "Cerrar Sesion",
      redirect: "/admin/logout",
      isNewSection: true,
    },
  ];
  adminMenu: RowList[] = [
    {
      icon: <Add />,
      label: "Nueva obra",
      redirect: "/admin/crear-obra",
    },
    {
      icon: <Upload />,
      label: "Subir imagen",
      redirect: "/admin/subir-imagen",
    },
    {
      icon: <Preview />,
      label: "Obras",
      redirect: "/admin/obras",
    },
    {
      icon: <Edit />,
      label: "Editar Perfil",
      redirect: "/admin/editar-perfil",
    },
    {
      icon: <Add />,
      label: "Crear Artista",
      redirect: "/admin/crear-artista",
    },
    {
      icon: <Preview />,
      label: "Artistas",
      redirect: "/admin/artistas",
    },
    {
      icon: <ContactEmergency />,
      label: "Contactos",
      redirect: "/admin/contactos",
    },
    {
      icon: <Logout />,
      label: "Cerrar Sesion",
      redirect: "/admin/logout",
      isNewSection: true,
    },
  ];
  socialNetworksSelect: SelectOption[] = [
    {
      value: "facebook",
      icon: <Facebook sx={this.iconSX} />,
    },
    {
      value: "instagram",
      icon: <Instagram sx={this.iconSX} />,
    },
    {
      value: "x",
      icon: <Twitter sx={this.iconSX} />,
    },
    {
      value: "pinterest",
      icon: <Pinterest sx={this.iconSX} />,
    },
    {
      value: "linkedin",
      icon: <LinkedIn sx={this.iconSX} />,
    },
    {
      value: "other",
      icon: <RssFeed sx={this.iconSX} />,
      label: "Otra",
    },
  ];
  phoneTypes: SelectOption[] = [
    {
      label: "",
      icon: <WhatsApp sx={this.iconSX} />,
      value: "whatsapp",
    },
    {
      label: "",
      icon: <Telegram sx={this.iconSX} />,
      value: "telegram",
    },
    {
      label: "",
      icon: <Phone sx={this.iconSX} />,
      value: "home",
    },
  ];

  render(): React.ReactNode {
    return (
      <ThemeCapartContext.Provider
        value={{
          ...this.state,
          artistMenu: this.artistMenu,
          adminMenu: this.adminMenu,
          socialNetworksSelect: this.socialNetworksSelect,
          phoneTypes: this.phoneTypes,
        }}
      >
        {this.props.children}
      </ThemeCapartContext.Provider>
    );
  }
}

export const useThemeCapart = (): any => {
  const context: any = useContext(ThemeCapartContext);
  return context;
};
