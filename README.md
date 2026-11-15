# VibeCoder Kit

A portable agent skill and optional security toolkit for building and shipping websites and apps with care.

VibeCoder Kit brings together two things:

- **The product skill:** one self-contained guide to product-specific visual design, UX, accessibility, responsive behavior, privacy, security, discoverability, and release readiness.
- **The security pack:** reusable AI instructions, editor exclusions, and an optional Git pre-commit scanner for common accidental secret leaks.

Use the skill by itself, or clone this repository and install the security pack into a project. The security scanner is a pattern-based backstop; it cannot replace code review, secret management, or a security audit.

## Use it on every project

Choose the setup that fits how you work.

### Option 1: Give Claude a one-off prompt

Attach or paste the single self-contained [skill file](skills/vibecoder-kit/SKILL.md) into the conversation, then send:

```text
Use VibeCoder Kit for this project. Follow the attached skill where it fits the task. First inspect the existing project and understand its users, stack, and conventions. Then make the requested change with complete loading, empty, success, error, and recovery states where relevant. Check responsive behavior, accessibility, privacy, and security. Keep optional features and infrastructure out unless the project needs them. Use the project's existing verification tools and summarize what you checked and any remaining risks.
```

### Option 2: Install it globally as a skill

Copy the `skills/vibecoder-kit` folder into your agent's personal skills directory. It contains one self-contained `SKILL.md`. The current locations documented for [Claude Code](https://code.claude.com/docs/en/skills) and [Codex](https://developers.openai.com/api/reference/cli#use-the-cli-from-a-coding-agent) are:

| Agent | Personal skills folder | Available in |
| --- | --- | --- |
| Claude Code | `~/.claude/skills/vibecoder-kit/` | Local Claude Code projects on this machine |
| Codex | `~/.agents/skills/vibecoder-kit/` | Projects on this machine |

This global copy includes the complete checklist and secret-handling guidance. It does not install project-specific ignore files or enable a Git hook; use Option 3 for those integrations.

On Windows, `~` means your user profile folder (for example, `C:\Users\your-name\.claude\skills\vibecoder-kit\` or `C:\Users\your-name\.agents\skills\vibecoder-kit\`). Create the parent skills directory if needed, then start or reload the agent. In Claude Code, invoke it with `/vibecoder-kit` or let Claude select it when relevant. Claude.ai/Cowork and cloud sessions use account or workspace skill settings rather than your local Claude Code folder.

### Option 3: Install it in one project

Clone this repository and run the installer from its folder:

```bash
git clone <repository-url> vibecoder-kit
cd vibecoder-kit
node scripts/install-to.mjs ../your-project
```

The installer copies the single VibeCoder Kit skill into `skills/`, `.agents/skills/`, and `.claude/skills/`, plus the security rules and scanner integrations, only when destination files are missing. It reports conflicts, preserves existing files, and merges missing security commands into `package.json`. It no longer installs the separate legacy `agent-security` skill because its guidance is included in VibeCoder Kit. Existing copies in a project are left untouched.

The complete guidance is in [skills/vibecoder-kit/SKILL.md](skills/vibecoder-kit/SKILL.md).

Review the installed files. If you want the pre-commit scanner, run `npm run security:setup` from the target project. The installer does not configure hooks automatically, access or change `.gitignore`, or copy environment files. Add a project-specific `.env.example` schema and `.gitignore` patterns yourself when needed.

## Five security layers

The security pack keeps the original five layers:

1. **Context exclusions:** `.cursorignore` and `.copilotignore` reduce indexing of local secrets in tools that honor them.
2. **Agent rules:** `AGENTS.md`, `CLAUDE.md`, Cursor rules, and `.agents/` instructions tell supported agents how to handle credentials.
3. **Safe configuration schema:** `.env.example` can document variable names with placeholders, never real credentials.
4. **Git ignore protection:** the repository's existing `.gitignore` patterns keep sensitive files out of normal Git staging.
5. **Pre-commit checks:** the hook checks staged filenames and common credential patterns.

These layers serve different purposes. Instructions and editor exclusions are tool-dependent, `.gitignore` does not prevent reading a file, and the scanner is pattern-based. They reduce exposure and accidental commits; they are not a hard OS-level access barrier or a security certification.


## Development

Requires Node.js 18 or newer.

```bash
npm test
```

To enable the Git hook in this checkout, run `npm run security:setup`. This changes the local Git `core.hooksPath` setting, so run it only when you want the hook active.

## Project contents

```text
skills/vibecoder-kit/  Single self-contained product-building skill
scripts/               Installer, security scanner, setup scripts, and self-tests
.githooks/             Optional pre-commit hook
.cursor/               Cursor security rule
.agents/               Always-on security rule and legacy security skill (not copied to new projects)
images/                Original checklist screenshots used to build the guide
```

The root `AGENTS.md`, `CLAUDE.md`, Cursor files, and ignore files are tool-specific security integrations. Keep the ones relevant to your workflow; you do not need every integration enabled.

## License

Released under the [MIT License](LICENSE).
