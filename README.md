# LeazyLoad - React + Vite Setup

This project is a minimal setup that integrates **React** with **Vite** to offer a fast, efficient, and modern development environment with built-in support for **Lazy Loading** and **Suspense**.

---

## Table of Contents

- [Project Setup](#project-setup)
- [Installation](#installation)
- [Usage](#usage)
- [Lazy Loading & Suspense](#lazy-loading--suspense)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)

---

## Project Setup

LeazyLoad is designed to provide a fast and efficient React development experience using **Vite** and includes **Lazy Loading** and **Suspense** for optimized performance.

### Features:

- **React** for building UI components.
- **Vite** as a fast build tool.
- Built-in support for **Lazy Loading** and **Suspense** for better performance in large apps.
- **ESLint** configuration to ensure code quality.

---

## Installation

To get started with this project, follow the steps below.

### 1. Clone the repository:

```bash
git clone https://github.com/Mahmudulislamshuvo/-Lazy-Loaing-
```

### 2. Install dependencies:

Navigate to the project directory and install the required dependencies using **npm** or **yarn**.

```bash
cd leazyload
npm install
```

Or, if you prefer **yarn**:

```bash
cd leazyload
yarn install
```

### 3. Start the development server:

```bash
npm run dev
```

This will start the development server, and you can view the app by going to `http://localhost:3000`.

---

## Usage

### Lazy Loading with React

This project uses **React.lazy** for **Lazy Loading** components. Here's how you can use it:

```javascript
const LazyComponent = React.lazy(() => import("./LazyComponent"));
```

### Suspense for Loading States

Wrap your lazy-loaded components with the `<Suspense>` component to show fallback UI while waiting for them to load.

```javascript
import React, { Suspense } from "react";

const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

- **Fallback UI**: While the `LazyComponent` is loading, a "Loading..." message will be displayed until it is fully loaded.

---

## Lazy Loading & Suspense

### **Lazy Loading**:

Lazy loading ensures that the application only loads components when they are needed, thus reducing the initial load time and improving performance. In this project, **React.lazy()** is used for lazy loading.

- **Example:**

  ```javascript
  const LazyComponent = React.lazy(() => import("./LazyComponent"));
  ```

### **Suspense**:

**Suspense** is used to manage loading states in React. It works well with **React.lazy()**, allowing the user to see a loading indicator while the component is being fetched.

- **Usage**:

  ```javascript
  <Suspense fallback={<div>Loading...</div>}>
    <LazyComponent />
  </Suspense>
  ```

---

## Available Scripts

In the project directory, you can run the following commands:

### 1. `npm run dev`:

This starts the development server and opens the app at `http://localhost:3000`.

### 2. `npm run build`:

Builds the project for production to the `dist` folder. It optimizes the app for the best performance.

### 3. `npm run preview`:

Preview the production build of the app.

---

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **Vite**: A build tool that focuses on speed and performance for modern web applications.
- **ESLint**: A tool for identifying and reporting on patterns in JavaScript code.
- **React.lazy()**: A method used for lazy loading components.
- **Suspense**: A component in React for handling loading states during lazy loading.

---

## License

This project is licensed under the MIT License.

---
