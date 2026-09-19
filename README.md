# 🚀 Sayanjit Jana | Developer Portfolio

A modern, responsive, and interactive personal portfolio website built with **React, Vite, Tailwind CSS, Framer Motion, GSAP, Three.js**, and other modern web technologies.

This portfolio is designed to showcase my **skills, education, projects, experience, and contact information** through a clean and animated user interface.

---

## 🌐 Live Portfolio

**Portfolio:**
https://your-domain.com

> Replace the URL above with your deployed portfolio URL.

---

## ✨ Features

* 🎨 Modern and responsive UI
* 📱 Mobile, tablet, and desktop support
* ⚡ Fast development and production builds with Vite
* 🎬 Animated intro screen
* 🖱️ Custom cursor
* ✨ Animated particle background
* 🎵 Built-in music player
* 🎭 Framer Motion animations
* 🎞️ GSAP support for advanced animations
* 🌌 Three.js / React Three Fiber support
* 📚 Animated education timeline
* 🧑‍💻 Skills showcase
* 📩 Functional contact form using EmailJS
* 🔗 Social media integration
* 📄 Downloadable resume
* 🎯 Smooth interactive sections
* 🌈 Animated gradient backgrounds
* 📐 Fully responsive layout
* ♿ Form validation and accessibility attributes
* 🧹 ESLint configuration
* ⚛️ React Compiler support

---

# 🛠️ Tech Stack

### Frontend

* **React 19**
* **Vite 8**
* **Tailwind CSS 4**
* **Framer Motion**
* **GSAP**
* **React Icons**
* **React Router DOM**

### 3D & Animation

* **Three.js**
* **React Three Fiber**
* **@react-three/drei**
* **Framer Motion**
* **GSAP**

### Contact

* **EmailJS Browser SDK**

### Development Tools

* **ESLint**
* **React Compiler**
* **Vite**
* **Babel**

---

# 📂 Project Structure

