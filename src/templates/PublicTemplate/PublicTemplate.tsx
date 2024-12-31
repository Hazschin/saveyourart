"use client";

import { useAuth } from "@/contexts/authContext";
import { useDevice } from "@/contexts/deviceContext";
import { useUser } from "@/contexts/userContext";
import Footer from "@/organisms/Footer/Footer";
import Header from "@/organisms/Header/Header";
import MenuList from "@/organisms/MenuList/MenuList";
import Sidebar from "@/organisms/Sidebar/Sidebar";
import { TemplateProps } from "@/typeDef/typeDef";
import { Box } from "@mui/material";
import React from "react";

export default function PublicTemplate({
  children,
}: TemplateProps): React.ReactNode {
  const { isAuth } = useAuth();
  const { userImg } = useUser();
  const { device } = useDevice();

  return (
    <>
      <Header
        enableSidebarButton={device == "mobile" ? true : false}
        enableUserLogo={false}
        userImg={userImg}
      >
        <Sidebar width="70vw">
          <MenuList />
        </Sidebar>
      </Header>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          px: 5,
          columnGap: 2,
        }}
      >
        <Sidebar display={device == "mobile" ? "none" : "default"} width="30%">
          <MenuList />
        </Sidebar>
        <Box width={device == "mobile" ? "90%" : "65%"}>{children}</Box>
      </Box>
      <Footer />
    </>
  );
}
