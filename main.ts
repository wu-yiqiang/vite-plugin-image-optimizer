import sharp from 'sharp'
const vitePluginImageOptimizer = () => {
    return {
        name: 'vite-plugin-image-optimizer',
        async transform(code: string, id: string) {
            if (/\.(png|jpe?g|webp)$/.test(id)) {
                const buffer = await sharp(id).webp({ quality: 30 }).toBuffer()
                return await `export default ${JSON.stringify('data:image/jpeg;base64,' + buffer.toString('base64'))}`
            }
        }
    }
}


export default vitePluginImageOptimizer;