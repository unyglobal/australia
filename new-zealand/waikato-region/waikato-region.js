// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"waikato-region","repository":"australia","path":"new-zealand/waikato-region","depth":2,"parent":"new-zealand","children":["cambridge","hamilton","hamilton-east","taupo"]});
export const childModules = Object.freeze({"cambridge":"./cambridge/cambridge.js","hamilton":"./hamilton/hamilton.js","hamilton-east":"./hamilton-east/hamilton-east.js","taupo":"./taupo/taupo.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
