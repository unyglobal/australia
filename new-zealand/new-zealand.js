// Hierarchical geographic directory module. Children are loaded only on demand.
export const directory = Object.freeze({"name":"new-zealand","repository":"australia","path":"new-zealand","depth":1,"parent":"","children":["auckland","bay-of-plenty","canterbury","gisborne","hawke-s-bay-region","manawatu-wanganui","marlborough","nelson-region","northland","otago","southland","taranaki-region","tasman-district","waikato-region","wellington-region"]});
export const childModules = Object.freeze({"auckland":"./auckland/auckland.js","bay-of-plenty":"./bay-of-plenty/bay-of-plenty.js","canterbury":"./canterbury/canterbury.js","gisborne":"./gisborne/gisborne.js","hawke-s-bay-region":"./hawke-s-bay-region/hawke-s-bay-region.js","manawatu-wanganui":"./manawatu-wanganui/manawatu-wanganui.js","marlborough":"./marlborough/marlborough.js","nelson-region":"./nelson-region/nelson-region.js","northland":"./northland/northland.js","otago":"./otago/otago.js","southland":"./southland/southland.js","taranaki-region":"./taranaki-region/taranaki-region.js","tasman-district":"./tasman-district/tasman-district.js","waikato-region":"./waikato-region/waikato-region.js","wellington-region":"./wellington-region/wellington-region.js"});
export async function loadChild(name) {
  if (!Object.prototype.hasOwnProperty.call(childModules, name)) throw new RangeError("Unknown child directory: " + name);
  return import(new URL(childModules[name], import.meta.url).href);
}
export default directory;
