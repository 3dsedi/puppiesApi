"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("./app"));
const app_2 = __importDefault(require("./app"));
describe('Testing api endpoint', () => {
    test('sanity check for /puppies', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/api/puppies');
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            puppies: app_2.default,
        });
    });
});
describe('Testing api endpoint', () => {
    test('sanity check for /puppies', async () => {
        const res = await (0, supertest_1.default)(app_1.default).get('/api/puppies');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toBeGreaterThan(0);
    });
});
//# sourceMappingURL=test.js.map