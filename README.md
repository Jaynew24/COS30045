# COS30045
Data Visualisation

# Appliance Energy Consumption — Demo Website (T01(a))

## What this is
Small demo website to showcase HTML, CSS, JavaScript and Git/GitHub hosting. Single-file site that simulates three pages: Home, Televisions, About Us.

## How to run locally
1. Clone repo.
2. Open `index.html` in a browser (double click or use Live Server extension in VS Code).

## Deployment
This project can be deployed on Vercel:
1. Push your repository to GitHub (make it public).
2. Log into https://vercel.com using your GitHub account.
3. Click **New Project → Import Git Repository** → select this repo → Deploy.
4. Vercel will give a live link: `https://your-project-name.vercel.app`.

## Git workflow (simple)
- Make small commits:
  - `git add .`
  - `git commit -m "Add home layout and styles"`
  - `git push`

## GenAI / GitHub Copilot usage (required notes)
I used GitHub Copilot to assist with:
- Generating the basic `<header>`/navigation skeleton.
- Suggesting the CSS structure and responsive grid for the cards.
- A starter Chart.js configuration.

**How I used Copilot (steps / prompts I gave it):**
- "Create a responsive header with a logo and navigation"
- "Provide a CSS variables theme and responsive card layout"
- "Create a simple Chart.js bar chart for sample TV energy data"

**What Copilot suggested (and what I changed):**
- Copilot suggested `flex` layout — I kept it and adjusted spacing/contrast.
- Copilot generated some CSS variables; I renamed them to match the project naming convention.
- I manually rewrote the chart options for accessibility (ARIA, chart title).

**Reflection**
Using Copilot sped up scaffolding and gave useful patterns. I carefully reviewed and edited all Copilot suggestions to ensure I understand them and to correct misfits (styles, color contrast, accessibility). I can explain and modify every line of code included in this project.

---

## To do before submission
- Replace placeholder TV data with verified Australian figures and include citations (in README or on the Televisions page).
- Add `PowerIcon.png` in `assets/`.
- Fill the About Us page with your project/author details.

---
