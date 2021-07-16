#!/usr/bin/env node

/** File Descripton :-  index.ts File 
  *    Website Name :- Survey Ninjas
  *     Team Name :- CodingNinjas

  *       Anureet Kaur - 301174444
  *       Mridula Ramakrishnan - 301145813
  *       Muhammad Hassan - 301178235
  *       Nilam Keshwala - 301042029
  *       Raghuveer Manam - 300715775
  *       Roshna Raju - 301174285

  *       Date: 16th July 2021
  */

/**
 * Module dependencies.
 */

import createError from 'http-errors';
import app from './Server/Config/app';
import debug from 'debug';
debug('week-5b:server');
import http from 'http';

/**
 * Get port from environment and store in Express.
 */

let port = normalizePort(process.env.PORT || '3500');
app.set('port', port);

/**
 * Create HTTP server.
 */

let server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val:string): number | string | boolean 
{
  let port = parseInt(val, 10);

  if (isNaN(port)) 
  {
    // named pipe
    return val;
  }

  if (port >= 0) 
  {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error:createError.HttpError): void 
{
  if (error.syscall !== 'listen') 
  {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) 
  {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening():void 
{
  let addr = server.address();
  let bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
