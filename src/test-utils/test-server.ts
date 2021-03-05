import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.post(`${process.env.REACT_APP_API_URL}/users`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ status: 'ok' }));
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
