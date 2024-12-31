import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import PersonIcon from "@mui/icons-material/Person";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

import styles from "./Contact.module.css";
import {
  Facebook,
  Instagram,
  Phone,
  Pinterest,
  RssFeed,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import { Contact, PhoneTypes } from "@/typeDef/typeDef";

export default class ContactClass {
  private image?: string;
  private productTitle?: string;
  private contactName?: string;
  private network?: string;
  private username?: string;
  private phone?: number;
  private phoneType?: PhoneTypes;
  private email?: string;

  private networkIcon = (
    network: string = this.network ? this.network : "other"
  ): React.ReactNode => {
    const icons: { [key: string]: React.ReactNode } = {
      facebook: <Facebook />,
      instagram: <Instagram />,
      twitter: <Twitter />,
      pinterest: <Pinterest />,
      other: <RssFeed />,
    };
    return icons[network];
  };

  constructor(dataContact?: Contact) {
    this.image = dataContact?.image;
    this.productTitle = dataContact?.productTitle;
    this.contactName = dataContact?.contactName;
    this.network = dataContact?.network;
    this.username = dataContact?.username;
    this.phone = dataContact?.phone;
    this.phoneType = dataContact?.phoneType;
    this.email = dataContact?.email;
  }

  public Contact = () => {
    return (
      <Card
        sx={{
          display: "flex",
          width: 350,
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <div className={styles.imageContainer}>
            <img src={this.image} height={"100%"} />
          </div>
          <CardContent>
            <Typography textAlign={"center"} fontWeight={"bold"}>
              {this.productTitle}
            </Typography>

            <List>
              <ListItem>
                <ListItemIcon>
                  <PersonIcon />
                </ListItemIcon>
                <ListItemText primary={this.contactName} />
              </ListItem>

              <ListItem>
                <ListItemIcon>{this.networkIcon()}</ListItemIcon>
                <ListItemText primary={this.username} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  {this.phoneType === "whatsapp" ? <WhatsApp /> : <Phone />}
                </ListItemIcon>
                <ListItemText primary={this.phone} />
              </ListItem>

              <ListItem>
                <ListItemIcon>
                  <MailOutlineIcon />
                </ListItemIcon>
                <ListItemText primary={this.email} />
              </ListItem>
            </List>
          </CardContent>
        </Box>
      </Card>
    );
  };
}
