# Liv Dot

Frontend application built with React, TypeScript, Vite, TanStack Router, TanStack Query, and Tailwind CSS.

## Prerequisites

This repository currently includes a `pnpm-lock.yaml`, but the app can also be run with other package managers if your colleague prefers `npm` or `yarn`.

If using `pnpm`, the version pinned in `package.json` is:

```bash
pnpm@10.33.0
```

If `pnpm` is not installed, follow the official installation guide:

`https://pnpm.io/installation`

## Clone The Project

Clone the repository and move into the project folder:

```bash
git clone <repository-url>
cd liv-dot
```

## Install Dependencies

Install the project dependencies with any of the following:

```bash
pnpm install
```

```bash
npm install
```

```bash
yarn install
```

## Run The App Locally

Start the development server with the matching package manager:

```bash
pnpm dev
```

```bash
npm run dev
```

```bash
yarn dev
```

Vite will print the local URL in the terminal, typically:

```bash
http://localhost:5173
```

Open that URL in the browser.

## Node Version Warning

Vite `8` officially requires Node.js `20.19+` or `22.12+`.

If you use an older version such as `20.16.0`, you may see this warning:

```bash
You are using Node.js 20.16.0. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version.
```

The app may still load, but that Node.js version is not officially supported.
