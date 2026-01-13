# PROJECT TODO & REQUIREMENTS

> **INSTRUCTION FOR CLAUDE:** Read this file before any code changes. Execute pending tasks in order. Keep this file updated.

---

## CRITICAL RULES (Check Every Time)
- [ ] Follow PROJECT_RULES.md constraints (max 10 serverless functions)
- [ ] No unnecessary code or dependencies
- [ ] Mobile-first responsive design
- [ ] Performance: page load < 3s, Lighthouse > 90
- [ ] Security: input validation, XSS/CSRF protection
- [ ] Cache strategy for all static/dynamic content

---

## PENDING REQUIREMENTS (Execute in Order)

### Priority 1 - Critical
- [ ] Redesign website with modern church design and maroon color scheme
  - Update color palette: maroon primary (#800020 or similar), complementary colors
  - Modern church website design patterns (hero with overlay, card layouts, etc.)
  - Maintain mobile-first responsive approach
  - Update CSS variables in :root
  - Refresh typography, spacing, and visual hierarchy
  - Consider: gradient backgrounds, modern shadows, smooth animations
  - Files: css/styles.css, index.html (structure if needed)

### Priority 2 - High
- [ ] Implement cache management strategy
  - Add HTTP caching headers in vite.config.js
  - Configure asset versioning/fingerprinting
  - Create Service Worker for offline capabilities
  - Files: vite.config.js, sw.js (new)

- [ ] Optimize assets for mobile
  - Add lazy loading for images
  - Implement responsive images with srcset
  - Convert images to WebP format
  - Files: index.html, css/styles.css

### Priority 3 - Medium


### Priority 4 - Low


---

## COMPLETED TASKS
<!-- Move completed tasks here with date -->


---

## BLOCKED/QUESTIONS
<!-- Tasks waiting for user input -->


---

## NOTES FOR CLAUDE
- Keep file under 100 lines for token efficiency
- Update status after each code change
- Move completed items to COMPLETED section
- Ask user for clarification on ambiguous requirements