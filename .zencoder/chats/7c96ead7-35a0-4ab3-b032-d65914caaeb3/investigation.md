# Investigation and Planning - Tailwind CSS "Unknown at rule" Issues

## Bug Summary
The project reports "Unknown at rule @tailwind" and "Unknown at rule @apply" in `src/index.css`. This is typically caused by the CSS validator (e.g., in VS Code) not being configured to recognize Tailwind CSS specific directives. Additionally, the `tailwind.config.js` is using CommonJS `module.exports` while the project is set to `"type": "module"`, leading to linting errors.

## Root Cause Analysis
1. **Unknown at-rules**: The default CSS validator in VS Code (and some other IDEs) does not know about `@tailwind`, `@apply`, and `@layer`.
2. **ESM/CommonJS Conflict**: `package.json` specifies `"type": "module"`, but `tailwind.config.js` uses `module.exports`. This triggers `no-undef` errors in ESLint and potentially causes issues with ESM-only loaders.

## Affected Components
- `src/index.css`: Where the warnings occur.
- `tailwind.config.js`: Incorrect module system usage.
- `.vscode/settings.json` (to be created): Lacking configuration for Tailwind.

## Proposed Solution
1. **Configure VS Code**: Add a `.vscode/settings.json` file to tell the IDE to ignore these specific unknown at-rules.
2. **Convert `tailwind.config.js` to ESM**: Use `export default` instead of `module.exports` to align with the project's `"type": "module"` configuration.
3. **Verify**: Run `npm run lint` and `npm run build` to ensure everything is correct.

## Steps
1. Create `.vscode/settings.json` with appropriate CSS validation settings.
2. Update `tailwind.config.js` to use `export default`.
3. Fix any other linting errors identified (like unused variables in `ConservationComp.jsx` and `Conservation.jsx`).
