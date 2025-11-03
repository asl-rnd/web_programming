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
* **`<iframe>`** → Embeds another HTML page (internal or external).
  ```html
  <iframe src="index.html" width="600" height="400"></iframe>
  ```
---

#### Multimedia
* **`<audio>`** → Links to audio files.
* **`<video>`** → Links to video files.
  * **`<source>`** → Links media files inside `<audio>`, `<video>`.
  * **`<track>`** → Links subtitle files (.vtt) to a `<video>`.
  ```html
  <audio src="sound.mp3" controls></audio>
  <video src="movie.mp4" controls></video>
  <video controls>
    <source src="movie.mp4" type="video/mp4">
  </video>
  <video controls>
    <source src="movie.mp4" type="video/mp4">
    <track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English">
  </video>
  ```
* **`<object>`** → for embedding external resources like PDFs.
  ```html
  <object data="Web Prog Lab Manual_Au-24.pdf" type="application/pdf" width="600" height="400"></object>
  ```

#### Lists
* **`<ul>`** → Unordered list (bullets).
* **`<ol>`** → Ordered list (numbers).
* **`<dl>`** → Description/Definition list (indented).
  * **`<dt>`** → Definition title
  * **`<dd>`** → Definition data
* **`<li>`** → List item.

* **Ordered List**
  ```html
  <ol>
    <li>Step-1</li>
    <li>Step-2</li>
    <li>Step-3</li>
  </ol>
  ```
  - defining the type: (types: 1, A, a, I, i)
      ```html
      <ol type="A">
        <li>Step-1</li>
        <li>Step-2</li>
        <li>Step-3</li>
      </ol>
    ```

* **Unordered List**
  ```html
  <ul>
    <li>Step-1</li>
    <li>Step-2</li>
    <li>Step-3</li>
  </ul>
  ```

* **Definition List**
  ```html
  <dl>
    <dt>HTML</dt>
      <dd>HyperText Markup Language</dd>
    <dt>CSS</dt>
      <dd>Cascading Style Sheets</dd>
  </dl>
  ```

* **Nested List**
  ```html
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

#### Forms
* **`<form>`** → The container element for all form controls.
  * **`action`**: Specifies where to send the form data when a form is submitted (e.g., a URL).
  * **`method`**: Specifies the HTTP method used to send the data (`GET` or `POST`).
* **`<input>`** → Used to create different types of input fields (text, buttons, checkboxes, etc.).
  * **`type`**: Defines the kind of input (e.g., text, password, submit, radio, checkbox).
  * **`name`**: Essential for identifying the data when it's submitted to the server.
  * **`value`**: The initial value of the input field.
  * **`placeholder`**: A short hint displayed in the input field before the user enters a value.
* **`<label>`** → Provides a descriptive label for an input element.
  * **`for`**: Specifies which form element the label is bound to (the value must match the target input's `id`).
* **`<textarea>`** → A multi-line text input control, ideal for long comments or messages.
* **`<button>`** → A clickable button, usually used to submit or reset the form.
  * **`type`**: Defines the button's behavior (`submit`, `reset`, or `button`).
* **`<select>`** → Creates a drop-down list.
  * **`<option>`**: Defines an available option within the `<select>` list.

```html
<form action="#" method="post">
  <label for="fname">First Name:</label>
  <input type="text" id="fname" name="fname" placeholder="Enter first name"><br><br>

  <label>Email:</label>
  <input type="email" name="email"><br><br>

  <label>Password:</label>
  <input type="password" name="password"><br><br>

  <label>Gender:</label>
  <input type="radio" name="gender" value="male">Male
  <input type="radio" name="gender" value="female">Female<br><br>

  <label>Hobbies:</label>
  <input type="checkbox" name="hobby" value="Reading">Reading
  <input type="checkbox" name="hobby" value="Sports">Sports<br><br>

  <label>Country:</label>
  <select name="country">
      <option>Bangladesh</option>
      <option>India</option>
      <option>Nepal</option>
  </select><br><br>

  <label>Message:</label><br>
  <textarea rows="3" cols="30"></textarea><br><br>

  <label>Upload File:</label>
  <input type="file"><br><br>

  <input type="submit" value="Submit">
  <input type="reset" value="Reset">
