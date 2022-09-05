//versão mais leve do node 
FROM node:alpine 

//diretorio 
WORKDIR /usr/app 

//copia os arquivos json para maquina local 
COPY package*.json ./

RUN npm install

COPY . . 

EXPOSE 8087

CMD ["npm", "start"]