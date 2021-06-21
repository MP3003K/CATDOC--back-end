import { pool } from '../database'

export const readAllDetalle = async(req, res)=>{
    try {
        const response = await pool.query('select * from detalle');
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}
export const readDetalle = async(req, res)=>{
    try {
        const id = parseInt(req.params.id);
        const response = await pool.query('select * from detalle where iddetalle = $1', [id]);
        return res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const delDetalle = async(req, res)=>{
    try {
        const idd = parseInt(req.params.id);
        const response = await pool.query('delete from detalle where iddetalle = $1', [idd]);
        return res.status(200).json(
            `detalle ${ idd } eliminado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }

}

export const updateDetalle = async(req, res)=>{
    try {
        const iddetalle = parseInt(req.params.id);
        const{ creditos, horas} = req.body;
        await pool.query('update detalle set creditos = $1, horas = $2 where iddetalle = $3', [creditos, horas,iddetalle]);
        return res.status(200).json(
            `detalle modificado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}

export const createDetalle= async(req, res)=>{
    try {
        const{ iddetalle, creditos, horas,idcurso,idmatricula} = req.body;
        await pool.query('insert into detalle(iddetalle, creditos, horas , idcurso , idmatricula) values($1,$2,$3,$4,$5)', [iddetalle, creditos, horas,idcurso,idmatricula]);
        return res.status(200).json(
            `El detalle  con id: ${ iddetalle } se ha agregado correctamente...!` //alt 96
        );
    } catch (e) {
        console.log(e);
        return res.status(500).json('Internal Server Error...!');
    }
}