</form>
```

#### Semantic HTML
* **`nav`** →
* **`header`** →
* **`main`** →
  * **`section`** →
  * **`div`** →
* **`footer`** →

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Programming | Id</title>
</head>
<body>
    <nav bgcolor="black" style=" background:black; padding: 20px; top:o; width:100%; z-index:1000;">
        <a href="#welcome" style="color: white; margin-right:20px;">Welcome</a>
        <a href="#links-images" style="color: white; margin-right:20px;">Links and Images</a>
        <a href="#local-hosting" style="color: white; margin-right:20px;">Local Hosting</a>
        <a href="#multimedia" style="color: white; margin-right:20px;">Multimedia</a>
        <a href="#lists" style="color: white; margin-right:20px;">Lists</a>
        <a href="#tables" href="tables" style="color: white; margin-right:20px;">Tables</a>
        <a href="#forms" style="color: white; margin-right:20px;">Forms</a>

        <span style="float: right;">
            <a href="index1.html" style="color: white; margin-right:20px;">1st Class</a>
            <a href="index3.html" style="color: white; margin-right:20px;">2nd Class</a>
            <a href="index5.html" style="color: white; margin-right:20px;">3rd Class</a>
            <a href="index6.html" style="color: white; margin-right:20px;">4th Class</a>
            <a href="index7.html" style="color: white; margin-right:20px;">5th Class</a>
            <a href="index8.html" style="color: white; margin-right:20px;">6th Class</a>
            <a href="index9.html" style="color: white; margin-right:20px;">7th Class</a>
            <a href="https://github.com/asl-rnd/web_programming/blob/main/web_programming_lab_manual(autumn-25).md" style="color: rgb(189, 189, 189); margin-right:20px;">Web Programming Lab Manual</a>
        </span>
    </nav>

    <header>
        <div style="background-color: azure; padding: 20px; margin-bottom: 20px;">
            <h1 id="welcome" style="text-align: center;">Welcome to Web Technology</h1><hr>
            <p>This is the practice directory for the web technology course of CCE-000 student.</p>
            <p>
                Here you will find various resources and exercises to enhance your web development skills.
                The main purpose of the course is to know A to Z of web technology from design to development to client to server side implementation.
            </p>
            <p>Feel free to explore and practice!<br>Any query! Feel free to ask.</p>
        </div>
    </header>
    
    <main>
        <section>
            <div style="background-color: rgb(255, 241, 240); padding: 20px; margin-bottom: 20px;">
                <h1 id="links-images">Links and Images</h1><hr>

                <a href="https://www.wikipedia.org/">Wikipedia</a>
                <p>For more details click <a href="https://www.wikipedia.org/">here</a>.</p>    <!-- Opens in the same tab -->
                <p>For more details click <a href="https://www.wikipedia.org/" target="_blank">here</a>.</p>    <!-- Opens in a new tab -->
                <p>Our last class was <a href="index.html">this</a>.</p>    <!-- Another html file -->

                <img src="img-1.jpg" height="400px" width="auto">
                <img src="img-10.jpg" height="400px" width="700px">
            </div>
        </section>

        <section>
            <div id="local-hosting" style="background-color: #ADD8E6; padding: 20px; margin-bottom: 20px;">
                <h1>Local Hosting</h1><hr>
                <p>Flask is a Python framework that makes it easy to set up a local web server on your computer. 
                Using the provided code, it serves an index.html file, turning your machine into a temporary 
                web host. The app.run command starts this server, allowing you to access your webpage through a 
                local IP address like 127.0.0.1:5000 in a browser. The 0.0.0.0 host setting allows others on the
                same network to view it, useful for sharing without needing to upload the files. 
                This process simulates a basic live website, helping you test your front-end code locally 
                before deployment.</p>

                <p>For more details check <a href="https://github.com/asl-rnd/web_programming/blob/main/local_hosting.md" target="_blank"> this</a>.</p>
            </div>
        </section>

        <section>
            <div style="background-color: #e6e6fa; padding: 20px; margin-bottom: 20px;">
                <h1 id="multimedia">Multimedia</h1><hr>
                <p>Download Sample Audio and Video Files from <a href="https://file-examples.com/" target="_blank"><b>(file examples)</b></a>.</p>
                
                <h2>Audio File</h2>
                <audio src="static/sample_audio.mp3" controls></audio>
                <audio controls>
                    <source src="static/sample_audio.mp3" type="audio/mp3">
                </audio>

                <h2>Video File</h2>
                <video src="static/sample_video.mp4" controls></video>
                <video controls width="600px" height="400px">
                    <source src="static/sample_video.mp4" type="video/mp4">
                </video>

                <h2>Objects (PDF)</h2>
                <object data="static/Web Prog Lab Manual_Au-24.pdf" type="application/pdf" width="600px" height="600px"></object>
            </div>
        </section>

        <section>
            <div style="background-color:#FFFFE0; padding: 20px; margin-bottom: 20px;">
                <h1 id="lists">Lists</h1><hr>

                <h2>Unordered List</h2>
                <h3>Web Programming Languages</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>Python</li>
                    <li>SQL</li>
                </ul>

                <h2>Ordered List</h2>
                <h3>Web Programming Learning Paradism</h3>
                <ol>
                    <li>Client Side</li>
                    <li>Server Side</li>
                    <li>Database</li>
                </ol>

                <h2>Definition List</h2>
                <h3>Key : Description</h3>
                <dl>
                    <dt>Client Side
                        <dd>Everything that happens on the user side (browser)</dd>
                    </dt>
                    <dt>HTML</dt>
                        <dd>HyperText Markup Language</dd>
                    <dt>CSS</dt>
                        <dd>Cascading Style Sheets</dd>
                    <dt>JS</dt>
                        <dd>JavaScript</dd>
                    <dt>Server Side</dt>
                        <dd>Everything that happens on the server side (server)</dd>
                    <dt>Python</dt>
                        <dd>Programming language</dd>
                    <dt>Database</dt>
                        <dd>Structured collection of data</dd>
                    <dt>SQL</dt>
                        <dd>Structured Query Language</dd>
                </dl>

                <h2>Nested List</h2>
                <h3>List Inside List</h3>
                <ul>
                    <li>Client Side
                        <ol type="A">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                        </ol>
                    </li>
                    <li>Server Side
                        <ol type="I">
                            <li>Python</li>
                            <li>Flask/Django</li>
                        </ol>
                    </li>
                    <li>Database
                        <ol>
                            <li>MySQL</li>
                            <li>PostgreSQL</li>
                            <li>SQLite</li>
                        </ol>
                    </li>
                </ul>
            </div>
        </section>

        <section>
            <div style="background-color:#fdbcbc; padding: 20px; margin-bottom: 20px;">
                <h1 id="tables">Tables</h1><hr>
        
                <h3>Table One</h3>
                <table border="1">
                    <tr><th>Std Id</th><th>Attance</th><th>Mid</th><th>Final</th></tr>
                    <tr><td>CCE001</td><td>10</td><td>24</td><td>40</td></tr>
                    <tr><td>CCE002</td><td>10</td><td>25</td><td>44</td></tr>
                    <tr><td>CCE003</td><td>8</td><td>20</td><td>48</td></tr>
                    <tr><td>CCE004</td><td>10</td><td>30</td><td>38</td></tr>
                    <tr><td>CCE005</td><td>7</td><td>20</td><td>50</td></tr>
                </table>

                <h3>Table Two</h3>
                <table border="1" cellpadding="5" cellspacing="0">
                    <caption><b>Lab Performance Evaluation</b></caption>
                    <thead>
                        <tr>
                            <th colspan="2">Student Info</th>
                            <th colspan="3">Lab Performance</th>
                            <th rowspan="2">Average</th>
                        </tr>
                        <tr>
                            <th>Std Id</th>
                            <th>Name</th>
                            <th>Lab-1</th>
                            <th>Lab-2</th>
                            <th>Lab-3</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CCE001</td>
                            <td>Alex Max</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                        </tr>
                        <tr>
                            <td>CCE002</td>
                            <td>Alex Min</td>
                            <td>--</td>
                            <td>00</td>
                            <td>10</td>
                            <td>3</td>
                        </tr>
                        <tr>
                            <td>CCE003</td>
                            <td>Alex Avg</td>
                            <td>10</td>
                            <td>--</td>
                            <td>10</td>
                            <td>7</td>
                        </tr>
                        <tr>
                            <td rowspan="2"><b>Summary</b></td>
                            <td><strong>Avg</strong></td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><strong>Min</strong></td>
                            <td>10</td>
                            <td>10</td>
                            <td>10</td>
                            <td></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="6"><b>Web Programming Sessional (CCE-1206)</b></td>
                        </tr>
                    </tfoot>
                </table>
                <br>

                <h3>Test Table</h3>
                <table border="1" cellpadding="5" cellspacing="0">
                    <tr><th colspan="10">Web Programming Lab Records</th></tr>
                    <tr>
                        <th rowspan="2">Std Id</th>
                        <th colspan="2">Lab-01</th>
                        <th colspan="2">Lab-02</th>
                        <th colspan="2">Lab-03</th>
                        <th colspan="2">Total</th>
                        <th rowspan="2">Final Marks<br>(Attendance % marks)</th>
                    </tr>
                    <tr>
                        <th>Present</th><th>Marks</th>
                        <th>Present</th><th>Marks</th>
                        <th>Present</th><th>Marks</th>
                        <th>Total Present</th><th>Total Marks</th>
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
            </div>
        </section>

        <section>
            <div style="background-color: #E0FFFF; padding: 20px; margin-bottom: 20px;">
                <h1 id="forms">Forms</h1><hr>

                <form action="#", method="post">
                    <label>Name: </label>
                    <input placeholder="Enter your name"><br><br>

                    <label>Email: </label>
                    <input required><br><br>

                    <label>Password: </label>
                    <input><br><br>

                    <label>Gender: </label>
                    <input type="radio" name="gender" value="male">Male
                    <input type="radio" name="gender" value="female">Female<br><br>
                    
                    <label>Hobbies: </label>
                    <input type="checkbox" name="hobby" value="reading">Reading
                    <input type="checkbox" name="hobby" value="sports">Sports
                    <input type="checkbox" name="hobby" value="gardening">Gardening<br><br>

                    <label>Hobbies: </label>
                    <select>
                        <option>Reading</option>
                        <option>Sports</option>
                        <option>Gardening</option>
                    </select><br><br>

                    <label>Message: </label><br>
                    <textarea rows="4" cols="30"></textarea><br><br>

                    <input type="submit" value="Submit">
                    <input type="reset" value="Reset">
                </form>
            </div>
        </section>
    </main>
    
    <footer>
        <div style="background-color: lightgray; padding: 10px; text-align: center;">
            <p>&copy; 2025 Web Programming (CCE-1206). All rights reserved - Abs_Sayem</p>
        </div>
    </footer>
</body>
</html>
```

