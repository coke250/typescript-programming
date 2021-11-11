import mkdirp from 'mkdirp'
import { fileExists } from './fileExists'

export const mkdir = (dirname: string): Promise<string> =>
  new Promise(async (resolve, reject) => {
    const alreadyExist = await fileExists(dirname)
    alreadyExist ? resolve(dirname) : mkdirp(dirname).then(resolve).catch(reject)
  })