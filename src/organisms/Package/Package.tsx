import { PackageProps } from "@/typeDef/typeDef";
import { Box, SxProps } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Package({ children, title, sx }: PackageProps) {
  return (
    <Box
      sx={{
        background: "#fff",
        p: "15px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        rowGap: 2,
        margin: 0,
        ...sx,
      }}
    >
      <Typography
        variant="h6"
        fontWeight={"bold"}
        width={"100%"}
        textAlign={"center"}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}
