"use client";

import { useState } from "react";

import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { ButtonMenuProps } from "@/typeDef/typeDef";
import Link from "next/link";

export default function ButtonMenu({
  icon,
  list,
  closeMenu = false,
  children,
}: ButtonMenuProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-controls={open ? "menuIcon" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {icon}
      </IconButton>
      <Menu
        id="menuIcon"
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        onClick={closeMenu ? handleClose : () => {}}
      >
        {children}

        {list?.map((item, i) => {
          return (
            <Link
              href={item.redirect || ""}
              style={{ textDecoration: "none", color: "inherit" }}
              key={i}
            >
              <MenuItem
                key={i}
                onClick={item.closeMenu ? handleClose : () => {}}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                {item.label}
              </MenuItem>
            </Link>
          );
        })}
      </Menu>
    </>
  );
}
