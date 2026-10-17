// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"central-coast","repository":"australia","path":"australia/new-south-wales/central-coast","depth":3,"parent":"australia/new-south-wales","children":["spring-field"]});
export const childModules = Object.freeze({"spring-field":"./spring-field/spring-field.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