---


# CSS (Cascading Style Sheet)
### Inline CSS:
- applied directly to the HTML element using the style attribute.
  ```html
  <p style="text-align: justify;">This paragraph contains inline CSS.</p>
  ```
### Internal CSS:
- defined within the <style> tag in the <head> section of the HTML document.
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <style>
          h2 { text-align: center; color: red; }
      </style>
  </head>
  <body>
      <h2>This heading is with internal CSS.</h2>
  </body>
  ```
### External CSS:
- defined in a seperate CSS file and linked to the HTML document using the <link> tag.
    - `index.html`
    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <h2>This heading is with internal CSS.</h2>
    </body>
    ```
    - `style.css`
    ```css
    h2 {
        text-align: center;
        color: red;
    }
    ```
---
## CSS Selectors:
### Element Selector:
- Select all instances of a particular HTML element.
  ```css
  p {
      color: lightblue;
  }
  ```
### Class Selector:
- Selects elements with a specific class attribute.
  ```css
  .container {
      background-color: silver;
  }
  ```
### ID Selector:
- Selects a single element with a specific id attribute.
  ```css
  #navbar {
      background-color: pink;
  }
  ```
---

## CSS Typography and CSS Box Model
### Typography
- **Attribures**
    - color --> sets font color
    - font-seze --> sets the size of the font
    - font-weight --> sets the thickness of the font
    - font-style --> sets the font style
