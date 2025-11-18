# Metrc Strain Table

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

This project is a robust, modern frontend boilerplate configured using **Vite**. It includes the essential tools for a professional application:

* **React 18** and **TypeScript** (TSX)
* **Material UI (MUI)** for comprehensive UI components
* **Redux Toolkit (RTK)** for predictable state management
* **AG Grid React** for powerful, enterprise-grade data tables
* **ESLint** configured for code quality and enforcing **ES6 Fat Arrow Components**
* **Font Awesome (FA)** for external icons

---

## 1. 🏗️ Project Setup and Dependencies

Start by creating the project structure and installing all required packages.

### Initialize Project and Install Libraries

```bash
# 1. Create the project using Vite's React + TypeScript template
npm create vite@latest react-full-boilerplate -- --template react-ts

# 2. Navigate into the new project directory
cd react-full-boilerplate

# 3. Install base dependencies
npm install

# 4. Install Material UI (MUI) packages
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

# 5. Install Font Awesome (FA) packages
npm install --save \
  @fortawesome/fontawesome-svg-core \
  @fortawesome/react-fontawesome \
  @fortawesome/free-solid-svg-icons

# 6. Install Redux Toolkit (RTK) packages
npm install @reduxjs/toolkit react-redux

# 7. Install AG Grid React and CSS styles
npm install ag-grid-react ag-grid-community