```text
sayanjit-jana-portfolio/
│
├── public/
│   ├── Resume.pdf
│   ├── bgmi.mp3
│   └── blue.mp3
│
├── src/
│   │
│   ├── assets/
│   │   ├── Astra.png
│   │   ├── Logo.png
│   │   ├── avator.png
│   │   ├── capture.png
│   │   ├── img1.JPG
│   │   ├── img2.JPG
│   │   ├── p.png
│   │   ├── photo1.JPG
│   │   └── photo2.PNG
│   │
│   ├── components/
│   │   ├── CustomCursor.jsx
│   │   ├── IntroAnimation.jsx
│   │   ├── MusicPlayer.jsx
│   │   ├── Navbar.jsx
│   │   ├── OverlayMenu.jsx
│   │   └── ParticlesBackground.jsx
│   │
│   ├── sections/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

---

# 💻 Prerequisites

Before running the project, make sure you have:

* **Node.js 18+**
* **npm**
* **Git** (optional)
* **Visual Studio Code** or another code editor
* A modern web browser such as Chrome, Edge, Firefox, or Brave

Check your installed versions:

```bash
node --version
npm --version
```

---

# 🚀 Installation

## 1. Clone the Repository

If the project is hosted on GitHub:

```bash
git clone https://github.com/yourusername/your-repository.git
```

Then enter the project directory:

```bash
cd sayanjit-jana-portfolio
```

Or simply extract the ZIP file and open the extracted project folder.

---

## 2. Install Dependencies

Open the terminal inside the project folder and run:

```bash
npm install
```

This installs all dependencies defined in `package.json`.

---

# ▶️ Run the Project Locally

Start the Vite development server:

```bash
npm run dev
```

You should see something similar to:

```text
Local: http://localhost:5173/
```

Open the URL in your browser.

Your portfolio should now be running locally.

---

# 🏗️ Create a Production Build

Before deployment, create an optimized production build:

```bash
npm run build
```

The production files will be generated inside:

```text
dist/
```

---

# 🔍 Preview Production Build

After running the build command:

```bash
npm run preview
```

Vite will provide a local URL where you can test the production build.

---

# 🧹 Run ESLint

To check the project for ESLint issues:

```bash
npm run lint
```

---

# ⚙️ Available NPM Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `npm run dev`     | Start development server |
| `npm run build`   | Create production build  |
| `npm run preview` | Preview production build |
| `npm run lint`    | Run ESLint               |

---

# 📩 EmailJS Configuration

The contact form uses **EmailJS** to send messages without requiring a custom backend server.

The contact component reads the following environment variables:

```text
VITE_SERVICE_ID
VITE_TEMPLATE_ID
VITE_PUBLIC_KEY
```

## 1. Create an EmailJS Account

Create an account on EmailJS and configure:

* Email Service
* Email Template
* Public Key

## 2. Create `.env`

Create a file named:

```text
.env
```

in the project root:

```text
VITE_SERVICE_ID=your_service_id
VITE_TEMPLATE_ID=your_template_id
VITE_PUBLIC_KEY=your_public_key
```

Example:

```text
VITE_SERVICE_ID=service_xxxxxxx
VITE_TEMPLATE_ID=template_xxxxxxx
VITE_PUBLIC_KEY=xxxxxxxxxxxxxxx
```

> Do not commit your `.env` file to GitHub.

After changing environment variables, restart the Vite development server.

---

# 🎨 Customization

You can customize almost every part of the portfolio.

## 🏠 Home Section

Edit:

```text
src/sections/Home.jsx
```

You can modify:

* Name
* Introduction
* Profile content
* Buttons
* Images
* Animations
* Portfolio links

---

## 👨‍💻 About Section

Edit:

```text
src/sections/About.jsx
```

Update your:

* Introduction
* Biography
* Personal information
* Skills
* Interests

---

## 🛠️ Skills

Edit:

```text
src/sections/Skills.jsx
```

Add, remove, or modify your technologies and skills.

---

## 🎓 Education

Edit:

```text
src/sections/Education.jsx
```

The education section uses an animated timeline that changes its layout for desktop and mobile screens.

You can update:

* Degree
* Institution
* Duration
* Academic information
* Description

---

## 💼 Experience

The project contains:

```text
src/sections/Experience.jsx
```

The section can be enabled from `App.jsx` when you are ready to display it.

---

## 🚀 Projects

The project also contains:

```text
src/sections/Projects.jsx
```

You can enable it from:

```text
src/App.jsx
```

by importing and rendering the `Projects` component.

---

# 📧 Contact Section

The contact section is located at:

```text
src/sections/Contact.jsx
```

It includes:

* Name field
* Email field
* Service selection
* Project/message field
* Client-side validation
* EmailJS submission
* Success state
* Error state
* Animated contact image

---

# 🎵 Music Player

The portfolio includes a custom music player.

Music files are stored inside:

```text
public/
```

Currently included:

```text
bgmi.mp3
blue.mp3
```

The music player component is:

```text
src/components/MusicPlayer.jsx
```

You can replace the audio files with your own music.

Make sure your files are legally usable and appropriately licensed.

---

# ✨ Animations

The portfolio uses several animation technologies.

### Framer Motion

Used throughout the website for:

* Page animations
* Scroll animations
* Hover effects
* Cards
* Education timeline
* Social icons
* Image animations
* Intro animation

### GSAP

GSAP is included for advanced animation effects and can be used for additional interactive animations.

### CSS Animations

Custom animations are defined in:

```text
src/index.css
```

Including:

* Animated gradients
* Fade-in animations
* Floating effects
* Transition delays

---

# 🌌 Particle Background

The project includes an animated particle background component:

```text
src/components/ParticlesBackground.jsx
```

It is used to create an interactive visual background throughout the portfolio.

---

# 🖱️ Custom Cursor

The portfolio includes a custom cursor component:

```text
src/components/CustomCursor.jsx
```

This provides a more interactive desktop experience.

---

# 🎬 Intro Animation

The portfolio starts with an animated introduction screen.

Component:

```text
src/components/IntroAnimation.jsx
```

The intro is displayed until the animation finishes, after which the main homepage becomes available.

---

# 🧭 Navigation

The navigation system consists of:

```text
src/components/Navbar.jsx
src/components/OverlayMenu.jsx
```

The navigation is designed to work across desktop and mobile layouts.

---

# 🖼️ Assets

Images and other visual assets are located inside:

```text
src/assets/
```

Public files such as the resume and audio files are located inside:

```text
public/
```

### Resume

The current resume file is:

```text
public/Resume.pdf
```

Replace it with your latest resume while keeping the filename the same, or update the corresponding link in the code.

---

# 🌐 Deployment

The portfolio is a Vite application and can be deployed to several hosting platforms.

## Option 1: Vercel

1. Push the project to GitHub.
2. Open Vercel.
3. Import your GitHub repository.
4. Vercel should automatically detect Vite.
5. Set the required environment variables.
6. Deploy the project.

Build command:

```bash
npm run build
```

Output directory:

```text
dist
```

---

## Option 2: Netlify

1. Push the project to GitHub.
2. Open Netlify.
3. Import your repository.
4. Configure the build settings.

### Build command

```bash
npm run build
```

### Publish directory

```text
dist
```

Add the EmailJS environment variables in the Netlify environment-variable settings.

---

# 🌍 Custom Domain

You can connect a custom domain such as:

```text
sayanjitjana.com
```

or:

```text
sayanjitjana.dev
```

After deploying the website:

1. Open your hosting provider's domain settings.
2. Add your custom domain.
3. Update the DNS records at your domain provider.
4. Wait for DNS propagation.
5. Enable HTTPS if it is not automatically enabled.

---

# 🔐 Environment Variables

The project uses Vite environment variables for EmailJS.

Required variables:

```text
VITE_SERVICE_ID
VITE_TEMPLATE_ID
VITE_PUBLIC_KEY
```

Never commit your `.env` file.

A typical `.gitignore` should include:

```gitignore
node_modules/
dist/
.env
.env.local
.env.*.local
```

---

# 📱 Responsive Design

The portfolio is designed for:

* 📱 Mobile phones
* 📱 Tablets
* 💻 Laptops
* 🖥️ Desktop monitors

The education timeline, navigation, content sections, images, and animations adapt to different screen sizes.

---

# 📁 Main Components

| Component                 | Purpose                     |
| ------------------------- | --------------------------- |
| `Navbar.jsx`              | Website navigation          |
| `OverlayMenu.jsx`         | Mobile/overlay navigation   |
| `IntroAnimation.jsx`      | Initial portfolio animation |
| `CustomCursor.jsx`        | Custom desktop cursor       |
| `ParticlesBackground.jsx` | Animated background         |
| `MusicPlayer.jsx`         | Portfolio music player      |

---

# 📑 Main Sections

| Section          | Purpose                 |
| ---------------- | ----------------------- |
| `Home.jsx`       | Hero / landing section  |
| `About.jsx`      | Personal introduction   |
| `Skills.jsx`     | Technical skills        |
| `Education.jsx`  | Academic timeline       |
| `Experience.jsx` | Experience section      |
| `Projects.jsx`   | Project showcase        |
| `Contact.jsx`    | Contact form            |
| `Footer.jsx`     | Social links and footer |

---

# 🧩 Enabling Optional Sections

Some sections are currently disabled in `App.jsx`.

For example:

```jsx
// import Experience from "./sections/Experience";
// import Projects from "./sections/Projects";
```

and:

```jsx
{/* <Experience /> */}
{/* <Projects /> */}
```

To enable them, uncomment the corresponding imports and components.

---

# 🛠️ Development Workflow

A typical workflow is:

```bash
npm install
```

Start development:

```bash
npm run dev
```

Make your changes.

Then check for lint errors:

```bash
npm run lint
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

