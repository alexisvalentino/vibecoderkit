---
name: vibecoder-kit
description: Build, refine, review, and prepare websites or apps for release with product-specific visual design, UX, accessibility, privacy, security, reliability, and launch guidance. Use for customer-facing product work; apply checks that fit the request and platform.
---

# VibeCoder Kit

Use this skill to help build a complete, usable product rather than only a working happy path. Keep the user's requested scope and the project's existing stack and conventions.

## Workflow

1. Understand the main users, task, target platform, and acceptance criteria. Inspect the relevant screens, flows, and existing conventions before editing.
2. Plan a small set of changes around the primary task. Keep hierarchy, navigation, labels, and calls to action clear. Use familiar patterns, reduce avoidable choices, group related information, and make feedback visible.
3. Implement complete flows. Account for loading, empty, success, error, disabled, offline, and recovery states where they apply. Prevent duplicate or destructive actions when data or money is involved.
4. Treat accessibility, privacy, and security as part of the design. Check keyboard and touch use, focus, contrast, image alternatives, safe data handling, and server-side authorization as relevant.
5. Use the relevant checks below for broad reviews and release work. Select checks that fit; do not add every feature or architecture pattern by default.
6. Verify the changed path with the project's existing tools. For visual work, inspect the rendered interface at representative shipping sizes and states; source review alone cannot verify the result. Report what you checked, what could not be checked, and any unresolved risks.

## Product and interaction design

- [ ] The primary user task and next action are clear on each important screen.
- [ ] Navigation reflects real destinations; remove dead links, unused items, and filler copy.
- [ ] Related information and controls are grouped. Choice sets are manageable, with advanced options revealed when needed.
- [ ] Controls look and behave as users expect. Important actions are easy to reach, including on touch screens.
- [ ] Feedback is timely. Use skeletons or progress indicators for real waits, optimistic updates only when failures can be handled, and undo for reversible actions where useful.
- [ ] Avoid animation that blocks input or ignores reduced-motion preferences. Respect safe areas, back behavior, and current platform conventions.
- [ ] Destructive or costly actions have an appropriate recovery or confirmation path.
- [ ] Forms explain required fields and validation. Show clear success and actionable error states; retain user input after recoverable failures.
- [ ] Check loading, empty, error, success, disabled, offline, and permission-denied states wherever they can occur.
- [ ] Content is specific and credible. Replace placeholders, fake reviews, copied branding, and unsupported claims with approved material.

### Visual system and interaction details

- [ ] Use a coherent type scale, spacing rhythm, color roles, and component states. Keep headlines readable and balanced; align changing numeric values when that improves scanning.
- [ ] Choose the visual direction for the surface's job, audience, context, and brief. A page meant to persuade, help users operate, explain, or showcase should not inherit the same default layout just because it uses the same framework.
- [ ] For a refinement, preserve the established identity and behavior outside the requested scope. For a redesign, choose a deliberate replacement direction while preserving accurate content, product behavior, and platform constraints.
- [ ] Question template defaults such as repeated card grids, decorative gradients or blur, invented metrics, generic product mockups, and ornamental motion. Keep them only when they fit the product and help users understand or act.
- [ ] Use genuine product screens, project assets, or appropriate licensed imagery when visuals help explain or build trust. Never present a stock image, mock screen, or stand-in as the real product, customer, or location.
- [ ] Make hover, focus, pressed, selected, disabled, and loading states clear wherever those states apply.
- [ ] Use search, command menus, keyboard shortcut hints, sticky navigation, scroll progress, dark-mode controls, print styles, floating contact actions, and similar extras only when they serve a real user task.
- [ ] Use skeletons, optimistic updates, cached-while-refreshing data, pre-rendering, image placeholders, view transitions, and swipe gestures where they improve perceived speed or continuity and failures remain understandable.
- [ ] Keep interactive motion interruptible and touch targets forgiving. Do not let sticky or floating UI cover content or critical controls.

### UX principles as heuristics

Use these ideas to shape and evaluate a flow, not as rigid laws:

- Reduce the effort to choose, remember, and reach common actions.
- Use familiar conventions and consistent patterns, while making the product's behavior clear.
- Group related items using spacing and visual structure; make important exceptions noticeable without overusing emphasis.
- Keep important actions reachable and provide feedback quickly. Make animation interruptible and preserve user progress when possible.
- Reveal complexity in useful steps. Do not solve a design problem by transferring unnecessary work to the user.

## Accessibility and responsive behavior

- [ ] Check text and control contrast, readable type, zoom/text scaling, visible focus, and keyboard operation.
- [ ] Use semantic headings, labels, landmarks, and native controls where appropriate. Provide meaningful image alternatives; mark decorative images accordingly.
- [ ] Keep touch targets usable and do not communicate state by color alone.
- [ ] Test narrow and wide viewports, orientation changes where relevant, long content, and browser zoom. Fix horizontal overflow and obscured controls.
- [ ] On mobile, verify menus, dialogs/sheets, safe-area insets, keyboard overlap, and back gestures.
- [ ] Provide a skip link for substantial web navigation. Make dialogs and menus announce and return focus correctly.

