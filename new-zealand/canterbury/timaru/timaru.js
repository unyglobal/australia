// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"timaru","repository":"australia","path":"new-zealand/canterbury/timaru","depth":3,"parent":"new-zealand/canterbury","children":["parkside","seaview","timaru-port"]});
export const childModules = Object.freeze({"parkside":"./parkside/parkside.js","seaview":"./seaview/seaview.js","timaru-port":"./timaru-port/timaru-port.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
