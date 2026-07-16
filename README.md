<h1>
  <p align="center">
    <img src="./imgs/android-chrome-192x192.png" alt="logo" width="128">
    <br>cattleya-ui
  </p>
</h1>

<p align="center">
 Component library for building applications that flourish.
  <br /> <br />
  <a href="#how-to-install">Install</a>
  ·
  <a href="#usage">Usage</a>
  ·
  <a href="#components">Components</a>
</p>

## How to install

```bash
npm install @cattleya-ui/react
```

## Usage

Import the design system styles once in your app entry:

```tsx
import '@cattleya-ui/react/styles.css'
```

Components live under `@cattleya-ui/react` and follow a copy-friendly source style — browse them in Storybook, then bring the ones you need into your project.

```tsx
import { Button } from './components/button'

export function Example() {
  return <Button variant="default">Button</Button>
}
```

Wondering why components aren't imported directly from the package? See [Why copy-paste instead of a direct import](./docs/copy-paste-model.md).

## Components

| Component      | Description                                                    |
| -------------- | -------------------------------------------------------------- |
| `Accordion`    | Expandable sections with open/close animation                  |
| `Avatar`       | Image or fallback initials                                     |
| `Badge`        | Compact status label (`default`, `outline`, …)                 |
| `Button`       | Action button (`default`, `outline`, `success`, `destructive`) |
| `Card`         | Content surface with border and padding                        |
| `Checkbox`     | Animated checked / indeterminate states                        |
| `Dialog`       | Modal overlay with title, description, and footer              |
| `DropdownMenu` | Animated menu with trigger and items                           |
| `Input`        | Text field with animated placeholder                           |
| `Spinner`      | Loading indicator                                              |
| `Switch`       | Toggle control                                                 |
| `Tooltip`      | Contextual hint on hover/focus                                 |

### Design tokens

Colors (base / semantic / component), spacing, radius, and typography are documented in Storybook under **Design System**.

## TypeScript

Components are written in TypeScript (`.tsx`). Types ship with the source — no separate `@types` package required.

## Contributing

Read the [contributing guide](./CONTRIBUTING.md).

## License

© Licensed under the [MIT LICENSE](./LICENSE).
