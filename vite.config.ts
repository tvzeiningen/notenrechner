import { defineConfig, type Plugin, type ResolvedConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { getProjectLicenses, type ILicense } from "generate-license-file";

function licenses(): Plugin {
  const virtualModuleId = 'virtual:licenses'
  const resolvedVirtualModuleId = '\0' + virtualModuleId
  const licenses: ILicense[] = []

  return {
    name: 'licenses-plugin',
    resolveId(id: string) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    async configResolved(config: ResolvedConfig) {
      const packageJson = '/package.json'
      config.logger.info(packageJson)
      const l = await getProjectLicenses(config.envDir + '/package.json', {
        exclude: ["@esbuild"], // avoid getProjectLicenses getting stuck in missing directory
      })
      licenses.push(...l)
    },
    load(id: string) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${JSON.stringify(licenses)}`
      }
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    licenses(),
  ],
})
