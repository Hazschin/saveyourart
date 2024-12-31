"use client";
import "./404.css";

export default function NotFound() {
  return (
    <>
      <div className="notFound">
        <h1>404</h1>
        <h6>Página no encontrada</h6>
        <a href="/login">Regresar a la página principal</a>
      </div>
    </>
  );
}
