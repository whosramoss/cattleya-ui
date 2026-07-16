<h1>
  <p align="center">
    <img src="https://raw.githubusercontent.com/whosramoss/cattleya-ui/main/imgs/android-chrome-192x192.png" alt="logo" width="128">
    <br>cattleya-ui
  </p>
</h1>

<p align="center">
  Component library for building applications that flourish.
</p>

## Installation

```bash
npm install cattleya-ui
```

## Usage

Import the design system styles once in your app entry:

```tsx
import 'cattleya-ui/styles.css'
```

Components follow a copy-friendly source style — browse them in this package (`src/components`) or on [GitHub](https://github.com/whosramoss/cattleya-ui/tree/main/packages/react/src/components), then bring the ones you need into your project:

```tsx
import { Button } from './components/button'

export function Example() {
  return <Button variant="default">Button</Button>
}
```

Wondering why components aren't imported directly from the package? See [Why copy-paste instead of a direct import](https://github.com/whosramoss/cattleya-ui/blob/main/docs/copy-paste-model.md).

## Links

- [Repository](https://github.com/whosramoss/cattleya-ui)
- [Contributing guide](https://github.com/whosramoss/cattleya-ui/blob/main/CONTRIBUTING.md)
- [Changelog](https://github.com/whosramoss/cattleya-ui/blob/main/packages/react/CHANGELOG.md)
- [Report a bug](https://github.com/whosramoss/cattleya-ui/issues)
