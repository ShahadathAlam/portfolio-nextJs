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
  // {
  //   id: 1,
  //   title: "3D Solar System Planets to Explore",
  //   des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
  //   img: "/p1.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
  //   link: "/ui.earth.com",
  // },

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
    link: "https://anonymous-message-lake.vercel.app/",
  },

  {
    id: 2,
    title: "Threads - Social Networking App",
    des: "A text-based application designed for users to share updates, join public conversations and create threads within communities. Threads facilitates real-time interactions and structured discussions through features such as nested comments, user profiles, community management and live notifications. Built with modern technologies for optimal performance and scalability.",
    img: "/p2.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/mongodb.svg",
      "/mongoose.svg",
      "/zod.svg",
    ],
    link: "https://threads-eta-six.vercel.app/",
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

// export const companies = [
//   {
//     id: 1,
//     name: "cloudinary",
//     img: "/cloud.svg",
//     nameImg: "/cloudName.svg",
//   },
//   {
//     id: 2,
//     name: "appwrite",
//     img: "/app.svg",
//     nameImg: "/appName.svg",
//   },
//   {
//     id: 3,
//     name: "HOSTINGER",
//     img: "/host.svg",
//     nameImg: "/hostName.svg",
//   },
//   {
//     id: 4,
//     name: "stream",
//     img: "/s.svg",
//     nameImg: "/streamName.svg",
//   },
//   {
//     id: 5,
//     name: "docker.",
//     img: "/dock.svg",
//     nameImg: "/dockerName.svg",
//   },
// ];

// export const workExperience = [
//   {
//     id: 1,
//     title: "Frontend Engineer Intern",
//     desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
//     className: "md:col-span-2",
//     thumbnail: "/exp1.svg",
//   },
//   {
//     id: 2,
//     title: "Mobile App Dev - JSM Tech",
//     desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp2.svg",
//   },
//   {
//     id: 3,
//     title: "Freelance App Dev Project",
//     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
//     className: "md:col-span-2", // change to md:col-span-2
//     thumbnail: "/exp3.svg",
//   },
//   {
//     id: 4,
//     title: "Lead Frontend Developer",
//     desc: "Developed and maintained user-facing features using modern frontend technologies.",
//     className: "md:col-span-2",
//     thumbnail: "/exp4.svg",
//   },
// ];
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
