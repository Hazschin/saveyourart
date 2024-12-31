import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import styles from "./Artist.module.css";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import { Settings } from "@mui/icons-material";
import { ArtistFormats } from "@/typeDef/typeDef";

export default class ArtistClass {
  private stagename?: string;
  private image?: string;
  private format?: ArtistFormats;

  private ArtistIcons = (): React.ReactNode => {
    if (this.format === "public") {
      return <></>;
    } else if (this.format === "superadmin") {
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
    } else {
      return false;
    }
  };

  private ArtistOptions = (): React.ReactNode => {
    if (this.format === "public") {
      return <></>;
    } else if (this.format === "superadmin") {
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
        />
      );
    } else {
      return <></>;
    }
  };

  constructor(dataProduct?: any) {
    this.stagename = "Anónimo";
    this.format = "superadmin";
    this.image = "/assets/latempestad.png";
  }

  public Artist = () => {
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
        <div className={styles.headerMenu}>
          <div>{this.ArtistIcons()}</div>
          <div>{this.ArtistOptions()}</div>
        </div>
        <div className={styles.imageContainer}>
          <img src={this.image} width={"100%"} />
        </div>
        <CardContent sx={{ paddingTop: "0" }}>
          <Typography variant="subtitle1" textAlign={"center"}>
            {this.stagename}
          </Typography>
        </CardContent>
      </Card>
    );
  };
}