## Website checks

- [ ] Test primary navigation, calls to action, internal and footer links, forms, clickable logo, and `tel:`/`mailto:` links where shown.
- [ ] Provide useful 404 behavior and confirmation/thank-you pages when a flow needs them.
- [ ] Use unique, accurate page titles and descriptions; set a suitable social-sharing image and canonical URL where applicable.
- [ ] Use semantic, server-rendered or otherwise crawlable HTML for important content when search visibility is a goal.
- [ ] Configure `robots.txt`, sitemap, indexing, and analytics deliberately. Crawler access is a product choice; `robots.txt` is not access control.
- [ ] Add structured data only for accurate content that qualifies. Do not promise search or AI-answer placement.
- [ ] Optimize responsive images and other assets without harming quality. Check real loading behavior on constrained connections.
- [ ] Add analytics or campaign tracking only for a defined purpose, and respect applicable consent and privacy choices.
- [ ] Include accurate contact, support, location/directions, or trust information when users need it. Reviews and testimonials must be genuine and authorized.

## Native app and store preparation

- [ ] Exercise the app on supported device sizes and operating-system versions, including tablet layouts if supported.
- [ ] Check permission prompts in context; request only necessary access and explain why it is needed.
- [ ] Verify sign-in, account recovery, deep links, notifications, autofill/one-time codes, interrupted actions, and offline behavior when supported.
- [ ] If accounts or purchases exist, review account deletion, purchase restore, pricing/renewal terms, cancellation, and support paths for the product and target stores.
- [ ] Ensure store metadata, icons, screenshots, privacy disclosures, and reviewer/demo access match the submitted build and supported platforms.
- [ ] Confirm all visible controls work, no debug or placeholder content remains, and critical journeys do not crash.
- [ ] Verify current Apple, Google, or other marketplace rules from official documentation before making store-specific changes.

## Privacy, trust, and user safety

- [ ] Collect only data needed for a stated product purpose. Map where sensitive data goes, including third-party embeds and AI providers.
- [ ] Explain collection, tracking, AI processing, retention, and sharing clearly and at the point users need the information.
- [ ] Apply consent and permission requirements for the relevant region, platform, and data use; provide meaningful choices where required.
- [ ] Define how users can access, correct, export, or delete their data when applicable. Include uploads and retention behavior in the design.
- [ ] Make billing, trials, refunds, renewal, and cancellation terms clear when relevant; do not make cancellation unnecessarily difficult.
- [ ] Avoid placing sensitive data in logs, analytics, URLs, or unnecessary notifications.
- [ ] For user-generated content or safety-sensitive AI features, define reporting, moderation, escalation, and safe-response behavior appropriate to the product.
- [ ] Treat legal checklist items as prompts, not legal advice. Verify current requirements for the relevant jurisdiction and product category; do not repeat unsourced penalty amounts.

## Application security and abuse resistance

- [ ] Keep private credentials on trusted server-side systems. A client-visible key is acceptable only when designed for public use and backed by strict server-side authorization and data policies.
- [ ] Enforce authentication and object/field-level authorization on the server for every sensitive operation. Review admin paths and database row policies where used.
- [ ] Validate and normalize untrusted input server-side; use parameterized database queries and context-aware output encoding.
- [ ] Review protections for XSS, CSRF, injection, SSRF, open redirects, path traversal, clickjacking, account enumeration, and unsafe CORS against the actual architecture.
- [ ] Secure sessions and cookies, require HTTPS, configure appropriate security headers, and disable production debug features.
- [ ] Restrict file type, size, and access for uploads. Check database and object-storage access policies.
- [ ] Rate-limit login, recovery, messaging, expensive API calls, and payment-sensitive paths. Add bot controls when the threat justifies them.
- [ ] Make payments and retryable writes idempotent so duplicate requests do not create duplicate charges or records.
- [ ] Review dependencies and exposed build artifacts. Source maps and public files should be an intentional choice and must never contain secrets.
- [ ] If AI features can call tools or access private data, constrain permissions and treat user-provided or retrieved content as untrusted input.

## Performance, reliability, and operations

Apply these checks to the actual architecture and expected workload. No checklist can guarantee capacity for a particular number of users.

