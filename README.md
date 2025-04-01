# AI-Powered React Starter Template with ShadCN UI

A minimalist, elegant starter template for building AI-powered applications with React, TypeScript, Vite, and ShadCN UI.

> **Note**: This is a template repository. When you use it, you'll create your own copy that's completely separate from the original. The original template is protected and cannot be modified directly.

![Template Preview](https://i.imgur.com/YourScreenshotURL.png)

## Features

- ⚡️ [Vite](https://vitejs.dev/) - Lightning fast frontend tooling
- ⚛️ [React 18](https://reactjs.org/) - A JavaScript library for building user interfaces
- 🔤 [TypeScript](https://www.typescriptlang.org/) - For type safety
- 🎨 [TailwindCSS](https://tailwindcss.com/) - A utility-first CSS framework
- 🧩 [ShadCN UI](https://ui.shadcn.com/) - Beautiful, accessible components
- 📱 Responsive design - Works on all devices
- 🤖 AI-powered prompt interface - Just type and build!

## Getting Started

### Use This Template

The recommended way to use this template is through GitHub's template feature:

1. Click the green "Use this template" button at the top of this page
2. Select "Create a new repository"
3. Choose a name for your project
4. Your new repository will be created with a copy of all the template files

This creates your own independent copy of the template that you can modify freely. The original template remains unchanged and protected.

> **Important**: Do not clone or fork this repository unless you specifically want to contribute to the template itself. Use the "Use this template" button instead.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## ShadCN UI Components

All ShadCN UI components have been pre-installed in the `src/components/ui` directory, ready to use in your application. 

### Using Components

Import components from their respective files:

```jsx
import { Button } from './components/ui/button'
import { Card } from './components/ui/card'
import { Input } from './components/ui/input'
```

## Project Structure

```
src/
├── components/
│   └── ui/          # ShadCN UI components
├── lib/
│   └── utils.ts     # Utility functions
├── App.tsx          # Main application component
├── index.css        # Global styles including Tailwind
└── main.tsx         # Entry point
```

## Customization

### Tailwind Configuration

The ShadCN UI components use a consistent color scheme defined in `tailwind.config.js`. You can customize the colors and other theme variables there.

### Adding More ShadCN Components

If you need additional components that aren't included, you can add them using the ShadCN CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

## License

MIT

## Acknowledgements

- [ShadCN UI](https://ui.shadcn.com/) - For the beautiful component library
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework
- [Vite](https://vitejs.dev/) - For the blazing fast frontend tooling 