- **Example**
  ```css
  p {
      color: lightblue;
      font-size: 18px;
      font-weight: 700;
      font-style: italic;
  }
  ```
- **Attribures**
    - content --> includes the content's height and width<br>
    - border --> line that surrounds the content, can have specific - width, style and color<br>
    - padding --> space between content and border<br>
    - margin --> space between the border of the content and surrounding elements. 
- **Example**
  ```css
  .box {
      width: 200px;
      height: 100px;
      border: 2px solid gray;
      padding: 20px;
      margin: 10px;
  }
  ```

## CSS Positioning
- Allows to place elements precisely in desired place.
- **Properties:** static, relative, absolute, fixed, sticky.
- The properties offer flexibility for organizing content.
- For Example,
    - **`relative`** - moves an element to its normal position
    - **`absolute`** - places an element based on its closest positioned ancestor.

### `Static` Positioning:
- The default position behavior of an element. If no position property is diclered, the element considered it as default position: **static**.

### `Relative` Positioning:
- The element will move relative to its normal/actual position.
- Allows the use of **top**, **bottom**, **left** and **right** properties for adjustment.
  ```css
  .one {
      background-color: powderblue;
      position: relative;
      right: 50px;
  }
  ```

### `Absolute` Positioning:
- The element will move relativele to the nearest positioned (parent) element.
- If none, it positioned relative to the initial containing block (usually - the <html> element).
  ```css
  .one {
      background-color: powderblue;
      position: absolute;
      top: 50px;
      left: 0px;
  }
  ```

