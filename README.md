# 🌐 HTML Portfolio — Asfar

This repository is a collection of my frontend practice projects built with **HTML**, **CSS**, and **JavaScript**.  
Projects range from small UI exercises to interactive apps that use browser storage and third-party APIs.

Live portfolio: https://asfar99-collection.github.io/HTML-Portfolio/

---

## 🧭 Table of Contents

- [Projects](#projects)  
- [How to run locally](#how-to-run-locally)  
- [Tech stack](#tech-stack)  
- [Project JSON sample (Quiz)](#project-json-sample-quiz)  
- [Troubleshooting / 404 notes](#troubleshooting--404-notes)  
- [Future improvements](#future-improvements)  
- [Contact](#contact)

---

## 📂 Projects

> Each "Live Demo" link points to the project folder on GitHub Pages. If a demo link 404s, confirm the folder contains an `index.html` and that the folder name (case/underscores) matches the URL.

---

### 1. 🎓 Quiz App (Student)
**Description:** Student-facing multiple-choice quiz. Ships with a default English / grammar quiz. Students can also **upload a JSON** quiz file created by a teacher to replace the default questions at runtime.

**Key features**
- Progress bar showing quiz completion
- Prevents empty selection; validates input
- Score summary and replay option
- Upload teacher-created `.json` files with quizzes

**Live Demo:**  
https://asfar99-collection.github.io/HTML-Portfolio/Quiz_app/

**Source:** `Quiz_app/` (open `Quiz_app` folder in repo)

---

### 2. 👩‍🏫 Quiz Creator (Teacher)
**Description:** Simple form-based interface for teachers to create quizzes. Add questions/options, choose the correct answer, preview the JSON and download a ready-to-use quiz file.

**Key features**
- Live JSON preview as items are added
- Downloadable `quiz.json` for student upload
- Simple, distraction-free interface

**Live Demo:**  
https://asfar99-collection.github.io/HTML-Portfolio/Quiz_app/teacher.html

**Source:** `Quiz_app/` (teacher files)

---

### 3. 🧮 Calculator
**Description:** Visually appealing calculator (basic + convenience operators). Implements input building, AC (clear), DEL (backspace) and `=` evaluate behavior.

**Key features**
- Basic arithmetic: `+`, `-`, `*`, `/`, `%`
- AC and DEL buttons
- Clean dark UI with rounded buttons

**Live Demo:**  
https://asfar99-collection.github.io/HTML-Portfolio/calculator/

**Source:** `calculator/`

---

### 4. 📝 To-Do List
**Description:** Classic To-Do app showcasing DOM manipulation and **Local Storage** persistence. Create, edit, and remove tasks. Tasks persist across refreshes.

**Key features**
- Add, edit and remove tasks
- Saves list to `localStorage`
- Responsive UI and accessible controls

**Live Demo:**  
https://asfar99-collection.github.io/HTML-Portfolio/to_do_list/

**Source:** `to_do_list/`

---

### 5. 🔐 Login / Profile (Local)
**Description:** A basic login/profile demo using browser-side storage to save user information locally. Useful for learning authentication UI flows (client-side only).

**Key features**
- Simple signup/login flow
- Saves profile information locally
- Profile display screen

**Live Demo:**  
https://asfar99-collection.github.io/HTML-Portfolio/login/

**Source:** `login/`

---

### 6. 🍲 Recipe Finder
**Description:** A dish/recipe search app that consumes **TheMealDB API**. Search recipes, view cards, and open a recipe modal with full ingredients and instructions.

**Key features**
- Search by keyword (Fetch API + async/await)
- Grid result layout with hover effects
- Recipe modal with image, ingredients list and instructions
- Responsive design and scrollable modal

**Live Demo:**  
https://asfar99-collection.github.io/HTML-Portfolio/recipe_app/

**Source:** `recipe_app/`

---

## 🚀 How to run locally

1. Clone the repo:
```bash
git clone https://github.com/asfar99-collection/HTML-Portfolio.git
cd HTML-Portfolio
