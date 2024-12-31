"use client";

import { useUser } from "@/contexts/userContext";
import Footer from "@/organisms/Footer/Footer";
import Header from "@/organisms/Header/Header";
import Sidebar from "@/organisms/Sidebar/Sidebar";
import styles from "./AdminTemplate.module.css";
import { Box } from "@mui/material";
import { useDevice } from "@/contexts/deviceContext";
import MenuList from "@/organisms/MenuList/MenuList";
import { useAuth } from "@/contexts/authContext";
import { useThemeCapart } from "@/contexts/themeContext";
import { RowList, TemplateProps } from "@/typeDef/typeDef";

export default function AdminTemplate({ children, sx }: TemplateProps) {
  const { isAuth, userRol } = useAuth();
  const { userImg } = useUser();
  const { device } = useDevice();
  const { adminMenu, artistMenu } = useThemeCapart();

  var MenuItems: RowList[] =
    userRol === "admin" ? adminMenu : userRol === "artist" ? artistMenu : [];

  return (
    <>
      <Header
        enableSidebarButton={device == "mobile" ? true : false}
        enableUserLogo={isAuth}
        userImg={userImg}
      >
        <Sidebar width="70vw">
          <MenuList list={MenuItems} />
        </Sidebar>
      </Header>
      <Box className={styles.mainContent} sx={{ ...sx }}>
        <Sidebar display={device == "mobile" ? "none" : "default"} width="30%">
          <MenuList list={MenuItems} />
        </Sidebar>
        <Box width={device === "mobile" ? "100%" : "65%"}>{children}</Box>
      </Box>
      <Footer />
    </>
  );
}
