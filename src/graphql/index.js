import config from '../config';
import { createClient } from 'urql';

const client = createClient({
  url: config.api,
});

export default client;
