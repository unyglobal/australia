// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"bay-of-plenty","repository":"australia","path":"new-zealand/bay-of-plenty","depth":2,"parent":"new-zealand","children":["rotorua","tauranga","whakatane"]});
export const childModules = Object.freeze({"rotorua":"./rotorua/rotorua.js","tauranga":"./tauranga/tauranga.js","whakatane":"./whakatane/whakatane.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
