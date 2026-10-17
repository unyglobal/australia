// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-plymouth","repository":"australia","path":"new-zealand/taranaki-region/new-plymouth","depth":3,"parent":"new-zealand/taranaki-region","children":["brooklands","welbourn"]});
export const childModules = Object.freeze({"brooklands":"./brooklands/brooklands.js","welbourn":"./welbourn/welbourn.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
