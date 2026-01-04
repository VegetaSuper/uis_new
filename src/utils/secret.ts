import CryptoJS from 'crypto-js'

/**
 * AES 加密/解密工具类
 * 使用 AES-CBC 模式，ZeroPadding 填充方式
 */

/** 从环境变量获取的默认密钥 */
const SECRET = import.meta.env.VITE_APP_SECRET

/** 默认加密密钥（WordArray 格式） */
const DEFAULT_KEY = CryptoJS.enc.Utf8.parse(SECRET)

/** 默认初始化向量（IV），使用与密钥相同的值 */
const DEFAULT_IV = CryptoJS.enc.Utf8.parse(SECRET)

/**
 * AES 加密函数
 * @param word - 待加密的字符串
 * @param keyStr - 可选的加密密钥（UTF-8 字符串），如果不提供则使用默认密钥
 * @param ivStr - 可选的初始化向量（UTF-8 字符串），如果不提供则使用默认 IV
 * @returns 加密后的 Base64 编码字符串
 * @example
 * ```ts
 * const encrypted = Encrypt('hello world');
 * const encrypted2 = Encrypt('hello world', 'my-key', 'my-iv');
 * ```
 */
export function Encrypt(word: string, keyStr?: string, ivStr?: string): string {
  // 使用自定义密钥和 IV，否则使用默认值
  const key = keyStr ? CryptoJS.enc.Utf8.parse(keyStr) : DEFAULT_KEY
  const iv = ivStr ? CryptoJS.enc.Utf8.parse(ivStr) : DEFAULT_IV

  // 将待加密字符串转换为 WordArray
  const srcs = CryptoJS.enc.Utf8.parse(word)

  // 执行 AES 加密
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  })

  // 返回 Base64 编码的密文
  return CryptoJS.enc.Base64.stringify(encrypted.ciphertext)
}

/**
 * AES 解密函数
 * @param word - 待解密的 Base64 编码字符串
 * @param keyStr - 可选的解密密钥（UTF-8 字符串），如果不提供则使用默认密钥
 * @param ivStr - 可选的初始化向量（UTF-8 字符串），如果不提供则使用默认 IV
 * @returns 解密后的原始字符串
 * @example
 * ```ts
 * const decrypted = Decrypt('encrypted-base64-string');
 * const decrypted2 = Decrypt('encrypted-base64-string', 'my-key', 'my-iv');
 * ```
 */
export function Decrypt(word: string, keyStr?: string, ivStr?: string): string {
  // 使用自定义密钥和 IV，否则使用默认值
  const key = keyStr ? CryptoJS.enc.Utf8.parse(keyStr) : DEFAULT_KEY
  const iv = ivStr ? CryptoJS.enc.Utf8.parse(ivStr) : DEFAULT_IV

  // 清理输入字符串（移除换行符）
  const cleanedWord = word ? word.replace(/\n/g, '') : ''

  // 如果输入为空，直接返回空字符串
  if (!cleanedWord) {
    return ''
  }

  // 解析 Base64 字符串
  const base64 = CryptoJS.enc.Base64.parse(cleanedWord)
  const src = CryptoJS.enc.Base64.stringify(base64)

  // 执行 AES 解密
  const decrypt = CryptoJS.AES.decrypt(src, key, {
    iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.ZeroPadding,
  })

  // 转换为 UTF-8 字符串并返回
  return decrypt.toString(CryptoJS.enc.Utf8)
}
