import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "./Product.module.css";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import React from "react";
import { MenuItem, Switch } from "@mui/material";
import { Settings } from "@mui/icons-material";
import { Currencies, ProductData, ProductFormats } from "@/typeDef/typeDef";

export default class ProductClass {
  private title?: string;
  private autor?: string;
  private price?: number;
  private currency?: Currencies;
  private format?: ProductFormats;
  private images?: string[] = [];

  private ProductIcons = (): React.ReactNode => {
    if (this.format === "artist") {
      return (
        <>
          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EditIcon />
          </IconButton>
        </>
      );
    } else if (this.format === "superadmin") {
      return (
        <>
          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>

          <IconButton>
            <EditIcon />
          </IconButton>
        </>
      );
    } else {
      return false;
    }
  };

  private ProductOptions = (): React.ReactNode => {
    if (this.format === "artist") {
      return (
        <ButtonMenu
          icon={<MoreVertIcon />}
          list={[
            {
              icon: <Settings />,
              label: "Ver más opciones",
              closeMenu: true,
            },
          ]}
        >
          <MenuItem>
            <Switch />
            Publicar en
            <a href="https://tiendaa.com/">Tienda A</a>
          </MenuItem>
          <MenuItem>
            <Switch />
            Publicar en<a href="https://tiendab.com/">Tienda B</a>
          </MenuItem>
        </ButtonMenu>
      );
    } else if (this.format === "superadmin") {
      return (
        <ButtonMenu
          icon={<MoreVertIcon />}
          list={[
            {
              icon: <Settings />,
              label: "Ver más opciones",
            },
          ]}
        />
      );
    } else {
      return <></>;
    }
  };

  constructor(dataProduct: ProductData) {
    this.title = dataProduct?.title;
    this.autor = "Anónimo";
    this.price = dataProduct?.price;
    this.currency = "mxn";
    this.format = "artist";
    this.images = dataProduct?.productImgs;
  }

  public Product = () => {
    return (
      <Card
        sx={{
          width: "350px",
          maxWidth: "100%",
          borderRadius: "10px",
          boxShadow: "none",
          position: "relative",
        }}
      >
        <div
          className={styles.headerMenu}
          style={{
            display:
              this.format !== "superadmin" && this.format !== "artist"
                ? "none"
                : "flex",
          }}
        >
          <div>{this.ProductIcons()}</div>
          <div>{this.ProductOptions()}</div>
        </div>
        <div className={styles.imageContainer}>
          <img src={this.images ? this.images[0] : ""} height={"100%"} />
        </div>
        <CardContent sx={{ paddingTop: "0" }}>
          <Typography
            variant="subtitle1"
            sx={{ fontWeight: "bold", paddingBottom: 0 }}
          >
            {this.title}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{ fontStyle: "italic", paddingBottom: 0 }}
          >
            {this.autor}
          </Typography>
          <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
            ${this.price} {this.currency ? this.currency.toUpperCase() : "MXN"}
          </Typography>
        </CardContent>
      </Card>
    );
  };
}
