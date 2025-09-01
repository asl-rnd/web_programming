# 00. Student Information System
#### Client-side:
- HTML form for student registration (name, ID, email, course).
- Table to show all students.
- CSS for layout, JS for form validation (e.g., email must be valid).
#### Server-side (Flask + SQLite):
- CRUD operations (Add, View, Update, Delete students).
- Routes for each action.
- Jinja2 template for dynamic display.
#### Database:
- SQLite table → students(`id, name, email, course`).
#### What to Ensure:
- Input validation (empty fields, duplicate emails).
- Error handling (e.g., database connection issues).
- Separation of templates (`templates/`) and static files (`static/`).
#### HTML+CSS+JS → Flask Routing → Database → Hosting.

## 01. Guestbook / Visitor Log
- **Frontend:** Form to enter name + message.
- **Backend:** Save messages to DB. Display list of all messages.
- **Ensure:** Sanitize input (no `<script>` injection).

## 02. To-Do List
- **Frontend:** Add task, mark as done, delete task.
- **Backend:** Store tasks in DB.
- **Ensure:** Use status column in DB (completed = True/False).

## 03. Simple Blog
- **Frontend:** Form to write post (title + content).
- **Backend:** Save in DB, show posts on homepage.
- **Ensure:** Order posts by date.

## 04. Online Library
- **Frontend:** Add book (title, author, availability). Search box.
- **Backend:** DB of books. Borrowing = mark “unavailable”.
- **Ensure:** Search works (by title/author).

## 05. Event Registration System
- **Frontend:** Register form (name, email).
- **Backend:** Store registrants in DB. Show registered users.
- **Ensure:** Prevent duplicate emails.

## 06. Contact Form Website
- **Frontend:** Contact page (name, email, message).
- **Backend:** Save messages to DB.
- **Ensure:** Basic email format validation.

## 07. Mini Poll / Voting App
- **Frontend:** Show poll question with multiple options.
- **Backend:** Count votes in DB. Show result (bar chart via JS).
- **Ensure:** One user can’t vote twice (session/IP-based check).

## 08. Simple Notes App
- **Frontend:** Add note (title + description).
- **Backend:** Save, edit, delete notes.
- **Ensure:** Notes are stored per user (later if you introduce sessions).

## 09. Product Catalog (E-commerce Lite)
- **Frontend:** Show product list (title, price, image).
- **Backend:** Add product via admin form. Store in DB.
- **Ensure:** Dynamic product list (looping in Jinja template).

## 10. Recipe Sharing Platform
- **Frontend:** Submit recipe (name, ingredients, steps).
- **Backend:** Save in DB, show recipes list.
- **Ensure:** Limit text length for ingredients/steps.

# Development Plan:
- **(setup → routes → DB → deployment)**
- **Rules for Project:**
    - Must have at least one form (input).
    - Must save & retrieve data from DB.
    - Must use HTML+CSS+JS for UI.
    - Must have at least one dynamic page (e.g., list of items).
- **`present the project + explain how client-side & server-side connect.`**