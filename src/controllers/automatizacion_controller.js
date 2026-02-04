import Grupo from "../models/Grupos.js";
import Usuario from "../models/Usuario.js";

export const reporteGrupos = async (req, res) => {
    try {
        const grupos = await Grupo.find()
        .populate("creadoPor", "nombre email");

        const reporte = await Promise.all(
        grupos.map(async (grupo) => {
            const totalUsuarios = await Usuario.countDocuments({
            grupo: grupo._id
            });

            const usuariosConectados = await Usuario.countDocuments({
            grupo: grupo._id,
            online: true
            });

            return {
            grupo: grupo.nombre,
            totalUsuarios,
            usuariosConectados,
            creadoPor: grupo.creadoPor?.nombre
            };
        })
        );

        res.json({
        ok: true,
        reporte
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
