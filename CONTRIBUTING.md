# Contributing

The goal is to make contributing to cattleya-ui as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features

## About this repository

This repository is a monorepo.

- Using [npm](https://docs.npmjs.com) and [`workspaces`](https://docs.npmjs.com/cli/using-npm/workspaces) for development.
- Using [Storybook](https://storybook.js.org) to develop and showcase components.

## Setup

1. Use Node.js 22 (`nvm use` if you have `.nvmrc`).
2. Install dependencies from the repo root:

```bash
npm install
```

3. Start Storybook:

```bash
npm run storybook
```

## Structure

This repository is structured as follows:

```
packages
├── react
└── ts-config
```

| Path                         | Description                                           |
| ---------------------------- | ----------------------------------------------------- |
| `packages/react`             | The `cattleya-ui` component library.                  |
| `packages/react/__stories__` | Storybook stories for each component.                 |
| `packages/ts-config`         | Shared TypeScript configs (`@cattleya-ui/ts-config`). |

## Pull requests

Pull requests are the best way to propose changes to the codebase. Pull requests are actively welcome:

1. Fork the repo and create your branch from `main`.
2. If you've changed APIs, update the documentation.
3. Ensure the test suite passes.
4. Issue that pull request.

## Report bugs using [GitHub's issues](https://github.com/whosramoss/cattleya-ui/issues)

GitHub issues are used to track public bugs. Report a bug by [opening a new issue](https://github.com/whosramoss/cattleya-ui/issues/new)!

## Use a Consistent Coding Style

- Use 2 spaces for indentation rather than tabs
- You can try running `npm run format` for style unification

## What is Accepted

Contributions are welcome for:

- Fixing bugs and issues
- Enhancing existing features
- Adding better error handling
- Improving docs

## What is Not Accepted

Contributions will not be accepted for:

- Adding new frameworks
- Changing the core architecture without discussion

## Development Process

1. Create a new branch for your feature/fix
2. Make your changes
3. Add tests if applicable
4. Update docs
5. Submit a pull request
