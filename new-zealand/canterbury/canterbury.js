// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"canterbury","repository":"australia","path":"new-zealand/canterbury","depth":2,"parent":"new-zealand","children":["ashburton","christchurch","rangiora","rolleston","timaru"]});
export const childModules = Object.freeze({"ashburton":"./ashburton/ashburton.js","christchurch":"./christchurch/christchurch.js","rangiora":"./rangiora/rangiora.js","rolleston":"./rolleston/rolleston.js","timaru":"./timaru/timaru.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
