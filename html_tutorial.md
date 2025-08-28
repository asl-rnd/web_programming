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
* **`<meta>`** → Metadata (charset, description, viewport).
* **`<link>`** → Link to external resources (CSS, favicon).
* **`<style>`** → Internal CSS.
* **`<script>`** → JavaScript code.
  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Page</title>
      <meta charset="UTF-8">
      <meta font-family="Trebuchet MS">
      <style>body {color: silver}</style>   <!-- color: rgb(253, 235, 233) -->
      <link rel="stylesheet" href="style.css" />
      <link rel="script" href="script.js" />
    </head>
    <body></body>
  </html>
  ```

## `<body>`
→ Contains visible page content.

#### Elements & Attributes:
* **Element** → Defined by start `<tag>` and end `</tag>`.<br>
* **Attribute** → Provides extra info inside the opening tag.<br>
```html
  <p title="Tooltip text">This is a paragraph with an attribute.</p>
```
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
#### Formatting
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

---

#### Links and Images
* **`<a>`** → Creates a hyperlink.
* **`<img>`** → Embeds an image.
  ```html
  <a href="https://example.com">Visit Example</a>
  <a href="https://example.com" target="_blank">Visit Example</a>   <!-- Opens in new tab -->

  <img src="image.jpg" alt="descript_image" width=100% height="400px">
  ```

---

#### Tables
* **`<table>`** → Creates a table.
* **`<tr>`** → Table row.
* **`<th>`** → Table header cell.
* **`<td>`** → Table data cell.
  ```html
  <table border="1">
    <tr><th>Std Id</th><th>Attance</th><th>Mid</th><th>Final</th></tr>
    <tr><td>CCE001</td><td>10</td><td>24</td><td>40</td></tr>
    <tr><td>CCE002</td><td>10</td><td>25</td><td>44</td></tr>
    <tr><td>CCE003</td><td>8</td><td>20</td><td>48</td></tr>
    <tr><td>CCE004</td><td>10</td><td>30</td><td>38</td></tr>
    <tr><td>CCE005</td><td>7</td><td>20</td><td>50</td></tr>
  </table>
  ```
* **`colspan`** → Merge table colums.
* **`rowspan`** → Merge table rows.
  ```html
    <table border="1" cellpadding="5" cellspacing="0">
        <tr><th colspan="10">Web Programming Lab Records</th></tr>
        <tr>
            <th rowspan="2">Std Id</th>
            <th colspan="2">Lab-01</th>
            <th colspan="2">Lab-02</th>
            <th colspan="2">Lab-03</th>
            <th colspan="2">Total</th>
            <th rowspan="2">Final<br>(attendacne % marks)</th>
        </tr>
        <tr>
            <th>Attend</th><th>Marks</th>
            <th>Attend</th><th>Marks</th>
            <th>Attend</th><th>Marks</th>
            <th>Attend</th><th>Marks</th>
        </tr>
        <tr>
            <td>CCE001</td>
            <td>Y</td><td>10</td>
            <td>Y</td><td>10</td>
            <td>Y</td><td>10</td>
            <td>3</td><td>30</td>
            <td>10</td>
        </tr>
        <tr>
            <td>CCE002</td>
            <td>Y</td><td>10</td>
            <td>N</td><td>00</td>
            <td>Y</td><td>10</td>
            <td>2</td><td>20</td>
            <td>7</td>
        </tr>
        <tr>
            <td>CCE003</td>
            <td>Y</td><td>00</td>
            <td>N</td><td>00</td>
            <td>Y</td><td>10</td>
            <td>2</td><td>10</td>
            <td>4</td>
        </tr>
    </table>
  ```
---

#### Lists
* **`<ul>`** → Unordered list (bullets).
* **`<ol>`** → Ordered list (numbers).
* **`<dl>`** → Description/Definition list (indented).
  * **`<dt>`** → Definition title
  * **`<dd>`** → Definition data
* **`<li>`** → List item.

* **Ordered List**
  ```code
    <ol>
      <li>Step-1</li>
      <li>Step-2</li>
      <li>Step-3</li>
    </ol>
  ```
  - defining the type: (types: 1, A, a, I, i)
      ```code
        <ol type="A">
          <li>Step-1</li>
          <li>Step-2</li>
          <li>Step-3</li>
        </ol>
      ```

* **Unordered List**
  ```code
    <ul>
      <li>Step-1</li>
      <li>Step-2</li>
      <li>Step-3</li>
    </ul>
  ```

* **Definition List**
  ```code
    <dl>
      <dt>HTML</dt>
        <dd>HyperText Markup Language</dd>
      <dt>CSS</dt>
        <dd>Cascading Style Sheets</dd>
    </dl>
  ```

* **Nested List**
  ```code
    <h3>Computer Primary Components</h3>
    <ol>
      <li>Input Device
        <ol type="a">
          <li>Direct Input
            <ul>
              <li>Scanner</li>
            </ul>
          </li>
          <li>Indirect Input
            <ul>
              <li>Keyboard</li>
              <li>Mouse</li>
            </ul>
          </li>
        </ol>
      </li>
      <li>Output Device</li>
      <li>Processing Device</li>
      <li>Storage Device</li>
    </ol>
  ```
  ---




  ---
  ### Semantic HTML
* **`<article>`** → Defines independent piece of content. Can contain - headings, paragraph, ...
  <article>
    <h2>Article</h2>
    <p>Article used for things like - blog posts, new articles, or any block of content that can stand alone.</p>
    <p>Article indicates this chunk is a meaningful and complete content.</p>
  </article>
