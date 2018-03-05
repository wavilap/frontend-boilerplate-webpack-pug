# Frontend Boilerplate

Template Frontend para proyectos web usando **Sass**, **Pug**, **ES6(ReactJS)** y **Webpack**. Antes de continuar con el paso de **Instalación**, instalar [NodeJS](https://nodejs.org/es/) para el manejo de las dependencias.

## Instalación
Para el uso del template, instalar por primera y única vez en tu computador las siguientes dependencias de manera global: webpack, webpack-cli, node-sass y yarn; esto se logran con el siguiente comando:

```
npm install webpack webpack-cli node-sass yarn -g
```

En caso de usar S.O. Linux o MacOSX anteponer **sudo** al comando de arriba.

Clonar el template en tu carpeta principal de desarrollo. Dentro de tu template ya clonado y por consola, instalar las dependencias (desarrollo/producción) del proyecto con el siguiente comando:

```
yarn install // Instala las dependencias
```

Para levantar/visualizar el proyecto en tu navegador, usar uno de los siguientes comandos.

```
npm run build:dev // Levanta un servidor, cambios realtime. Colocar en el navegador http://localhost:8080
npm run build:local // Crea la carpeta dist con los archivos finales
npm run build:prod // Elimina/crea la carpeta dist, y deja listo los archivos para producción
```
