# AcolheRua-API 🤝🏿

Esse projeto foi pensado para resolver um problema social e de saúde pública muito grave que são pessoas em situação de rua.
Além de não terem direito ao básico que seria a moradia, também não existe suporte das prefeituras para conceder o direito à alimentação e vestimenta. Isso é feito pela população.
&nbsp;

## Solução

Eu pensei em criar uma aplicação junto a uma página web para listar as organizações com os campos *número de telefone*, *e-mail*, *localização* e *descrição do trabalho voluntário* que oferecem esse tipo de auxílio para que a população consiga achar essas organizações de forma mais fácil e assim mandar doações.

## Para visualizar a documentação da API 🗎

🔗[Documentação com todas as funcionalidades da API](https://acolherua.onrender.com/documentation/#/)

## Instalar dependências
```
$ npm i
```

Para copiar as variáveis das credenciais do `.env.example` para o `.env`:

```
$ cp .env.example .env
```

Para adicionar a credencial do banco de dados no `.env`, você precisa logar no 
**MongoAtlas**, cria seu banco de dados, pegar a URI do seu projeto e adicionar à variável:
```
DB_MONGO=""
```

## Para inicializar projeto: 

```
$ npm start
```

## Para inicializar teste de recebimento de dados no **MongoDB Atlas**

```
$ npm run test
```

