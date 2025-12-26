# Coding Standards & Quality Gates

## HTML/CSS Rules
1. **Semantic HTML:** Use `<header>`, `<main>`, `<footer>`, and `<nav>` where appropriate.
2. **Mobile First:** Write CSS for mobile screens first, then use media queries for larger screens.
3. **Performance:** - Optimize images (compress `logo.png`).
   - Minify CSS where possible.
   - Avoid blocking scripts in `<head>`.

## Accessibility (a11y)
1. **Alt Text:** All `<img>` tags must have descriptive `alt` attributes.
2. **Contrast:** Ensure text color meets WCAG AA contrast ratios against the background.
3. **Touch Targets:** Buttons/Links must be at least 44x44px for easy mobile tapping.

## Comments
- Comment section breaks in CSS (e.g., `/* --- BUTTONS --- */`).
- Do not comment obvious HTML structure.
