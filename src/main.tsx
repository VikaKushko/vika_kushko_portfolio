import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.js'
import "./i18n/i18n.ts";

// Глобальные стили
import "./styles/reset.css";      // сброс отступов браузера
import "./styles/variables.css";  // CSS-переменные
import "./styles/global.css";     // общие стили для body, заголовков и т.д.
import "./styles/layout.css";     // сетка и контейнеры

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
