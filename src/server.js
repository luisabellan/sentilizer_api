
import Hapi from '@hapi/hapi'
import {routes} from './routes'

const init = async () => {

    const server = Hapi.server({
        port: 5000,
        host: 'localhost'
        //In a docker container, however, the localhost may not be accessible 
        // outside of the container and using host: '0.0.0.0' may be needed.
    });

    routes.forEach(route => {
      server.route(route)
      
    });
  


    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();