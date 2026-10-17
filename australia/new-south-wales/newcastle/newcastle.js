// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"newcastle","repository":"australia","path":"australia/new-south-wales/newcastle","depth":3,"parent":"australia/new-south-wales","children":["cooks-hill","newcastle-east","the-hill"]});
export const childModules = Object.freeze({"cooks-hill":"./cooks-hill/cooks-hill.js","newcastle-east":"./newcastle-east/newcastle-east.js","the-hill":"./the-hill/the-hill.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
