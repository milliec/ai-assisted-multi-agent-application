# Project rules for Claude Code

This repo is the case-study microsite for the capstone project in the sibling folder `../capstone`.
It tells the story of that project for a portfolio. Astro instructions are in `AGENTS.md`.

## Public repository: binding rules

This repository is **public**. Anything committed should be treated as published forever.

- Never commit real company, fund, platform, service-provider or people names, internal document dates,
  version numbers, or other internal details.
- Use only fictional data that the capstone has already committed (its `project-context/` folder,
  especially `project-context/1.define/mock-data/`). Never copy from the capstone's git-ignored
  `reference/` folder.
- Start new work on a branch, never on `main`. Changes reach `main` only through a reviewed pull
  request. If edits were started on `main` by mistake, move them with `git switch -c <branch>` before
  committing.
- Before every commit and push, confirm `.env` does not appear in `git status`, and run the real-name
  scan below.

## Checks to run after changing committed files

1. **Real-name scan** (must print nothing). It reads the private list kept in the capstone repo. If
   that file is missing, stop and ask; do not skip the scan.

   One exception, decided by the operator on 2026-11-08: the operator's own first name ("Millie") is
   allowed here, because the portfolio carries their name. The exception applies to this repo only.
   Do not add other exceptions without asking.

   ```bash
   grep -rniwF --exclude-dir=node_modules --exclude-dir=.git --exclude-dir=dist --exclude-dir=.astro \
     -f <(grep -vE '^(#|$)' ../capstone/reference/real-identifiers.txt | grep -vixF 'Millie') .
   ```

2. **Build** must pass: `npm run build`

## Content rules

- Write for readers with no finance, compliance or technical background. Plain words, British English,
  no em dashes. Say "a human specialist", not just "the specialist".
- Every claim must come from the capstone's documents. Say clearly what is done, planned or intended.
- Do not name the "AAMAD" acronym on the site. Use "AI-Assisted Multi-Agent Application Development".
- Ember orange (`#ff682c`) is never used as text colour; it fails contrast. Use brass (`#816729`) for
  coloured text.

## Working with the operator

- Personal learning-mode preferences live in the operator's global `~/.claude/CLAUDE.md`.
- Lessons worth keeping go into the capstone's `docs/learning-notes.md`, and moments of directing AI
  go into the capstone's `docs/ai-direction-log.md`, each through a pull request in that repo.
