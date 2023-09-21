# Usa una imagen de Node.js version LTS
FROM node:lts

# Establecemos el directorio de trabajo en /app
WORKDIR /app

# Copiamos el package.json y el package-lock.json a /app
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos el resto de archivos a /app
COPY . .

# Exponemos el puerto 3000 porque es el que usa mi labsito
EXPOSE 3000

# Ejecutamos el comando npm run start
CMD [ "npm", "run", "start" ]