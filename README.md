#Express Blog App

A full-stack CRUD blog application built with Node.js, Express, and EJS.
Users can create, view, edit, and delete blog posts through a simple interface.

---

## Live Demo

Link-here:

---

## Features

- Create new blog posts
- View all posts
- View individual post details
- Edit existing posts
- Delete posts
- Reusable layout using EJS partials
- Basic form validation
- Clean MVC-style structure (routes + controllers)

---

## Tech Stack

- Node.js
- Express.js
- HTML5
- EJS
- CSS3

---

## Project Structure

Project-root/
|
|------- app.js
|------- blogPosts.js
|
|------- routes/
|**\_\_\_\_** blogRoutes.js
|
|
|------- views/
| |-------- partials/
|| |--------- header.ejs
|| |****\_**** footer.ejs
| |------ index.ejs
| |------ blog.ejs
| |**\_\_** createPost.ejs
|
|------- public/
| |**\_\_\_\_** styles/
| |**\_\_\_\_** main.css
|
|**\_\_\_** README.MD

## Architecture Overview

This project follows a simplified MVC-style structure:

- Routes define URL paths.
- Controllers handle request logic and data.
- Views (EJS templates) render dynamic HTML
- In-memory data storage is used for simplicity (data resets on server restart).

This separation improves readability and scalability compared to placing all logic inside a single file

---

## Installation & Setup

1. Clone the repository:

git clone https://github.com/your-username/your-repo-name.git

2. Navigate into the project directory:

cd your-repo-name

3. Install dependencies:

npm install

4. Start the server:

node app.js

5. Open your browser and visit:

Http://localhost:3000

---

## What I learned

- How to structure an Express application using routers and controllers
- How to use EJS for dynamic templating
- How to handle form submissions and POST requests
- How to reuse layout components with partials
- The importance of validating input and handling errors properly

---

## Future Improvements

- Add database integration (MongoDB)
- Implement user authentication
- Add search functionality

---

## License

This project is open-source and available for learning purposes.
