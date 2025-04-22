import sharp from 'sharp'
import {Config} from './typing'
const imageOptimizer = (config: Config) => {
  const quality = config?.quality ?? 30
  return {
    name: 'vite-plugin-image-optimizer',
    async transform(code: string, id: string) {
      if (/\.(png|jpe?g|webp)$/.test(id)) {
        const buffer = await sharp(id).webp({ quality: quality }).toBuffer()
        return await `export default ${JSON.stringify('data:image/jpeg;base64,' + buffer.toString('base64'))}`
      }
    }
  }
}

export default imageOptimizer
