
import { app } from '../app.js';
import userRoutes from '../routes/user.js';

export const handler = async (event, context) => {
  try {
    const req = {
      path: event.path,
      httpMethod: event.httpMethod,
      headers: event.headers,
      query: event.queryStringParameters,
      body: event.body,
    };

    const res = {
      statusCode: 200,
      headers: {},
      body: '',
    };

    await userRoutes(req, res);

    return {
      statusCode: res.statusCode,
      headers: res.headers,
      body: res.body,
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};
