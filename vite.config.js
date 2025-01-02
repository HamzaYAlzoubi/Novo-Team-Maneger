import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  return {
    base: mode === 'production' ? '/hamzayalzoubi.github.io/Novo-Team-Maneger' : '/',
  }
})
