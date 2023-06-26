import nanoerror from 'nanoerror';

// function createError (code, message) {
//   export[code] = nanoerror(code, message);
// }

// createError('ERR_MAX_PEERS_REACHED', 'max peers reached: %s')
export const ERR_MAX_PEERS_REACHED = nanoerror('ERR_MAX_PEERS_REACHED', 'max peers reached: %s')
export const ERR_INVALID_CHANNEL = nanoerror('ERR_INVALID_CHANNEL', 'invalid channel: %s')
export const ERR_CONNECTION_DUPLICATED = nanoerror('ERR_CONNECTION_DUPLICATED', 'connection duplicated: %s -> %s')