Then deploy the `dist` output through your preferred hosting platform.

---

# 📌 Important Notes

* Do not upload `node_modules` to GitHub.
* Do not commit `.env` files.
* Keep `package-lock.json` in the repository.
* Run `npm install` after cloning the project.
* Run `npm run build` before deployment to catch build errors.
* Keep your resume updated.
* Replace placeholder links with your own social profiles.
* Make sure images and audio files are appropriately licensed.

---

# 👨‍💻 Author

## Sayanjit Jana

B.Tech Computer Science & Engineering
Specialization: Artificial Intelligence & Machine Learning
Adamas University

### Connect With Me

* GitHub: https://github.com/codewithsayanjit
* LinkedIn: https://www.linkedin.com/in/sayanjit-jana-445997380
* Instagram: https://www.instagram.com/_._sayanjit_._jana_._
* X: https://x.com/SayanjitJana
* YouTube: https://www.youtube.com/@sayanjitjana93
* Email: [sayanjitjana373@gmail.com](mailto:sayanjitjana373@gmail.com)

---

# 📄 License

This project is intended for personal portfolio and educational purposes.

If you use this project as a template, customize the personal information, images, links, resume, and other content before deploying it publicly.

---

# ⭐ Support

If you find this portfolio useful or want to use it as inspiration for your own portfolio, consider giving the repository a ⭐ on GitHub.

---

## 🚀 Final Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repository.git

# Enter the project
cd sayanjit-jana-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Check the project
npm run lint

# Create production build
npm run build

# Preview production build
npm run preview
```

Then open:

```text
http://localhost:5173
```

🎉 **Customize → Build → Deploy → Go Live!**
