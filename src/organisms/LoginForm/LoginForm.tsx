"use client";

import { Button, Divider, Link, TextField, Typography } from "@mui/material";
import Package from "../Package/Package";
import { Google } from "@mui/icons-material";

export default function LoginForm() {
  const Login = () => {
    window.location.href = "/admin";
  };

  const GoogleLogin = () => {
    alert("Estás iniciando sesión con Google");
    window.location.href = "/admin";
  };

  return (
    <Package
      title={"Iniciar sesión"}
      sx={{ maxWidth: "450px", padding: "15px 30px 30px 30px" }}
    >
      <TextField id="email" type="email" label="Correo Electrónico" fullWidth />
      <TextField id="password" type="password" label="Contraseña" fullWidth />

      <Button variant="contained" onClick={Login} fullWidth>
        Iniciar Sesion
      </Button>
      <Button
        variant="outlined"
        endIcon={<Google />}
        onClick={GoogleLogin}
        fullWidth
      >
        Iniciar Sesion con Google
      </Button>

      <Typography variant="subtitle2" width={"100%"} color={"primary"}>
        Olvidaste tu contraseña?{" "}
        <strong>
          <Link href="/login/recovery">Haz clic aquí</Link>
        </strong>
      </Typography>

      <Divider sx={{ my: 1, width: "100%" }} />

      <Button fullWidth variant="outlined" color="secondary">
        <Link href="/signup" color={"inherit"} underline="none" width={"100%"}>
          Registrarme
        </Link>
      </Button>
    </Package>
  );
}
