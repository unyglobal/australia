// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"porirua","repository":"australia","path":"new-zealand/wellington-region/porirua","depth":3,"parent":"new-zealand/wellington-region","children":["porirua-east","ranui-heights"]});
export const childModules = Object.freeze({"porirua-east":"./porirua-east/porirua-east.js","ranui-heights":"./ranui-heights/ranui-heights.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
