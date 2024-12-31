"use client";

import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Sidebar from "../Sidebar/Sidebar";
import { ButtonSidebarProps } from "@/typeDef/typeDef";

export default function ButtonSidebar({ children, icon }: ButtonSidebarProps) {
  const anchor = "left";
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState(open);
    };

  const list = () => <Sidebar></Sidebar>;

  return (
    <div>
      <IconButton
        sx={{ width: "50px", height: "50px" }}
        onClick={toggleDrawer(true)}
      >
        {icon}
      </IconButton>
      <Drawer
        anchor={anchor}
        open={state}
        onClose={toggleDrawer(false)}
        sx={{ width: "auto" }}
      >
        {children}
      </Drawer>
    </div>
  );
}
