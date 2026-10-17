// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"hobart","repository":"australia","path":"australia/tasmania/hobart","depth":3,"parent":"australia/tasmania","children":["glebe","hobart-city-centre"]});
export const childModules = Object.freeze({"glebe":"./glebe/glebe.js","hobart-city-centre":"./hobart-city-centre/hobart-city-centre.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
