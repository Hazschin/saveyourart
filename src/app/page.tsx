"use client";
import SimpleTemplate from "@/templates/SimpleTemplate/SimpleTemplate";
import { Box, Button } from "@mui/material";

export default function Home() {
  return (
    <SimpleTemplate>
      <main>
        <Box
          height={"100vh"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Button
            variant="contained"
            onClick={() => {
              window.location.href = "/login";
            }}
            fullWidth
          >
            Login
          </Button>
        </Box>
      </main>
    </SimpleTemplate>
  );
}
