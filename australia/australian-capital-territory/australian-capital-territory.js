// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"australian-capital-territory","repository":"australia","path":"australia/australian-capital-territory","depth":2,"parent":"australia","children":["canberra","tuggeranong"]});
export const childModules = Object.freeze({"canberra":"./canberra/canberra.js","tuggeranong":"./tuggeranong/tuggeranong.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
