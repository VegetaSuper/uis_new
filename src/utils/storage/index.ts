import { createStorage } from './storage'

const storagePrefix = ''

export const localStg = createStorage<StorageType.Local>('local', storagePrefix)

export const sessionStg = createStorage<StorageType.Session>('session', storagePrefix)
