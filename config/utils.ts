import path from 'path'

export const resolve = (url: string) => {
  return path.resolve(process.cwd(), url)
}