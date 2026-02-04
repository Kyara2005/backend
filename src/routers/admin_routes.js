import express from "express";
import { verificarTokenJWT } from "../middlewares/JWT.js";
import esAdmin from "../middlewares/esAdmin.js";

import {
    getAllUsers,
    deleteUser,
    actualizarUsuario
} from "../controllers/usuario_controller.js";

import {
    crearAutomatizacion,
    listarAutomatizaciones
} from "../controllers/admin_controller.js";

const router = express.Router();

/* ===== USUARIOS (SOLO ADMIN) ===== */

// Listar usuarios
router.get(
    "/usuarios",
    verificarTokenJWT,
    esAdmin,
    getAllUsers
);

// Actualizar usuario
router.put(
    "/usuarios/:id",
    verificarTokenJWT,
    esAdmin,
    actualizarUsuario
);

// Eliminar usuario
router.delete(
    "/usuarios/:id",
    verificarTokenJWT,
    esAdmin,
    deleteUser
);

/* 🔒 Automatización (ADMIN) */
router.post(
    "/automatizaciones",
    verificarTokenJWT,
    esAdmin,
    crearAutomatizacion
);

router.get(
    "/automatizaciones",
    verificarTokenJWT,
    esAdmin,
    listarAutomatizaciones
);
export default router;
