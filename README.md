# Teste de Backend

Olá Dev! Tudo bem?

Nós estamos sempre em busca de profissionais interessantes e interessados, com boa capacidade de aprendizado, adaptação e principalmente bom senso!

Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.

Vamos ao teste!

## Desafio Pokémon Go!

Sua missão é importar os dados do Pokemon Go, que estão no excel, e criar uma API usando NodeJS para que possamos consumir estes dados de maneira prática, rápida e automatizada.

Esta API deverá seguir o mínimo de práticas RESTful e conter listagens, busca, paginação e filtros. Fique à vontade para decidir quais filtros são mais interessantes.

## Consigo fazer?

Consegue sim! Só precisa saber (ou aprender agora) um pouco sobre as seguintes tecnologias:
- Conceitos de API RESTful
- Modelagem de dados
- NodeJS
- Algum banco de dados, por exemplo, MySQL, SQL Server, MongoDB, etc...
- Git

## Por onde começo?

Primeiramente, você pode fazer um fork desse repositório aqui, para sua conta do Github, depois disso crie uma branch nova com o seu nome (ex: nome_sobrenome), para podermos indentificá-lo.

Após terminar o desafio, você pode solicitar um pull request para a branch master do nosso repositório. Vamos receber e fazer a avaliação de todos.

## Só isso?

Só! Mas se quiser fazer a diferença, tente implementar um pouco de TDD e utilizar docker para execução do projeto.

Boa sorte! :)

## Importação
No workbench do sql importe o arquivo Pokemon-go.csv(demora um pouco)
a estrutura pode ser igual a da table.sql


## O que os endpoints fazem ?
1 busca a tabela completa retornando todos os pokemons
2 Busca pokemons por pagina offset(1)
3 Busca os pokemons pelo nome
4 Busca os pokemon por tipo
5 Busca os pokemons por ambos os tipos.

## Para rodar a API:
https://github.com/mlt3800/tests_dev_pokemon/

npm install -> Para as instalar as dependencias
criar um arquivo .env com as informaçoes do seu banco de dados
ex:
 DB_HOST: ,
    DB_USER: ,
    DB_PASSWORD: ,
    DB_DATABASE: ,
  e usar o:
  npm run dev -> Para o servidor
  
  ## Link da documentação:
  [Postman](https://documenter.getpostman.com/view/22350515/2s93XzyiDn)
  
  ## Link do render:
  [Render](https://pokemons-0pva.onrender.com)

## 🛠️ As tecnologias usadas:
* [nodeJS]
* [express]
* [dotenv]
* [cors]
* [knex]
* [typscript]
* [javaScript]
* [mysql]



