import { startStandaloneServer } from '@apollo/server/standalone';
import server from './apollo/index.js';

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server is ready at: ${url}`);
};

startServer();
