# NLW Agents - Web

Projeto desenvolvido durante o **NLW Agents #20** com foco em organização, escalabilidade e uso de tecnologias modernas no front-end.

---

## 🛠️ Tecnologias e Bibliotecas

- **Vite**: Ferramenta para automação e otimização do desenvolvimento.
- **React**: Biblioteca para construção de interfaces.
- **TypeScript**: Tipagem estática para maior segurança.
- **React Router DOM**: Gerenciamento de rotas SPA.
- **@tanstack/react-query**: Gerenciamento de estado assíncrono e cache.
- **TailwindCSS**: Estilização utilitária e responsiva.
- **Shadcn UI**: Componentes de UI acessíveis e customizáveis.
- **Lucide React**: Ícones SVG modernos.
- **Biome & Ultracite**: Lint, formatação e análise de código.
- **Class Variance Authority, clsx, tailwind-merge**: Utilitários para manipulação de classes CSS.

---

## ⚙️ Funcionalidades

- Criação de salas para perguntas e respostas
- Envio de perguntas (texto e áudio)
- Listagem de perguntas em tempo real
- Interface responsiva e moderna
- Componentização e reutilização de UI

---

## 🗂️ Estrutura Detalhada do Projeto

```
├── public/                  # Arquivos estáticos e assets
├── src/
│   ├── app.tsx              # Configuração principal do app e rotas
│   ├── main.tsx             # Ponto de entrada da aplicação React
│   ├── index.css            # Estilos globais (Tailwind)
│   ├── components/
│   │   ├── ui/              # Componentes de UI reutilizáveis (botão, card, input, etc)
│   │   ├── room-list.tsx    # Listagem de salas
│   │   ├── question-list.tsx# Listagem de perguntas
│   │   ├── create-room-form.tsx # Formulário de criação de sala
│   │   ├── question-form.tsx    # Formulário de envio de pergunta
│   │   └── question-item.tsx    # Item individual de pergunta
│   ├── pages/
│   │   ├── create-room.tsx      # Página de criação de sala
│   │   ├── room.tsx             # Página de sala individual
│   │   └── record-room-audio.tsx# Página de gravação de áudio
│   ├── http/
│   │   ├── use-rooms.ts         # Hook para buscar salas
│   │   ├── use-create-room.ts   # Hook para criar sala
│   │   ├── use-room-questions.ts# Hook para buscar perguntas
│   │   ├── use-create-question.ts# Hook para criar pergunta
│   │   └── types/               # Tipos TypeScript para as requisições/respostas
│   ├── lib/
│   │   ├── dayjs.ts             # Utilitário para datas
│   │   └── utils.ts             # Funções utilitárias
│   └── vite-env.d.ts            # Tipagens globais do Vite
├── package.json                # Dependências e scripts do projeto
├── vite.config.ts              # Configuração do Vite
├── tsconfig*.json              # Configurações do TypeScript
└── README.md                   # Documentação do projeto
```

**Principais pastas/arquivos:**
- `components/`: Componentes reutilizáveis e de domínio.
- `pages/`: Páginas principais da aplicação.
- `http/`: Hooks customizados para requisições e tipos de dados.
- `lib/`: Utilitários e helpers.
- `public/`: Arquivos estáticos.
- `main.tsx`/`app.tsx`: Bootstrap e configuração de rotas/contextos.

---

## 🗂️ Padrões de Projeto

- **Componentização**: Componentes reutilizáveis e desacoplados.
- **Hooks customizados**: Lógica de dados e efeitos colaterais isolados.
- **Roteamento**: Separação clara entre páginas e navegação.
- **Estilização utilitária**: TailwindCSS para agilidade e consistência visual.
- **Tipagem forte**: Uso extensivo de TypeScript para segurança e clareza.

---

## ▶️ Como rodar o projeto

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie o ambiente de desenvolvimento:
   ```bash
   npm run dev
   ```

Acesse via navegador em: [http://localhost:5173](http://localhost:5173)

---


