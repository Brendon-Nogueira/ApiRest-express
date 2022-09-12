# ApiRest-express

Neste trabalho foi desenvolvida uma API, com o intuito de calcular todo o semestre, de acordo com os professores de uma Universidade, que terá um retorno das distribuições
das aulas de acordo com o período ministrado.

ENDPOINT: localhost:8087/api/v1/classes
 
 A api, espera os seguintes parâmetros em formato (JSON):
  -year : campo numerico ex: 2022
  -semester : sendo 1 ou 2 indicação do primeiro e segundo semestre informado 
  -days : um array contendo todos os dias da semana.
  
  DockerFile (gerando imagem) 
   verifique a versão do docker instalado command : docker -v
   verifique se possui o docker-compose instalado command: docker-compose -v
   
   gerando imagem command : docker build -t nomecontainer . (espaço ponto usado para verificar a localização do dockerfile) 
   rodando aplicação command : docker run -p 8087:8087 -d nomecontainer(quando for acessado a porta 8087 em seu navegador ele ira chamar também a porta configurada para seu container)
   verifique se esta rodando utilizando o command : docker ps
 
  Instale Nodemon : npm install nodemon 
  
  Docker-compose orquestrador de containers (quando houver alteração em algum arquivo, ira espelhar uma pasta pra dentro do container utilizando o volume):
  estrutura 
     version: ""  versão usada ex: 3
     services: 
      app:      "ou dockernode chame como quiser"
      build: . "onde dockerfile está localizado, na raiz então se coloca ponto"
      command: npm start "comando para rodar aplicação após up"
      ports: 8087:8087  "redirecionamento de portas"
 
