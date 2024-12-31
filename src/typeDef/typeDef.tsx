import { SxProps } from "@mui/material";

export type Anchor = "top" | "left" | "bottom" | "right";
export type ArtistFormats = "public" | "superadmin";
export type Currencies = "mxn" | "usd" | "cad";
export type DefaultValues = string | number;
export type Display = "none" | "default";
export type ImageFormats = "artist" | "superadmin";
export type InputType = "string" | "number" | "file";
export type InputVariant =
  | "input"
  | "select"
  | "socialNetwork"
  | "phoneNumber"
  | "textarea";
export type Networks =
  | "facebook"
  | "instagram"
  | "twitter"
  | "x"
  | "pinterest"
  | "linkedin"
  | "other";
export type PhoneTypes = "whatsapp" | "telegram" | "home";
export type ProductFormats = "public" | "artist" | "superadmin";
export type ReactInputs = BoxForm[];
export type UploadMethod = "fromDesktop" | "fromURL" | "none";
export type UserRol = "none" | "artist" | "admin" | "superadmin";

interface Address {
  calle?: string;
  numero?: number;
  extension?: string;
  cp?: number;
  colonia?: string;
  municipio?: string;
  estado?: string;
  pais?: string;
}

export interface AuthData {
  isAuth?: boolean;
  userRol?: UserRol;
}

export interface BoxForm {
  title?: string;
  childrens?: ReactInput[];
  inputSizingMobile?: number[];
  inputSizingDesktop?: number[];
}

export interface ButtonMenuProps {
  icon: React.ReactNode;
  list?: ButtonMenuRow[];
  closeMenu?: boolean;
  children?: React.ReactNode;
}

export interface ButtonMenuRow {
  icon: React.ReactNode;
  label: string;
  closeMenu?: boolean;
  redirect?: string;
}

export interface ButtonSidebarProps {
  children?: React.ReactNode;
  icon: React.ReactNode;
}

export interface Contact {
  productId?: string;
  image?: string;
  productTitle?: string;
  contactName?: string;
  network?: Networks;
  username?: string;
  phone?: number;
  phoneType?: PhoneTypes;
  email?: string;
}

export interface DeviceData {
  device?: string;
  deviceWidth?: number | void;
  deviceHeight?: number | void;
}

export interface HeaderProps {
  enableSidebarButton?: boolean;
  enableUserLogo?: boolean;
  userImg?: string;
  children?: React.ReactNode;
}

export interface IconData {
  location: "left" | "right";
  icon: React.ReactNode;
  onClick?: Function;
}

export interface Image {
  imageId?: string;
  name: string;
  image: string;
  checked?: boolean;
}

export interface InputFormProps {
  id?: string;
  width?: string;
  label?: string;
  helperText?: string;
  error?: boolean;
  sx?: SxProps;
  type?: InputType;
  shrink?: boolean;
  onChange?: Function;
}

export interface PackageProps {
  children?: React.ReactNode;
  title?: String;
  sx?: SxProps;
}

export interface PhoneNumberGroup {
  phone?: number;
  phoneType?: PhoneTypes;

  i?: number;
  id?: string;
  sx?: SxProps;
  error?: boolean;
}

export interface ProductData {
  productId?: string;

  title?: string;
  width?: number;
  height?: number;
  length?: number;
  medium?: string;
  date?: string;
  description?: string;
  price?: number;
  quantity?: number;
  status?: string;

  publishOnCapart?: boolean;
  statusOnCapart?: string;

  pulishOnVangart?: boolean;
  statusOnVangart?: string;

  productImgs?: string[];
}

export interface ProductProps {
  title?: string;
  autor?: string;
  price?: number;
  currency?: Currencies;
  format?: ProductFormats;
  image?: string;
  icons?: IconData;
  menu?: React.ReactNode;
  children?: React.ReactNode;
}

export interface ReactInput {
  id?: string;
  name?: string;
  title?: string;
  label?: string;
  type?: InputType;
  variant?: InputVariant;
  error?: boolean;
  options?: SelectOption[];
  defaultValue?: any;
  value?: any;
  isPlural?: boolean;
  startAdornment?: React.ReactNode;
}

export interface RowList {
  icon?: React.ReactNode;
  label?: string;
  redirect: string;
  isNewSection?: boolean;
  childrens?: RowList[];
}

export interface SelectOption {
  value: string | number;
  icon?: React.ReactNode;
  label?: string;
}

export interface SidebarProps {
  display?: Display;
  width?: "auto" | string;
  children?: React.ReactNode;
}

export interface SocialNetwork {
  network: string;
  username: string;
  link: string;
}

export interface SocialNetworkGroup {
  network: string;
  username: string;
  link: string;

  i?: number;
  id?: string;
  sx?: SxProps;
  error?: boolean;
}

export interface SocialNetworkSelect {
  network: string;
  icon?: React.ReactNode;
  label?: string;
}

export interface TemplateProps {
  sx?: SxProps;
  children?: React.ReactNode;
}

export interface UserData {
  userId?: string;
  name?: string;
  lastname?: string;
  stagename?: string;
  userImg?: string;
  email?: string;
  whatsApps?: number[];
  address?: Address;
  description?: string;

  contacts?: Contact[];
  images?: Image[];
  products?: ProductData[];
}

export interface UserDataAndProps extends UserData {
  changeTitle?: void;
}
