# Web Programming Sessional | CCE-1206

👤 **[Md Abu Bakar Siddiq Sayem](https://github.com/abs-sayem)**  
- 💼 Adjunct Faculty, Department of CCE, IIUC
- 📧 Email: abssayem121194@gmail.com  
- 📞 Phone: +8801825507837
---


# **HTML (Structure & Semantics)**

## 1. HTML Basics
* **`<!DOCTYPE html>`** → Declares the document type (HTML5).
  ```html
  <!DOCTYPE html>
  ```

* **`<html>`** → Root element of the HTML document.
  ```html
  <html> ... </html>
  ```

* **`<head>`** → Contains metadata (title, links, scripts, styles).
  ```html
  <head><title>My Page</title></head>
  ```

* **`<body>`** → Contains visible page content.
  ```html
  <body><p>Hello World</p></body>
  ```

---

## 2. Elements & Attributes
* **Element** → Defined by start `<tag>` and end `</tag>`.
* **Attribute** → Provides extra info inside the opening tag.
  ```html
  <p title="Tooltip text">This is a paragraph with an attribute.</p>
  ```

---

## 3. Headings

* **`<h1>`–`<h6>`** → Define headings (h1 = largest, h6 = smallest).
  ```html
  <h1>Main Title</h1>
  <h3>Sub Heading</h3>
  ```

---

## 4. Paragraphs
* **`<p>`** → Defines a paragraph.
  ```html
  <p>This is a paragraph.</p>
  ```

* **`<br>`** → Line break.
  ```html
  Hello<br>World
  ```

* **`<hr>`** → Horizontal line (divider).
  ```html
  <hr>
  ```

---

## 5. Formatting
* **`<b>` / `<strong>`** → Bold text (strong = important).
  ```html
  <strong>Important text</strong>
  ```

* **`<i>` / `<em>`** → Italic text (em = emphasized).
  ```html
  <em>Highlighted text</em>
  ```

* **`<u>`** → Underlined text.
  ```html
  <u>Underlined</u>
  ```

* **`<mark>`** → Highlighted text.
  ```html
  <mark>Highlighted</mark>
  ```

---

## 6. Links
* **`<a>`** → Creates a hyperlink.
  ```html
  <a href="https://example.com" target="_blank">Visit Example</a>
  ```

---

## 7. Head (Extra Tags)
* **`<title>`** → Page title (browser tab).
* **`<meta>`** → Metadata (charset, description, viewport).
* **`<link>`** → Link to external resources (CSS, favicon).
* **`<style>`** → Internal CSS.
* **`<script>`** → JavaScript code.
  ```html
  <head>
    <title>My Site</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
  </head>
  ```

---

## 8. Images
* **`<img>`** → Embeds an image.
  ```html
  <img src="image.jpg" alt="A sample image" width="200">
  ```

---

## 9. Tables
* **`<table>`** → Creates a table.
* **`<tr>`** → Table row.
* **`<th>`** → Table header cell.
* **`<td>`** → Table data cell.
  ```html
  <table border="1">
    <tr><th>Name</th><th>Age</th></tr>
    <tr><td>Alice</td><td>22</td></tr>
  </table>
  ```

---

## 10. Lists
* **`<ul>`** → Unordered list (bullets).
* **`<ol>`** → Ordered list (numbers).
* **`<li>`** → List item.
  ```html
  <ul>
    <li>Apple</li>
    <li>Banana</li>
  </ul>
  ```

---

## 11. Blocks & Layout
* **`<div>`** → Block-level container.
  ```html
  <div style="background:lightblue;">Block element</div>
  ```

* **`<span>`** → Inline container.
  ```html
  <p>This is <span style="color:red;">highlighted</span> text.</p>
  ```

* **Semantic layout tags**:
  * `<header>` → Page header.
  * `<footer>` → Page footer.
  * `<section>` → Page section.
  * `<article>` → Self-contained content.
  * `<aside>` → Sidebar content.
  ```html
  <header><h1>My Blog</h1></header>
  <section><article>Blog Post</article></section>
  ```

---

## 12. Forms
* **`<form>`** → Creates a form.
* **`<input>`** → Input field (`text`, `email`, `password`, etc).
* **`<textarea>`** → Multi-line text input.
* **`<select>` & `<option>`** → Dropdown menu.
* **`<button>`** → Button.

  ```html
  <form>
    <label>Name:</label>
    <input type="text"><br>
    <textarea></textarea><br>
    <select>
      <option>Option 1</option>
    </select><br>
    <button type="submit">Submit</button>
  </form>
  ```

---

## 13. Multimedia
* **`<audio>`** → Embed audio.
  ```html
  <audio controls>
    <source src="song.mp3" type="audio/mp3">
  </audio>
  ```

* **`<video>`** → Embed video.
  ```html
  <video controls width="300">
    <source src="movie.mp4" type="video/mp4">
  </video>
  ```

* **`<iframe>`** → Embed another webpage (e.g., YouTube).
  ```html
  <iframe src="https://example.com" width="300" height="200"></iframe>
  ```

---