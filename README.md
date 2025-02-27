# Brasil Tendas

Site institucional para empresa especializada na fabricação e locação de tendas para eventos.

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- [Vite](https://vitejs.dev/)
- [React](https://reactjs.org)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Router DOM](https://reactrouter.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Headless UI](https://headlessui.dev/)
- [PWA (Progressive Web App)](https://web.dev/progressive-web-apps/)

## 📱 Funcionalidades PWA

Este projeto agora inclui suporte a Progressive Web App (PWA), permitindo:

- Instalação como aplicativo em dispositivos móveis e desktop
- Funcionalidade offline parcial
- Cache de recursos para carregamento mais rápido
- Notificações de atualização de versão

### Testando a funcionalidade PWA

Para testar as funcionalidades PWA:

1. Execute `npm run build` para gerar o build de produção
2. Sirva o build usando um servidor HTTP, por exemplo: `npm run preview`
3. Acesse a aplicação em um navegador compatível com PWA (Chrome, Edge, Safari, etc.)
4. O navegador deve mostrar a opção de instalação na barra de endereços ou no menu
5. Em dispositivos móveis, você verá um banner sugerindo a instalação

### Ícones PWA

Os ícones PWA devem ser adicionados em `public/icons/`. Veja o arquivo `public/icons/README.md` para mais informações.

## 💻 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/brasiltendas.git
cd brasiltendas
```

2. Instale as dependências:
```bash
npm install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

4. Acesse o site em seu navegador:
```
http://localhost:5173
```

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

## 👨‍💻 Desenvolvedor

Desenvolvido por [Seu Nome](https://github.com/seu-usuario)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
