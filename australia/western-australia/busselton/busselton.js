// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"busselton","repository":"australia","path":"australia/western-australia/busselton","depth":3,"parent":"australia/western-australia","children":["busselton-city-centre"]});
export const childModules = Object.freeze({"busselton-city-centre":"./busselton-city-centre/busselton-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
