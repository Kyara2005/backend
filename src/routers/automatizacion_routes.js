import express from "express";
import { reporteGrupos } from "../controllers/automatizacion_controller.js";

const router = express.Router();

router.get("/reporte/grupos", reporteGrupos);

export default router;
