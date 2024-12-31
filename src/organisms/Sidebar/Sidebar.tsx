import { SidebarProps } from "@/typeDef/typeDef";
import Box from "@mui/material/Box";

export default function Sidebar({
  display = "default",
  width = "auto",
  children,
}: SidebarProps) {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        borderRadius: "10px",
        display,
        width,
      }}
    >
      {children}
    </Box>
  );
}
