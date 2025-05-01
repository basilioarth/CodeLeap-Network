# 🌐 **CodeLeap Network**

---

## 📘 **Sobre o Projeto**

A **CodeLeap Network** é uma aplicação desenvolvida para o [processo seletivo da CodeLeap](https://github.com/frontendbr/vagas/issues/8283). Trata-se de uma rede social desenvolvida em React, projetada para permitir que os usuários criem, editem e excluam posts de maneira intuitiva. Ela se integra a uma API fornecida pela CodeLeap para gerenciar os posts.

---

## 📂 **Arquitetura dos Diretórios**

A estrutura de pastas do projeto é organizada da seguinte forma:

```
CodeLeap-Network/
├── public/                # Arquivos estáticos
├── src/                   # Código-fonte da aplicação
│   ├── components/        # Componentes reutilizáveis
│   ├── http/              # Serviços de API
│   ├── interfaces/        # Definições de tipos/interfaces
│   ├── pages/             # Páginas da aplicação
│   ├── App.tsx            # Componente principal da aplicação
│   ├── global.css         # Estilos globais
│   ├── main.tsx           # Ponto de entrada da aplicação
│   └── vite-env.d.ts      # Declarações de tipos
└── ...                    # Arquivos de configuração e dependências
```

---

## 🛠️ **Pré-requisitos**

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados:

- [Node.js](https://nodejs.org/) (versão 20.x ou superior)
- [pnpm](https://pnpm.io/installation) ou [Yarn](https://yarnpkg.com/)
- Um editor de código, como [Visual Studio Code](https://code.visualstudio.com/)

---

## ⚙️ **Instalando Dependências**

Siga os passos abaixo para configurar o ambiente de desenvolvimento:

1. Clone o repositório:
   ```bash
   git clone https://github.com/basilioarth/CodeLeap-Network.git
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd CodeLeap-Network
   ```

3. Instale as dependências:
   ```bash
   pnpm install
   ```
   ou, se preferir usar Yarn:
   ```bash
   yarn install
   ```

---

## 🚀 **Iniciando a Aplicação**

Para iniciar a aplicação em modo de desenvolvimento, execute o seguinte comando:

```bash
pnpm run dev
```
ou, se estiver usando Yarn:

```bash
yarn dev
```

A aplicação estará disponível em `http://localhost:5173`.

Para gerar uma build de produção, utilize:

```bash
pnpm run build
```

A build será gerada na pasta `dist`, pronta para ser deployada.

---

## 🌍 **Acessando o Deploy da Aplicação**

Caso você deseje acessar diretamente a versão já deployada da aplicação, basta clicar no link abaixo:

🔗 [https://code-leap-network-omega.vercel.app/](https://code-leap-network-omega.vercel.app/)

---

### 🎉 Conclusão

Parabéns! Agora você está pront@ para explorar a **CodeLeap Network** 💻✨.