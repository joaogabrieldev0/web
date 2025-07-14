# NLW Agents - Web 🚀

## Descrição
Projeto web desenvolvido com foco em organização, escalabilidade e boas práticas modernas de desenvolvimento front-end.

---

## 🛠️ Tecnologias e Bibliotecas Utilizadas

- **Vite**: Ferramenta de build e desenvolvimento rápido para projetos front-end.
- **React**: Biblioteca para construção de interfaces de usuário.
- **React Router DOM** (`react-router-dom`): Gerenciamento de rotas SPA.
- **React Query** (`@tanstack/react-query`): Gerenciamento de estado assíncrono e cache de dados de requisições.
- **TailwindCSS**: Framework utilitário para estilização CSS.
- **Shadcn UI**: Componentes de UI prontos e customizáveis.
- **Class Variance Authority** (`class-variance-authority`), **clsx** e **tailwind-merge**: Utilitários para manipulação de classes CSS.
- **Lucide React**: Ícones SVG para React.
- **Biome** e **Ultracite**: Ferramentas para lint, formatação e análise de código.
- **TypeScript**: Tipagem estática para JavaScript.
- **Vite Plugin React**: Integração do React com o Vite.

---

## 🗂️ Estrutura e Padrões de Projeto

- **Componentização**: Uso de componentes reutilizáveis, especialmente em `src/components/ui/`.
- **Hooks**: Utilização de hooks do React e React Query para lógica de estado e efeitos colaterais.
- **Roteamento**: Separação de páginas em `src/pages/` e gerenciamento de rotas com React Router.
- **Estilização utilitária**: TailwindCSS para estilos rápidos e consistentes.
- **Organização por domínio**: Separação de utilitários em `src/lib/` e páginas em `src/pages/`.
- **Provider Pattern**: Uso de providers para contexto global (ex: QueryClientProvider).
- **Boas práticas de tipagem**: Uso extensivo de TypeScript para segurança e clareza.

---

## ▶️ Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

---

## ℹ️ Observações

- Para mais detalhes sobre as bibliotecas, consulte o arquivo `bibliotecas.txt`.
- O projeto segue padrões modernos de desenvolvimento, priorizando legibilidade, reuso e facilidade de manutenção. 