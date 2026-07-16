# Why copy-paste instead of a direct import

`npm install cattleya-ui` brings the design tokens (`styles.css`) and every runtime dependency each component needs (`@radix-ui/*`, `motion`, `tailwind-variants`, …) — it does **not** expose components for direct import. `cattleya-ui/components/button` is not a valid subpath; only `./styles.css` is exported. This is intentional:

1. **Tailwind needs the class names inside your own source tree.** Components apply Tailwind utility classes directly in `className`. Tailwind generates CSS only for files it scans in *your* project — it does not scan `node_modules` by default — so a component imported straight from the package would render with no styles.
2. **You own the code.** Once copied, a component is yours to tweak — no black-box API and no waiting on a new release to change a variant.

## How to use a component

1. Install the package (brings the dependencies and the styles).
2. Find the component in Storybook, on [GitHub](https://github.com/whosramoss/cattleya-ui/tree/main/packages/react/src/components), or in `node_modules/cattleya-ui/src/components`.
3. Copy the file into your project (e.g. `./components/button.tsx`).
4. Also copy `src/utils/cn.ts` (or use your own `clsx` + `tailwind-merge` helper) — every component imports it as `@/utils/cn`, so either keep that alias in your `tsconfig.json`/bundler config or update the import to match your project's structure.
