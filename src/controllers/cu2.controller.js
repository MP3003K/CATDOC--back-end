import { pool } from '../database'
const helpers = require('../libs/helpers');

export const crearUsuarioParticipante = async(req, res)=>{
    try {
        const{ nombres,apellidos,dni,celular,telefono_fijo,correo ,estado,cat_actual,cat_deceada,password,idrol} = req.body;
        const password_cifrado = await helpers.encryptPassword(password);
        await pool.query('select  fc_m_registrar_docente_participante($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) ', [ nombres,apellidos,dni,celular,telefono_fijo,correo ,estado,cat_actual,cat_deceada,password_cifrado,idrol]);
        return res.status(200).json(
            `Usuario ${ dni } creado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const updateDocenteEvaluador = async(req, res)=>{
    try {
        const idusuario = parseInt(req.params.id);
        const{ nombres, apellidos, dni, celular, telefono_fijo, correo, cat_actual, idsede, idfacultad, idcargo} = req.body;
        await pool.query('update docente set nombres = $1, apellidos = $2, dni = $3, celular = $4, telefono_fijo = $5, correo = $6, cat_actual = $7 where idsede = $8 where idfacultad = $9 where idcargo = $10', [nombres, apellidos, dni, celular, telefono_fijo, correo, cat_actual, idsede, idfacultad, idcargo]);
        return res.status(200).json(
            `Docente evaluador modificado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}
export const listarDocentesParticipantes = async(req, res)=>{
    try {
        const response = await pool.query('select * from fc_m_listar_docentes_participantes()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}

export const eliminar_user_log = async(req, res)=>{
    try {
        const idusuario = parseInt(req.params.id);
        console.log(idusuario);
        await pool.query('select  fc_m_elim_usu_log($1) ', [idusuario]);
        return res.status(200).json(
            `Usuario eliminado correctamente...!`);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }

}
