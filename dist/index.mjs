// src/index.ts
import sharp from "sharp";
var imageOptimizer = (config) => {
  const quality = config?.quality ?? 30;
  return {
    name: "vite-plugin-image-optimizer",
    async transform(code, id) {
      if (/\.(png|jpe?g|webp)$/.test(id)) {
        const buffer = await sharp(id).webp({ quality }).toBuffer();
        return await `export default ${JSON.stringify("data:image/jpeg;base64," + buffer.toString("base64"))}`;
      }
    }
  };
};
var index_default = imageOptimizer;
export {
  index_default as default
};
