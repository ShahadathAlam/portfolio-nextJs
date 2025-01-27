<div align="center">
  <br />
    <a href="https://youtu.be/FTH6Dn3AyIQ" target="_blank">
      <img src="https://github.com/adrianhajdin/portfolio/assets/151519281/c6ca3c03-6cb7-4f67-a9b9-a73da5bfa0d8" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Framer-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="framer" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center">A Modern Next.js Portfolio</h3>
  <div align="center">
     You can view the live version of the portfolio app by visiting <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>Shahadath's Portfolio</b></a> . Feel free to explore the features of the portfolio and see how everything works in the live environment.
    </div>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code to Copy](#snippets)
6. 🔗 [Assets](#links)
7. 🚀 [Challenges](#challenges)
8. ✅ [Deployment](#deployment)

## <a name="introduction">🤖 Introduction</a>

Built with Next.js for handling the user interface, Three.js for rendering 3D elements, Framer motion for beautiful animations, and styled with TailwindCSS, this portfolio demonstrates the developer's skills in a unique manner that creates a lasting impact.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Three.js
- Framer Motion
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Hero**: Captivating introduction featuring a spotlight effect and dynamic background.

👉 **Bento Grid**: Modern layout presenting personal information using cutting-edge CSS design techniques.

👉 **3D Elements**: Interactive 3D design elements, such as a GitHub-style globe and card hover effects, adding depth and engagement.

👉 **Testimonials**: Dynamic testimonials area with scrolling or animated content for enhanced engagement.

👉 **Work Experience**: Prominent display of professional background for emphasis and credibility.

👉 **Canvas Effect**: Innovative use of HTML5 canvas to create visually striking effects in the "approaches" section.

👉 **Responsiveness**: Seamless adaptability across all devices, ensuring optimal viewing experience for every user.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/portfolio.git
cd portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>data/index.ts</code></summary>

```typescript
export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },

  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title:
      "Currently working on developing a clone of the Threads app, focusing on replicating its features and functionality with modern web technologies",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Anonymous Message App",
    des: "A secure and private web application built with Next.js, enabling users to send and receive anonymous messages while maintaining their privacy.",
    img: "/p1.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodb.svg",
      "/mongoose.svg",
      "/zod.svg",
      "/nextauth.svg",
    ],
    link: "/ui.anonymous-message.com",
  },
];

export const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin vitae turpis nec leo scelerisque convallis. Suspendisse potenti. Nullam ac libero ut nulla tempus fermentum.",
    name: "Jane Doe",
    title: "Lead Developer",
  },
  {
    quote:
      "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus euismod, turpis nec ultricies aliquet, justo neque fermentum metus, at egestas est felis eget eros.",
    name: "John Doe",
    title: "Senior Designer",
  },
  {
    quote:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer consequat lacus vitae orci bibendum, nec interdum risus scelerisque.",
    name: "Alex Johnson",
    title: "Junior Developer",
  },
  {
    quote:
      "Cras tincidunt lectus nec dui vehicula, vitae cursus erat fermentum. Curabitur ultrices justo ut mauris tempor, quis tincidunt libero condimentum.",
    name: "Chris Lee",
    title: "Product Manager",
  },
  {
    quote:
      "Fusce mollis ligula ac sapien tincidunt, non vehicula erat pulvinar. Quisque fringilla erat vitae neque vehicula, id fermentum arcu tincidunt.",
    name: "Taylor Smith",
    title: "Creative Director",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Web Developer (Personal Projects)",
    desc: "Built several web applications using modern technologies including React, Next.js, Tailwind CSS, and Prisma. Focused on creating responsive, user-friendly applications with a strong emphasis on clean, maintainable code.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Frontend Development with React",
    desc: "Developed interactive user interfaces using React, Redux, and React Query. Created dynamic applications that handle complex data and improve user experiences.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    desc: "Worked on full-stack projects with Next.js, MongoDB, and Prisma. Gained experience in building backend functionality and integrating databases to manage user data and app content.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Data Structures & Algorithms (C++)",
    desc: "Currently enhancing problem-solving skills by practicing Data Structures and Algorithms in C++ and solving challenges on LeetCode to improve logical and analytical thinking.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/ShahadathAlam",
  },
  {
    id: 2,
    img: "/leetcode.svg",
    link: "https://leetcode.com/u/shahadathalam/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/mdshahadathalam/",
  },
];
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```ts
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border !scroll-smooth;
  }
  body {
    @apply bg-background text-foreground;
  }
  button {
    @apply active:outline-none;
  }
}

@layer utilities {
  .heading {
    @apply font-bold text-4xl md:text-5xl text-center;
  }

  .black-gradient {
    background: linear-gradient(90deg, #161a31 0%, #06091f 100%);
  }
}
```

</details>

<details>
<summary><code>Linear Gradient</code></summary>

```js
style={{
        //   add these two
        //   you can generate the color from here https://cssgradient.io/
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
```

</details>

## <a name="links">🔗 Assets</a>

Assets used in the project can be found [here](https://drive.google.com/file/d/1ZmtiMilUYTp1wkiXWMFX6AUk-msE981-/view?usp=sharing)

## <a name="challenges">🚀 Challenges</a>

## Table of Contents

1. [Problem](#problem)
2. [Why the Problem Occurred](#why-the-problem-occurred)
3. [How the Problem Occurred](#how-the-problem-occurred)
4. [How the Problem Was Solved](#how-the-problem-was-solved)
5. [Key Takeaways](#key-takeaways)

## Problem

The `footer-grid.svg` was positioned in such a way that it interfered with user interactions on the page. Specifically, the `footer-grid.svg` was blocking the input field, making it unclickable and preventing users from typing into the field.

---

## Why the Problem Occurred

The issue occurred because the `footer-grid.svg` was styled as an absolutely positioned element and rendered on top of other elements, including the input field. As a result:

- The SVG acted as a "click-blocker," intercepting pointer events and preventing interactions with the input field beneath it.

---

## How the Problem Occurred

1. The `footer-grid.svg` was included inside a `<div>` with the following styles:
   - `absolute` positioning.
   - Positioned at the `left-0` and `bottom-0` to span across the full width of the page.
   - Given a `z-index` value higher than other elements (implicitly or explicitly).
2. The `<Image>` inside the `div` had `w-full` and `h-full` styles, ensuring it covered the full dimensions of its container.
3. Since the `footer-grid.svg` occupied the same space as the input field and was not transparent to pointer events, it blocked the user from interacting with the input field.

---

## How the Problem Was Solved

The issue was resolved by adding the `pointer-events: none;` CSS property to the `<div>` wrapping the `footer-grid.svg`. This ensures that the `footer-grid.svg` does not intercept any pointer events (such as clicks) and allows those events to pass through to the underlying elements.

### Final Code:

```jsx
<div className="absolute left-0 bottom-0 w-full min-h-96 opacity-30 pointer-events-none">
  <Image
    src="/footer-grid.svg"
    alt="grid"
    width={128}
    height={128}
    className="w-full h-full"
  />
</div>
```

### Explanation of Changes:

1. **`pointer-events-none`:**
   - This Tailwind class sets the `pointer-events` CSS property to `none`, making the `footer-grid.svg` and its container invisible to mouse interactions.
2. **Effect:**
   - Users can now click on the input field without any interference from the `footer-grid.svg`.

---

## Key Takeaways

1. **Understand Layering in CSS:**

   - Absolutely positioned elements with overlapping dimensions can block interactions with underlying elements.

2. **Use `pointer-events` Wisely:**

   - The `pointer-events` property is a useful tool for managing how elements interact with user input.
   - `pointer-events: none;` makes an element completely transparent to pointer events.

3. **Debugging Interaction Issues:**

   - Inspect overlapping elements in the browser's developer tools to identify what is blocking interactions.
   - Check the stacking context (`z-index`) and dimensions of the elements involved.

4. **Test Responsiveness:**
   - Ensure the fix works across different screen sizes and does not negatively impact the user experience.

## <a name="deployment">✅ Deployment</a>

Deploying the **Portfolio Project** on Vercel was mostly straightforward, but I encountered an issue related to the Node.js version. Here's the step-by-step explanation of the challenge and how I resolved it.

### Challenge:

After pushing the code to Vercel for deployment, I noticed that the deployment failed or didn't behave as expected. Upon checking the logs and testing the app locally, I realized that the issue was related to the version mismatch between the Node.js version I was using locally (v18.18.0) and the version Vercel was using (v22.x).

The application worked perfectly fine in my local development environment with Node.js v18.18.0, but Vercel defaulted to using Node.js v22.x, which led to the following potential issues:

- **Dependency Incompatibility**: Some dependencies might be using APIs or features specific to Node.js v18, and Node.js v22 could have different behaviors or breaking changes that were not compatible with the app.
- **Build Failures**: Some packages or build processes might not have been compatible with the Node.js v22 runtime.

### Solution:

To solve the issue and ensure consistency between my local environment and Vercel, I manually set the Node.js version in Vercel.

#### Steps Taken:

1. **Identifying the Node.js Version on Vercel**:

   - I checked the Node.js version Vercel was using by looking at the deployment logs and found that it was using version v22.x, which was not the version I was using locally.

2. **Changing the Node.js Version**:

   - To match the Node.js version I was using locally (v18.18.0), I went to the **Vercel Dashboard**.
   - In the project settings, I navigated to the **Environment** section.
   - There, under **Node.js Version**, I selected **18.x** from the available options.

3. **Redeploying the Application**:
   - After changing the Node.js version in Vercel settings, I redeployed the project.
   - The deployment succeeded without any issues, and the app worked as expected on Vercel.

### Conclusion:

The problem was simply a mismatch in the Node.js versions between my local environment and the Vercel deployment environment. By explicitly selecting the correct Node.js version in Vercel, I was able to resolve the issue and successfully deploy my portfolio project.

If you're facing similar issues, always make sure the Node.js version is consistent across your development and deployment environments. Setting the Node.js version in **Vercel Project Settings** ensures that your app runs with the expected version during deployment.

---
