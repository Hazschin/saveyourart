"use client";
import Footer from "@/organisms/Footer/Footer";
import Header from "@/organisms/Header/Header";
import { TemplateProps } from "@/typeDef/typeDef";
import { Box } from "@mui/material";

export default function SimpleTemplate({ sx, children }: TemplateProps) {
  return (
    <>
      <Header enableSidebarButton={false} enableUserLogo={false} />
      <Box
        sx={{
          ...sx,
          display: "flex",
          justifyContent: "space-between",
          columnGap: 2,
        }}
      >
        <Box
          width={"100%"}
          sx={{ display: "flex", justifyContent: "space-evenly" }}
        >
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  );
}
