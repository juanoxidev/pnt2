instalar Gh-pages

- npm i gh-pages -D

Agregar base: a vite.config.js

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/el-nombre-de-tu-repositorio/",
});
```

Agregar script deploy: gh-pages -d dist

```
"scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "deploy": "gh-pages -d dist"
}

```

Crear el repositorio en github, inicar git, agregar remoto, pushear.

Ejecutar en consola

```
npm run build
npm run deploy

```
