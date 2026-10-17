// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"whanganui","repository":"australia","path":"new-zealand/manawatu-wanganui/whanganui","depth":3,"parent":"new-zealand/manawatu-wanganui","children":["gonville"]});
export const childModules = Object.freeze({"gonville":"./gonville/gonville.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
