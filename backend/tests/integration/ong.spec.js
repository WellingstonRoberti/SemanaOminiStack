const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach( async () =>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () =>{
        const response = await request(app)
        .post('/ongs')
        //mexer no headers utiliza .set('authorization', 'id')
        .send({
            name: "APAD",
            email: "contato@asdasd.com.br",
            whatsapp: "11312312312",
            city: "juiz de fora",
            uf: "MG"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});