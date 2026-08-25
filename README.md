# The Fairy Tale (recruiter portfolio project)

A three-chapter fairy tale website, built to demonstrate a real CI/CD pipeline
and cloud deployment as much as the story itself.

## Structure

- `frontend/` — React app (Vite). Builds to static HTML/JS/CSS.
- `backend/` — Java app. Will become an AWS Lambda function serving chapter data.
- `.github/workflows/` — GitHub Actions pipelines (added in later phases).

## Status

Phase 1: repo and tooling scaffolding only. No real content yet — these are
placeholder apps whose only job is to prove the deployment pipeline works
end-to-end before any fairy-tale content is written.
