import url from 'url'

export const getFilename = () => url.fileURLToPath(import.meta.url)
export const getDirname = () => url.fileURLToPath(new URL('.', import.meta.url))
