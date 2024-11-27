# Chatbot 🧠💬

¡Bienvenido a mi proyecto **Chatbot**! Este es un chatbot desarrollado con **Next.js** y componentes dinámicos, diseñado para interactuar de manera inteligente con los usuarios mientras implementa una interfaz moderna y atractiva.

---

## 🚀 **Características**

- **Framework Moderno**: Construido con **Next.js**, una plataforma poderosa para aplicaciones web rápidas y escalables.
- **Componentes reutilizables**: Uso de componentes como `Avatar`, `Textarea` y `Button` para un diseño limpio y consistente.
- **Interacción Dinámica**: Permite a los usuarios enviar y recibir mensajes en tiempo real con una interfaz fluida.
- **Estilización Modular**: Utiliza **Tailwind CSS** para estilos personalizados y altamente configurables.
- **Accesibilidad**: Incluye elementos accesibles como `sr-only` para garantizar la compatibilidad con lectores de pantalla.
- **Scalable Design**: La estructura está optimizada para incorporar funcionalidades futuras como integraciones API o almacenamiento de datos.

---

## 📂 **Estructura del Proyecto**

```plaintext
📦 chatbot
 ┣ 📂 components
 ┃ ┣ 📂 ui
 ┃ ┃ ┣ 📜 avatar.tsx       # Componente de avatar con imagen y fallback
 ┃ ┃ ┣ 📜 button.tsx       # Componente de botón reutilizable
 ┃ ┃ ┗ 📜 textarea.tsx     # Componente de textarea para entrada de texto
 ┃ ┗ 📂 component
 ┃   ┗ 📜 chatbot.tsx      # Componente principal del chatbot
 ┣ 📂 pages
 ┃ ┗ 📜 index.tsx          # Página inicial que integra el chatbot
 ┣ 📜 tailwind.config.js    # Configuración de Tailwind CSS
 ┣ 📜 package.json          # Dependencias y scripts del proyecto
 ┗ 📜 README.md             # Este archivo 🎉
