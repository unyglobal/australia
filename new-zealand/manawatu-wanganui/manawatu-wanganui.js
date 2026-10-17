// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"manawatu-wanganui","repository":"australia","path":"new-zealand/manawatu-wanganui","depth":2,"parent":"new-zealand","children":["levin","palmerston-north","whanganui"]});
export const childModules = Object.freeze({"levin":"./levin/levin.js","palmerston-north":"./palmerston-north/palmerston-north.js","whanganui":"./whanganui/whanganui.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
