/** The storage type */
export type StorageType = 'local' | 'session'

interface StorageItem<T> {
  value: T
  expireTime?: number
}

export function createStorage<T extends object>(type: StorageType, storagePrefix: string) {
  const stg = type === 'session' ? window.sessionStorage : window.localStorage

  const storage = {
    /**
     * Set storage item
     *
     * @param key Storage key
     * @param value Storage value
     * @param expire Expire time in milliseconds, if not provided, the item will be cached permanently
     */
    set<K extends keyof T>(key: K, value: T[K], expire?: number) {
      const now = Date.now()
      const item: StorageItem<T[K]> = {
        value,
        expireTime: expire ? now + expire : undefined,
      }

      const json = JSON.stringify(item)
      stg.setItem(`${storagePrefix}${key as string}`, json)
    },
    /**
     * Get storage item
     *
     * @param key Storage key
     */
    get<K extends keyof T>(key: K): T[K] | null {
      const json = stg.getItem(`${storagePrefix}${key as string}`)
      if (json) {
        let parsedData: unknown = null

        try {
          parsedData = JSON.parse(json)
        } catch {}

        if (parsedData !== null && typeof parsedData === 'object') {
          // Check if it's the new format with StorageItem structure
          const parsedObj = parsedData as Record<string, unknown>
          const hasValue = 'value' in parsedObj
          const hasExpireTime = 'expireTime' in parsedObj
          const keys = Object.keys(parsedObj)
          const isNewFormat =
            hasValue &&
            (hasExpireTime || keys.length === 1) &&
            (hasExpireTime ? typeof parsedObj.expireTime === 'number' || parsedObj.expireTime === undefined : true)

          if (isNewFormat) {
            const storageItem = parsedData as StorageItem<T[K]>

            // Check if expired
            if (storageItem.expireTime && Date.now() > storageItem.expireTime) {
              stg.removeItem(`${storagePrefix}${key as string}`)
              return null
            }

            // storageItem.value may be `false` if it is boolean type
            if (storageItem.value !== null && storageItem.value !== undefined) {
              return storageItem.value
            }
          } else {
            // Backward compatibility: old format (direct value)
            return parsedData as T[K]
          }
        } else if (parsedData !== null) {
          // Backward compatibility: old format (direct value, not an object)
          return parsedData as T[K]
        }
      }

      stg.removeItem(`${storagePrefix}${key as string}`)

      return null
    },
    remove(key: keyof T) {
      stg.removeItem(`${storagePrefix}${key as string}`)
    },
    clear() {
      stg.clear()
    },
  }
  return storage
}
