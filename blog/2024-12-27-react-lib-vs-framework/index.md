---
slug: react-lib-vs-framework
title: React library VS framework
tags: [React, Next]
authors: [wenyi]
---

### Why using framework

While React can be used without a framework, most applications and websites eventually require solutions for common challenges like **bundling**, **compiling**, **code-splitting**, **routing**, **data fetching**, and **HTML generation**. These issues aren’t unique to React but apply to all UI libraries. Using a framework from the start allows you to begin working with React more efficiently and avoids the need to create your own framework down the line.

<!-- truncate -->


### Next.js

:::info
The Next.js team has been collaborating with React team in researching, developing, integrating, and testing framework-agnostic bleeding-edge React features like React Server Components.
:::

#### Routing
A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.
#### Rendering
Client-side and Server-side Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.
#### Data Fetching
Simplified data fetching with async/await in Server Components, and an extended `fetch` API for request memoization, data caching and revalidation.
#### Styling
Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS
#### Optimizations
Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.
#### TypeScript
Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.