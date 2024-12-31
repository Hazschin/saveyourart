import { Image } from "@/typeDef/typeDef";
import { Delete } from "@mui/icons-material";
import {
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function ImageContainer({ images }: { images?: Image[] }) {
  return (
    <TableContainer component={Paper} sx={{ bgcolor: "rgba(0,0,0,0.05)" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: "bolder" }}>
              Imágenes selecionadas
            </TableCell>
            <TableCell sx={{ fontWeight: "bolder" }}>Nombre</TableCell>
            <TableCell align="center" sx={{ fontWeight: "bolder" }}>
              Imagen
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {images?.map((image, i) => (
            <TableRow
              key={i}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell
                component="th"
                scope="row"
                width={`${(100 / 12) * 2}%`}
              >
                <IconButton>
                  <Delete />
                </IconButton>
              </TableCell>
              <TableCell
                component="th"
                scope="row"
                width={`${(100 / 12) * 8}%`}
              >
                {image.name}
              </TableCell>
              <TableCell
                align="center"
                component="th"
                scope="row"
                width={`${(100 / 12) * 2}%`}
              >
                <img alt={image.name} src={image.image} width={"50px"} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
