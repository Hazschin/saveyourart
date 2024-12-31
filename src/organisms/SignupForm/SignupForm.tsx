"use client";

import { Button, Link, TextField } from "@mui/material";
import Package from "../Package/Package";
import { Google } from "@mui/icons-material";

export default function SignupForm() {
  const Signup = () => {
    alert("Registro exitoso");
    window.location.href = "/login";
  };

  const GoogleSignup = () => {
    alert("Registro con Google exitoso");
    window.location.href = "/login";
  };
  return (
    <Package
      title={"Registrarme"}
      sx={{ maxWidth: "450px", padding: "15px 30px 30px 30px" }}
    >
      <TextField id="email" type="email" label="Correo Electrónico" fullWidth />
      <TextField id="password" type="password" label="Contraseña" fullWidth />
      <TextField
        id="confirmPassword"
        type="password"
        label="Confirmar contraseña"
        fullWidth
      />

      <Button variant="contained" onClick={Signup} fullWidth>
        Registrarme
      </Button>
      <Button
        variant="outlined"
        endIcon={<Google />}
        onClick={GoogleSignup}
        fullWidth
      >
        Registrarme con Google
      </Button>

      <Link
        variant="subtitle2"
        width={"100%"}
        color={"primary"}
        underline="none"
        href="/login"
      >
        Ya tienes una cuenta? <strong>Inicia sesión aquí</strong>
      </Link>
    </Package>
  );
}
