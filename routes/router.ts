
import { Router, Request, Response } from 'express';
import Server from '../classes/server';
import { mapa } from '../sockets/socket';

const router = Router();


router.get('/mapa', ( req: Request, res: Response  ) => {

    res.json(mapa.getMarcadores());

});



export default router;


