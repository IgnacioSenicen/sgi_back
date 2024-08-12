import { Router } from "express";
import {pool} from '../database.js'
const router = Router()

router.get('/ping', async (req, res) => {
    const [result] = await  pool.query('SELECT * FROM test') 
    res.json(result[0])
  } );

export default router