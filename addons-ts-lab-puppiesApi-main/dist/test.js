"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("./app"));
// describe('Testing api endpoint', () => {
//   test('sanity check for /puppies', async () => {
//     const res = await request(app).get('/api/puppies');
//     expect(res.statusCode).toEqual(200);
//     expect(res.body).toEqual({
//       puppies: PUPPIES,
//     });
//   });
// });
// describe('Testing api endpoint', () => {
//   test('sanity check for /puppies', async () => {
//     const res = await request(app).get('/api/puppies');
//     expect(res.statusCode).toEqual(200);
//       expect(res.body.length).toBeGreaterThan(0);
//     });
//   });
describe('Testing api endpoints2', () => {
    test('get all puppies endpoint2', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/api/puppies');
        expect(res.statusCode).toEqual(200);
        expect(res.body[0]).toHaveProperty('name');
        expect(res.body).toHaveLength(10);
    });
    test('check for puppy with param.id of 123', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/api/puppies/123');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            id: 123, breed: 'husky', name: 'snow man', birthDate: '21.09.1986'
        });
    });
    test('delete puppy with id of 124', async () => {
        const res = await (0, supertest_1.default)(app_1.default).delete('/api/puppies/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toEqual('( id:124  Name:SAG ) removed from database');
    });
    test('post new puppy', async () => {
        const res = await (0, supertest_1.default)(app_1.default)
            .post('/api/puppies')
            .send({ breed: 'sarabi', name: 'fery', birthdate: '21-09-2020' });
        expect(res.headers['content-type']).toMatch(/json/);
        expect(res.statusCode).toEqual(201);
        expect(res.body.name).toEqual('fery');
    });
});
// test('responds with status 404 ', async () => {
//     const res = await request(app).get('/api/puppies/50');
//     expect(res.statusCode).toEqual(404);
//     expect(res.body.message).toEqual('Puppy not found in database');
//   });
//# sourceMappingURL=test.js.map