#!/usr/bin/env node

/**
 * Copy the VibeCoder Kit skill and optional security integrations to a project.
 * Existing files are preserved. Git hooks are not enabled automatically.
 *
 * Usage: node scripts/install-to.mjs <target-project-directory>
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const sourceRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const targetArg = process.argv[2];

if (!targetArg) {
  console.error("Usage: node scripts/install-to.mjs <target-project-directory>");
  process.exit(1);
}

const targetRoot = path.resolve(process.cwd(), targetArg);
if (!fs.existsSync(targetRoot) || !fs.statSync(targetRoot).isDirectory()) {
  console.error(`Target directory does not exist: ${targetRoot}`);
  process.exit(1);
}

const filesToCopy = [
  [".cursorignore"],
  [".copilotignore"],
  ["AGENTS.md"],
  [".cursorrules"],
  ["CLAUDE.md"],
  [".cursor/rules/security-and-secrets.mdc"],
  [".agents/rules/security-guardrails.md"],
  [".githooks/pre-commit"],
  ["scripts/check-secrets.mjs"],
  ["scripts/setup-security.ps1"],
  ["scripts/setup-security.sh"],
  ["scripts/test-security.mjs"],
  ["skills/vibecoder-kit/SKILL.md"],
  ["skills/vibecoder-kit/SKILL.md", ".agents/skills/vibecoder-kit/SKILL.md"],
  ["skills/vibecoder-kit/SKILL.md", ".claude/skills/vibecoder-kit/SKILL.md"],
];

let copied = 0;
let skipped = 0;

console.log(`Installing VibeCoder Kit into ${targetRoot}\n`);

for (const [sourceRelative, destinationRelative = sourceRelative] of filesToCopy) {
  const source = path.join(sourceRoot, sourceRelative);
  const destination = path.join(targetRoot, destinationRelative);

  if (!fs.existsSync(source) || !fs.statSync(source).isFile()) {
    console.warn(`Missing source file; skipped: ${sourceRelative}`);
    skipped++;
    continue;
  }

  if (fs.existsSync(destination)) {
    console.log(`Kept existing ${destinationRelative}`);
    skipped++;
    continue;
  }

  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(source, destination);
  console.log(`Copied ${destinationRelative}`);
  copied++;
}

const targetPackageJson = path.join(targetRoot, "package.json");
if (fs.existsSync(targetPackageJson)) {
  try {
    const pkg = JSON.parse(fs.readFileSync(targetPackageJson, "utf8"));
    if (pkg.scripts == null) {
      pkg.scripts = {};
    } else if (typeof pkg.scripts !== "object" || Array.isArray(pkg.scripts)) {
      throw new Error("package.json scripts field must be an object");
    }

    const additions = {
      "security:check": "node scripts/check-secrets.mjs",
      "security:setup": "git config core.hooksPath .githooks",
    };
    let changed = false;

    for (const [name, command] of Object.entries(additions)) {
      if (!Object.hasOwn(pkg.scripts, name)) {
        pkg.scripts[name] = command;
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(targetPackageJson, `${JSON.stringify(pkg, null, 2)}\n`);
      console.log("Added missing security commands to package.json");
    } else {
      console.log("Kept existing security commands in package.json");
    }
  } catch (error) {
    console.warn(`Could not update package.json: ${error.message}`);
  }
}

console.log(`\nDone. Copied ${copied} file(s); kept or skipped ${skipped}.`);
console.log("Review the installed files before use.");
console.log("To activate the Git hook, run npm run security:setup in the target project.");
console.log("The installer does not access or change .gitignore or copy environment files.\n");
