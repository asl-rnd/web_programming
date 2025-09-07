# **HTML (Structure & Semantics)**

## `<!DOCTYPE html>`
→ Declares the document type (HTML5).

## `<html>`
→ Root element of the HTML document.
  ```html
  <!DOCTYPE html>
  <html>
    <head></head>
    <body></body>
  </html>
  ```

## `<head>` 
→ Contains metadata (title, meta info, links, scripts, styles).
* **`<title>`** → Page title (browser tab).
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Page</title>
    </head>
    <body></body>
  </html>
  ```

## `<body>`
→ Contains visible page content.

#### Elements & Attributes:
* **Element** → Defined by start `<tag>` and end `</tag>`.<br>
* **Attribute** → Provides extra info inside the opening tag.<br>

---

* **`<h1>`–`<h6>`** → Define headings (h1 = largest, h6 = smallest).
* **`<p>`** → Defines a paragraph.
  ```html
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <h1>Internet Technology</h1>
      <p>This is the paragraph that represents a block of text. Can not contain any other elements.</p>
    </body>
  </html>
  ```

#### Text Formatting
* **`<b>` / `<strong>`** → Bold text (strong = important).
* **`<i>` / `<em>`** → Italic text (em = emphasized).
* **`<u>`** → Underlined text.
* **`<mark>`** → Highlighted text.
* **`<del>`** → Deleted text.
* **`<br>`** → Line break.
* **`<hr>`** → Horizontal line (divider).
* **`<small>`** → Tiny text (relatively small)
* **`<sub>`** → Subsript; **`<sup>`** → Supersript
  ```html
  <!DOCTYPE html>
  <html>
    <head></head>
    <body>
      <h1><mark>Internet Technology</mark></h1>
      <p>This is the paragraph that represents a block of text.<br><del>Can contain</del> Can not contain any other elements.</p>
      <p>Article used for things like - <b>blog posts</b>, <strong>new articles</strong>, or any block of content that can stand alone.</p>
      <p>Article indicates this chunk is a <i>meaningful</i> and <em>complete</em> content.</p>
      <p>Subscript Example: H<sub>2</sub>SO<sub>4</sub>; Supperscript Example: a<sup>2</sup> + b<sup>2</sup> + 2ab = (a + b)<sup>2</p>
    </body>
  </html>
  ```

#### Links and Images
* **`<a>`** → (Anchor) Creates a hyperlink.
  * **href** → the target URL, file, or section. Links can point to:
    * External websites (`https://...`)
    * Internal files (`about.html`)
    * Sections of the same page (`#id`)
    * Email/phone (`mailto:someone@mail.com`, `tel:123456789`)
  ```html
  <a href="https://github.com/asl-rnd/web_programming/">ASL R&D Web Programming</a>
  <a href="https://github.com/asl-rnd/web_programming/" target="_blank">ASL R&D Web Programming</a>   <!-- Opens in new tab -->
  <a href="another.html">Another HTML Page</a>
  <a href="### Section 2">Go to Section 2</a>
  <a href="mailto:someone@example.com">someone@example.com</a>
  <a href="tel:+8801XXXXXXXXX">+8801XXXXXXXXX</a>
  ```
* **`<img>`** → Embeds an image.
  ```html
  <img src="image.jpg" alt="descript_image" width=100% height="400px">
  ```
---