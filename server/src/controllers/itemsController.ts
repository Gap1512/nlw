import { Request, Response } from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        return response.json(
            (await knex('items').select('*'))
                .map(item => {
                    return {
                        id: item.id,
                        name: item.title,
                        image_url: `http://192.168.2.106:3333/uploads/${item.image}`
                    }
        }));
    }
}

export default ItemsController;