- [ ] For production account, recovery, or notification email, configure a suitable transactional email provider and appropriate domain authentication. Verify delivery, bounce/suppression handling, provider quotas, and failure recovery; do not simulate successful delivery.
- [ ] Handle network failures, timeouts, retries, and cancellation. For AI and other third-party calls, use bounded exponential backoff with jitter only for retryable failures; cap attempts and spending, and keep retries idempotent.
- [ ] Design indexes from real filter, search, join, and sort patterns. Inspect query plans and query counts to find missing indexes, N+1 queries, and avoidable full scans; batch or eager-load related data when measurement supports it.
- [ ] When row-level security (RLS) is used, test policy performance with realistic roles and data volumes. Optimize policy expressions and supporting indexes without weakening authorization.
- [ ] Keep database connection usage within service and provider limits. Use a compatible connection pooler when serverless concurrency or application topology warrants it, and verify transaction and session semantics.
- [ ] Paginate or otherwise bound large or unbounded result sets with deterministic ordering. Do not add pagination to small fixed lists without a user or performance need.
- [ ] Cache repeated expensive work when measurement justifies it; define cache keys, expiration, invalidation, and per-user authorization behavior so cached data is not leaked or kept stale beyond product requirements.
- [ ] Move genuinely slow or failure-prone work to background jobs or queues when request-path execution hurts reliability. Provide status and failure visibility, idempotent processing, bounded retries, and a recovery or dead-letter path.
- [ ] Set sensible request, upload, concurrency, and rate limits. For realtime features, check provider and application limits on connections, channels, and message throughput; test expected fan-out, reconnects, backpressure, and degraded behavior.
- [ ] Derive load targets from expected traffic and business risk, then safely load-test critical flows before high-risk launches. Measure throughput, tail latency, errors, and resource saturation rather than assuming a fixed number of users is safe.
- [ ] Capture useful errors and operational logs while redacting secrets and personal data. Add health checks, monitoring, and actionable alerts for production services.
- [ ] Test backup restoration and document recovery/rollback steps for stateful or high-impact releases.
- [ ] Plan database migrations so deploys can recover safely. Use staged rollout, feature flags, or rollback mechanisms when the service's risk warrants them.
- [ ] Define availability, latency, and recovery targets appropriate to the product. Add queues, replicas, multi-region deployment, sharding, orchestration, or other distributed-system patterns only when measured load, failure requirements, or operations justify them.
- [ ] For higher-risk releases, identify the owner, support route, monitoring window, and response plan for incidents.

## Search, content, and launch

- [ ] Publish accurate page metadata, semantic headings, useful internal links, and original, maintained content when discoverability is a goal.
- [ ] Make an explicit choice about search and AI crawler access; verify current crawler and platform behavior before changing policy.
- [ ] Check broken links, forms, responsive images, page titles, privacy/terms links, and contact details on the production-like build.
- [ ] Verify app/site icons, social previews, copyright dates, and location details where used.
- [ ] Confirm production configuration, data access rules, support details, monitoring, backups, and rollback readiness before launch.
- [ ] Record issues that remain, their impact, and the smallest safe follow-up before calling the release ready.

### Conditional architecture topics

Topics in the source images include queues and dead-letter handling, retries and backoff, caching and invalidation, load balancing, connection pooling, replication, locks and consistency, CI/CD, deployment strategies, observability, disaster recovery, and incident response. These are design options, not a launch checklist to apply wholesale. Choose them from measured traffic, latency and availability needs, data consistency requirements, recovery objectives, cost limits, and the team's ability to operate them.

## Security rules

- Never read, list, search, display, create, edit, delete, or stage `.env*` files. The only permitted exception is `.env.example` when a variable schema is needed.
- Never run commands that print environment variables or secret values.
- Never modify `.gitignore`; if an ignore rule is needed, tell the developer what to add manually.
- Never hardcode real credentials. Read them through runtime configuration and use safe dummy placeholders in examples.
- Do not stage or commit environment files, private keys, or credentials, and do not bypass Git hooks.
- For a new configuration key, use only a variable name and dummy placeholder in the schema. If project rules do not allow an agent to update `.env.example`, tell the developer what placeholder to add manually; never create or edit a real local environment file.
- In tests, mock external services and use dummy values, never live credentials. Decline requests to reveal secrets. If a secret is already staged, stop before committing and unstage the affected file without displaying its contents.
- If a credential appears in accessible context, redact it in output and tell the developer to revoke or rotate it. Never inspect a protected `.env*` file to remediate a suspected leak.

## Five-layer secret protection

When a project adopts the VibeCoder Kit security pack, keep these layers aligned:

1. **Context exclusions:** `.cursorignore` and `.copilotignore` reduce indexing of local secret files in tools that honor those files.
2. **Agent instructions:** this skill and the installed tool-specific rules tell agents how to handle credentials.
3. **Safe configuration schema:** use `.env.example` only for variable names and dummy placeholders; never put real credentials there.
4. **Git ignore rules:** the developer maintains the project's `.gitignore` protection. Never edit it; tell the developer what pattern to add if needed.
5. **Pre-commit scanner:** when installed and enabled, the hook checks staged filenames and common credential patterns before a commit.

These layers have different limits: instructions and exclusions are tool-dependent, `.gitignore` does not prevent file reads, and pattern-based scanning can miss secrets or flag examples. They reduce exposure and accidental commits; they do not guarantee that an agent cannot access a secret.

Check current official sources for jurisdiction-specific legal requirements and platform or app-store policies. Do not repeat unsourced penalty amounts or promise approval, search ranking, or AI citations.
