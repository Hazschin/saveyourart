import styles from "./Header.module.css";
import { Avatar, Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import ButtonSidebar from "../ButtonSidebar/ButtonSidebar";
import ButtonMenu from "../ButtonMenu/ButtonMenu";
import { Logout } from "@mui/icons-material";
import { HeaderProps } from "@/typeDef/typeDef";

export default function Header({
  enableSidebarButton = false,
  enableUserLogo = false,
  userImg = "/profile/user.png",
  children,
}: HeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.headerMenus}>
        <Box visibility={enableSidebarButton ? "visible" : "hidden"}>
          <ButtonSidebar icon={<MenuIcon />}>{children}</ButtonSidebar>
        </Box>
        <Box visibility={enableUserLogo ? "visible" : "hidden"}>
          <ButtonMenu
            icon={<Avatar src={userImg} />}
            list={[
              {
                icon: <Logout />,
                label: "Cerrar Sesion",
                closeMenu: true,
                redirect: "/admin/logout",
              },
            ]}
          />
        </Box>
      </div>
      <div className={styles.headerLogo}>
        <Image src="/logo.png" width={278} height={74} alt="CapArt" />
      </div>
    </header>
  );
}
