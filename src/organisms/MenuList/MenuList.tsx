import { RowList } from "@/typeDef/typeDef";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Link from "next/link";

export default function MenuList({ list = [] }: { list?: RowList[] }) {
  return (
    <nav>
      <List>
        {list.map((item, i) => {
          return (
            <Box key={i}>
              {item.isNewSection ? <Divider /> : ""}
              <Link
                color={"inherit"}
                href={item.redirect}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              </Link>
            </Box>
          );
        })}
      </List>
    </nav>
  );
}
