// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"sydney-central-business-district","repository":"australia","path":"australia/new-south-wales/sydney-central-business-district","depth":3,"parent":"australia/new-south-wales","children":["barangaroo","dawes-point","millers-point"]});
export const childModules = Object.freeze({"barangaroo":"./barangaroo/barangaroo.js","dawes-point":"./dawes-point/dawes-point.js","millers-point":"./millers-point/millers-point.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
