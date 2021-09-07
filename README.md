# Api-rest(CineMoon)

Repositorio da api-rest de um projeto sobre cinema chamado de CineMoon com o objetivo de documentar MVC e algumas ultilizações de algumas bibliotecas bases de Api-Restful. 

### Clonar o projeto:

Clicar em 'Code' e copiar o link http do projeto;

Após o link clonado utilizar o comando abaixo:

```
  git clone link-copiado
```

### Conectar ao banco mysql:
Este projeto utiliza o dotenv, então há necessidade de criar o arquivo .env na raiz do projeto, ou seja fora da pasta src. Segue a baixo o conteudo do .env:

```
  DB_HOST=localhost
  DB_USER={'Colocar o user do seu mysql'}
  DB_PASS={'Colocar a senha desse user'}
  DB={'nome do schema criado'}
```

Trocar o conteudo das chaves( { } ) incluindo elas por o acesso do seu mysql.Note que estamos rodando localmente.

### Rodar o projeto:
Antes de startar o projeto é necessarios instalar as suas dependencias, para isso é necessario o comando a baixo:

```
  npm install
```
Dependencias prontos é a hora de rodar o projeto, segue abaixo o comando:

```
  npm start
```
