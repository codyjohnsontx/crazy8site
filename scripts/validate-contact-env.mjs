import fs from 'node:fs'
import path from 'node:path'

const rootDir = process.cwd()
const envFiles = ['.env.local', '.env']

function readEnvValue(key) {
  const directValue = process.env[key]?.trim()

  if (directValue) {
    return directValue
  }

  for (const envFile of envFiles) {
    const envPath = path.join(rootDir, envFile)

    if (!fs.existsSync(envPath)) {
      continue
    }

    const contents = fs.readFileSync(envPath, 'utf8')

    for (const line of contents.split(/\r?\n/)) {
      const trimmedLine = line.trim()

      if (!trimmedLine || trimmedLine.startsWith('#')) {
        continue
      }

      const separatorIndex = trimmedLine.indexOf('=')

      if (separatorIndex === -1) {
        continue
      }

      const candidateKey = trimmedLine.slice(0, separatorIndex).trim()

      if (candidateKey !== key) {
        continue
      }

      const rawValue = trimmedLine.slice(separatorIndex + 1).trim()
      const normalizedValue = rawValue.replace(/^['"]|['"]$/g, '').trim()

      if (normalizedValue) {
        return normalizedValue
      }
    }
  }

  return ''
}

const accessKey = readEnvValue('VITE_WEB3FORMS_ACCESS_KEY')

if (!accessKey) {
  console.error('Missing VITE_WEB3FORMS_ACCESS_KEY. Configure the contact form before building or deploying.')
  process.exit(1)
}