### `Fixed` Positioning:
- The element will be positioned relative to the browser window.
- Remain fixed even when the page is being scrolled.
  ```css
  .navbar {
      background-color: gray;
      position: fixed;
      top: 0px;
      width: 100%;
      text-align: center;
  }
  ```

### `Sticky` Positioning:
- The element acts like relative positioning until the element reaches a specified point during scrolling, then it become `fixed`.
  ```css
  .sticky-navbar {
      background-color: gray;
      position: sticky;
      top: 0px;
  }
  ```

### `Z-Index` Positioning:**
- Z-Index specifies the stack order of an element.
- Higher z-index valued element is displayed in front of lower valued element.
  ```css
  #first {
      background-color: gray;
      position: absolute;
      z-index: -1
      top: 30px;
      left: 30px;
  }
  #second {
      background-color: maroon;
      position: absolute;
      top: 10px;
      left: 10px;
  }
  #third {
      background-color: gray;
      position: absolute;
      z-index: -2
      top: 50px;
      left: 50px;
  }
  ```

## CSS Flexbox and Grid
### FlexBox
- One dimensional layout model, designed for arranging elements in a row or in a column.
- Simplifly the complex layout. **How?** - Elements can dynamically adjust their size and position within a container, depending on the available space.

#### Display Flex:
- defines a flex container; enables a flex context for all its direct children.
  ```css
  .container {
      display: flex;
  }
  ```

#### Flex Direction:
- defines the direction of the flex items, places in the flex container.
  ```css
  .container {
      display: flex;
      flex-direction: row | row-reverse | column | column-reverse;
  }
  ```

#### Justify Content:
- distributes extra free space left over when all the flex items on a line are inflexible or flexible but have reached their maximum size.
  ```css
  .container {
      display: flex;
      justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
  }
  ```

#### Align Items:
- defines the default behavior for how flex items are laid out along the cross-axis on the current line.
  ```css
  .container {
      display: flex;
      align-items: stretch | flex-start | flex-end | center | baseline;
  }
  ```

