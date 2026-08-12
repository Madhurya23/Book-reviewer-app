# Fae Follio 📚✨

### A React-Based Book Discovery & Review Application

**Fae Follio** is a React-based web application designed for readers to explore books across different genres through a visually engaging and interactive interface.

Users can browse curated book collections, view book descriptions and ratings, and **access downloadable PDF versions of books**. The application also includes user authentication, password recovery, Google Sign-In, and a contact system.

---

## 🧚 About Fae Follio

Fae Follio is built around the idea of making book discovery more enjoyable and accessible.

The application provides a collection of books organized by genre, allowing users to explore different categories and discover titles through a visually focused interface.

Users can:

* 📚 Explore books across multiple genres
* 🔍 Browse curated book collections
* 📖 View book covers, authors, blurbs, and ratings
* 📥 **Download available book PDFs**
* 🔐 Create an account and log in
* 🔑 Reset forgotten passwords
* 🌐 Sign in using Google
* 📩 Contact the application through the contact form

---

## ✨ Key Features

### 📚 Genre-Based Book Discovery

Fae Follio organizes books into multiple genres, including:

* Romance
* Horror
* Fantasy
* Adventure
* Mystery
* Sci-Fi
* Historical Fiction
* Non-fiction
* Graphic Novels
* Children's Books
* Greek Mythology
* Poetry

Each genre has its own visually themed page containing a curated selection of books.

### 📖 Book Information

Each book entry provides information such as:

* Book cover
* Title
* Author
* Blurb
* Rating

This gives users a quick overview of a book before choosing to explore it further.

### 📥 Book PDF Downloads

A major feature of Fae Follio is the ability to **access downloadable PDF versions of selected books**.

Each supported book includes a download option that directs the user to the corresponding PDF resource.

This makes the application not only a book-discovery platform but also a convenient way to access available digital copies.

> PDF availability depends on the external resources linked to individual books.

---

## 🔐 Authentication

Fae Follio uses **Firebase Authentication** to provide user account functionality.

### Supported Authentication Methods

* Email and password
* Google Sign-In

The application also includes:

* User registration
* Login
* Password visibility toggle
* Password reset
* Authentication error handling
* Session-based login state

After successful authentication, users are redirected to the genre section of the application.

---

## 🏠 Home Page

The home page introduces users to the Fae Follio experience through:

* Application branding
* Navigation menu
* Authors' sayings slideshow
* Trending books slideshow
* Application tagline
* Book exploration entry point

The navigation provides access to the main sections of the application, including **Home, Genres, About Us, and Contact**.

---

## 📚 Genre Browsing

The genre page presents different literary categories using visual genre cards.

Each card contains:

* Genre artwork
* Genre name
* Navigation link

Selecting a genre takes the user to its corresponding collection of books.

The structure also makes it easy to add additional genres and collections as the application grows.

---

## 📕 Book Collections

Genre pages contain curated collections of books.

For example, the Fantasy section includes:

* *The Lord of the Rings* — J.R.R. Tolkien
* *The Harry Potter Series* — J.K. Rowling
* *The Chronicles of Narnia* — C.S. Lewis
* *The Night Circus* — Erin Morgenstern
* *A Game of Thrones* — George R.R. Martin

Each book can provide its cover, title, author, description, rating, and **PDF download option**.

---

## 🧭 Application Flow

```text id="q9u2cw"
                    ┌──────────────────┐
                    │    Home Page     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │      Login       │
                    └────────┬─────────┘
                             │
                 ┌───────────┴───────────┐
                 │                       │
          Email / Password          Google Sign-In
                 │                       │
                 └───────────┬───────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │   Genre Page     │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Genre Collection │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │  Book Details    │
                    └────────┬─────────┘
                             │
                             ▼
                    ┌──────────────────┐
                    │ Download PDF     │
                    └──────────────────┘
```

---

## 📨 Contact System

Fae Follio includes a contact form through which users can submit:

* Name
* Email
* Message

Form submissions are handled using the **Web3Forms API**.

The application provides success and error feedback after submission.

---

## 🛠️ Technology Stack

### Frontend

* React.js
* JavaScript
* HTML
* CSS

### Routing

* React Router

### Authentication

* Firebase Authentication
* Google Sign-In

### UI & Icons

* React Icons

### External Services

* Web3Forms API

### Development Tools

* Git
* GitHub
* Visual Studio Code

---

## ⚙️ Installation & Setup

### Prerequisites

Make sure the following are installed:

* Node.js
* npm
* Git

### 1. Clone the Repository

```bash id="x0m5se"
git clone <your-repository-url>
cd Fae-Follio
```

### 2. Install Dependencies

```bash id="akzq7c"
npm install
```

### 3. Configure Firebase

Create a Firebase project and configure the required authentication settings.

Enable:

* Email/Password Authentication
* Google Authentication

Add the Firebase configuration to the application's Firebase configuration file.

### 4. Start the Development Server

```bash id="5eh4un"
npm start
```

Open the local development URL in your browser.

---

## 🎨 User Experience

Fae Follio focuses on creating a visually engaging experience for readers through:

* 📚 Book covers and genre artwork
* ✨ Themed genre pages
* 🖼️ Image slideshows
* 🧭 Interactive navigation
* 🔐 Simple authentication flow
* 📥 Convenient PDF access

The overall design combines book discovery with a playful, reader-focused aesthetic.

---

## 🎓 Group Project

**Fae Follio** was developed as a **group web development project by three members**.

**Project:** Fae Follio — Book Discovery & Review Application
**Project Type:** Group Project
**Team Size:** 3
**Technology:** React.js
**Authentication:** Firebase
**Application Type:** Web Application

---

### ✨ Fae Follio

*Bookish delights for fae at heart.*
