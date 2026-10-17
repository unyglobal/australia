// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"tuggeranong","repository":"australia","path":"australia/australian-capital-territory/tuggeranong","depth":3,"parent":"australia/australian-capital-territory","children":["greenway"]});
export const childModules = Object.freeze({"greenway":"./greenway/greenway.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