#### Gap:
- gap controls the space between flex items.
  ```css
  .container {
      display: flex;
      gap: 10px;
      gap: 10px 20px; /*row-gap column-gap*/
      row-gap: 10px;
      column-gap: 20px;
  }
  ```

#### **Flexbox Example**
- In **`index.html:`**
  ```html
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <title>CSS Flex Document</title>
          <link rel="stylesheet" href="style.css" />
      </head>
      <body>
          <div class="parent">
              <div class="child">
                  <p>Flexbox is a one-dimensional layout model, primarily designed for arranging elements in a row or in a column.</p>
              </div>
              <div class="child">
                  <p>
                      Flexbox is a one-dimensional layout model, primarily designed for arranging elements in a row or in a column.
                  </p>
              </div>
              <div class="child">
                  <p>Flexbox is a one-dimensional layout model, primarily designed for 
                      arranging elements in a row or in a column.</p>
              </div>
              <div class="child">
                  <p>
                      Flexbox is a one-dimensional layout model, primarily designed for 
                      arranging elements in a row or in a column.
                  </p>
              </div>
          </div>
      </body>
  </html>
  ```
- In **`style.css:`** 
  ```css
  .parent {
      display: flex;
      flex-direction: row;
      gap: 10px;
      padding: 10px;
      height: 600px;
      background-color: tan;
      align-items: center;
      justify-content: center;
  }
  .child {
      border: 2px solid gray;
      padding: 10px;
      width: 200px;
  }
  ```
  
---

### Grid
- Two dimensional layout model; creates grid structures consisting oḟ rows and columns.
- Excels at creating complex, grid-based layouts, such as those found in magazines, newspaper, and responsive web applications.
  ```css
  .container {
      display: grid;
  }
  ```

#### Grid Columns and Rows
- defines the columns and rows of the grid with a space-separated list of values.
  ```css
  .container {
      display: grid;
      grid-template-columns: 300px 400px 500px;
      grid-template-columns: 1fr 1fr 1fr; /* Each element will take the same width */
      grid-template-columns: repeat(3, 1fr); /* Same as last */
      grid-template-rows: 100px 1fr max-content;
      grid-template-rows: min-content 1fr min-content;
  }
  ```

#### Repeat
- if the definition contains repeating parts, it can be done using the **repeat()** natation to stramline things.
  ```css
  .container {
      display: grid;
      grid-template-columns: repeat(3, 100px);
  }
  ```

#### Grid Example
- In **`index.html:`**
  ```html
  <!DOCTYPE html>
  <html lang="en">
      <head>
          <title>CSS Grid Document</title>
          <link rel="stylesheet" href="style.css" />
      </head>
      <body>
          <div class="parent">
              <div class="child">
                  <p>Grid is a two-dimensional layout model, primarily designed for arranging elements in a rows and columns.</p>
              </div>
              <div class="child">
                  <p>
                      Grid is a two-dimensional layout model, primarily designed for arranging elements in a rows and columns.
                  </p>
              </div>
              <div class="child">
                  <p>Grid is a two-dimensional layout model, primarily designed for 
                      arranging elements in a rows and columns.</p>
              </div>
              <div class="child">
                  <p>
                      Grid is a two-dimensional layout model, primarily designed for 
                      arranging elements in a rows and columns.
                  </p>
              </div>
              <div class="child">
                  <p>
                      Grid is a two-dimensional layout model, primarily designed for 
                      arranging elements in a rows and columns.
                  </p>
              </div>
              <div class="child">
                  <p>
                      Grid is a two-dimensional layout model, primarily designed for 
                      arranging elements in a rows and columns.
                  </p>
              </div>
          </div>
      </head>
  </html>
  ```
- In **`style.css:`** 
  ```css
  .parent {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr;
      gap: 10px;
      padding: 20px;
      height: 400px;
      background-color: tan;
  }
  .child {
      border: 2px solid gray;
      padding: 10px;
      font-size: 16px;
      width: auto;
  }
  ```

