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


export const listarDocentesParticipantes = async(req, res)=>{
    try {
        const response = await pool.query('select * from fc_m_listar_docentes_participantes()');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server error...!');
    }
}