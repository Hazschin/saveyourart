import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";

import styles from "./ImageData.module.css";
import {
  Check,
  CheckBox,
  Delete,
  InsertLink,
  MoreVert,
} from "@mui/icons-material";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import { Checkbox, ListItemIcon, MenuItem } from "@mui/material";
import { Image, ImageFormats } from "@/typeDef/typeDef";
import { useState } from "react";

export default class ImageClass {
  private format?: ImageFormats;
  private select?: boolean;

  private ArtistOptions = (): React.ReactNode => {
    if (this.format === "superadmin") {
      return <></>;
    } else if (this.format === "artist") {
      return (
        <ButtonMenu icon={<MoreVert />} closeMenu={true}>
          <MenuItem>
            <ListItemIcon>
              <Delete />
            </ListItemIcon>
            Borrar Imagen
          </MenuItem>
        </ButtonMenu>
      );
    } else {
      return <></>;
    }
  };

  constructor(format: ImageFormats = "superadmin", select: boolean = true) {
    this.format = format;
    this.select = select;
  }

  public Image = ({
    image,
    name,
    isChecked = false,
    isSelectable = false,
    onClick,
  }: {
    image: string;
    name: string;
    isChecked?: boolean;
    isSelectable?: boolean;
    onClick?: (imgData: Image | undefined, checked: boolean) => void;
  }) => {
    const [checked, setChecked] = useState(isChecked);

    const handleClick = () => {
      const isChecked = isSelectable ? !checked : checked ? !checked : checked;
      onClick ? onClick({ name, image }, isChecked) : false;
      setChecked(isChecked);
    };

    return (
      <Card
        sx={{
          width: "350px",
          maxWidth: "100%",
          borderRadius: "10px",
          position: "relative",
        }}
      >
        <div className={styles.imageContainer}>
          <img
            src={image}
            height={"100%"}
            onClick={handleClick}
            style={{ cursor: this.select ? "pointer" : "" }}
          />

          <div className={styles.footerMenu}>
            <Checkbox
              sx={{ display: this.select ? "" : "none" }}
              checked={checked}
              onClick={handleClick}
            />

            <div className={styles.imageTitle}>{name}</div>
            <div>
              <IconButton>
                <InsertLink />
              </IconButton>
              {this.ArtistOptions()}
            </div>
          </div>
        </div>
      </Card>
    );
  };
}
