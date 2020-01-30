

<img src="./src/images/blog-logo.png" height="150" align="center" />

<h1 align="center">
  Cleberson Jr. Blog
</h1>

Blog pessoal construído com Gatsby para compartilhar minhas experiências e conhecimentos.





## :wrench: Instalação e Uso

### Pre-requisitos

Para funcionar, é necessário que tenha [Node.js](https://nodejs.org/) instalado em sua máquina. 

### Instalação

Baixe o Gatsby CLI globalmente com NPM na sua linha de comandos favorita (PowerShell, Bash, CMD, ...):

```bash
npm install -g gatsby-cli
```

Copie o repositório para sua máquina, podendo ser de duas formas:

- Baixando pelo GitHub.

- Clonando-o:

  ```bash
  git clone https://github.com/cleberson-dev/cleberson-blog.git
  ```

Instale as dependências necessárias com NPM:

```bash
npm install
```

Dentro do diretório do repositório, execute o script para:

- Gerar todos os arquivos estáticos do blog:

  ``````bash
  gatsby build
  ``````

- Entrar em modo de desenvolvimento (com Hot Reloading e GraphiQL):

  ```bash
  gatsby develop
  ```

E seja feliz!





## :page_with_curl: Sobre o Blog
É um blog pessoal, que objetiva compartilhar aprendizados, conhecimentos, experiências, pensamentos que tenho durante não somente meus estudos (com Computação, Desenvolvimento, Web), mas também em qualquer outro assunto. Tem foco na área de TI, porém ele tentará ser de domínio mais amplo.

Os posts seguem uma estrutura em pastas para conseguirem serem mostrados e definidos como postagens dentro do blog:

- Devem estar dentro do diretório: `/posts` (Relativo ao diretório do repositório)

- Cada nova postagem deve estar em seu próprio diretório relativo ao `/posts`, com o nome do diretório sendo usado como rota (ex. diretório `meu-novo-post` terá uma rota `www.example.com/meu-novo-post`)

- O conteúdo da postagem deve está em um arquivo markdown `.md` com o nome de `content.md` na sua respectiva página.

- A capa da postagem estará como arquivo de nome `cover` também na pasta da postagem.

- Portanto, a estrutura é a seguinte:

  ```
  posts/
  	meu-post/
  		content.md
  		cover.jpg
  	meu-outro-post/
  		content.md
  		cover.png
  	...
  ```





## 🔨 Construído com

- [GatsbyJS](https://www.gatsbyjs.org/) - Framework baseado em React para construção de sites rápidos, com geração do site ocorrendo de forma estática.
- [React.js](https://reactjs.org/) - UI Framework (Front-end)
- [Javascript](https://www.javascript.com/) - Linguagem de Programação





## :eyes: Observações 

- O Blog está na sua versão inicial, portanto será mantido ocasionalmente, com adição de novas features, expansão do design (é feito seguindo a prática Mobile-First), correção de inconsistências, etc...





## ✍️ Contribuidores

- [@cleberson-dev](https://github.com/cleberson-dev/) - Ideia e Trabalho Inicial