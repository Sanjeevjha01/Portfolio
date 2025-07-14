// app icons
import ecommerceBackend from "../assets/icons/ecommerce-backend.svg";
import ecommerce from "../assets/icons/ecommerce.svg";
import wine from "../assets/icons/wine.png";
import weather from "../assets/icons/weather.svg";
import userManagement from "../assets/icons/user-management.svg";
import todo from "../assets/icons/to-do-list.svg";
// app images
import weatherApp from "../assets/constantImages/weather.png";
import wineApp from "../assets/constantImages/wine.png";
import usermanagementApp from "../assets/constantImages/usermanagement.png";
import todoApp from "../assets/constantImages/todo.png";
import ecommerceApp from "../assets/constantImages/ecommerce.jpg";
import nodejsBackend from "../assets/constantImages/nodejsBackend.png";
// social icons
import whatsapp from "../assets/social/whatsApp.svg";
import instagram from "../assets/social/instagram.svg";
import linkedIn from "../assets/social/linkedIn.svg";
import facebook from "../assets/social/facebook.png";
// review images
import suraj from "../assets/reviews/suraj.jpg";
import sagar from "../assets/reviews/sagar.jpg";
import rishabh from "../assets/reviews/rishabh.jpg";
import vidyasagar from "../assets/reviews/vidyasagar.jpg";
import neeraj from "../assets/reviews/neeraj.jpg";
import pradeep from "../assets/reviews/pradeep.jpg";
import kishor from "../assets/reviews/kishor.jpg";
import robins from "../assets/reviews/robins.jpg";
//  logos
import html5 from "../assets/logo/html-5.svg";
import css3 from "../assets/logo/css-3.svg";
import javascript from "../assets/logo/javascript.svg";
import react from "../assets/logo/react.svg";
import nodejs from "../assets/logo/nodejs.svg";
import node_green from "../assets/logo/node_green.svg";
import express from "../assets/logo/express.svg";
import stripe from "../assets/logo/stripe.svg";
import mongodb from "../assets/logo/mongodb.svg";
import expo from "../assets/logo/expo.svg";
import expo_blue from "../assets/logo/expo_blue.svg";
import api from "../assets/logo/api.svg";

export const myProjects = [
  {
    _id: 1,
    title: "Production Node.js E-Commerce Backend Server",
    description:
      "A production-ready Node.js eCommerce backend with user auth, order & product management, payment integration, and robust error handling.",
    subDescription: [
      "Built using Node.js, Express, and MongoDB for scalable backend performance.",
      "Integrated JWT-based user authentication and role-based access.",
      "Implemented product, order, and cart management with secure API endpoints.",
      "Added Stripe payment integration and detailed error handling.",
    ],
    href: "https://github.com/Sanjeevjha01/production-nodejs-ecommerce-app",
    logo: ecommerceBackend,
    image: nodejsBackend,
    tags: [
      { _: 1, name: "Node.js", path: nodejs },
      { id: 2, name: "Express", path: express },
      { id: 3, name: "MongoDB", path: mongodb },
      { id: 4, name: "Stripe", path: stripe },
    ],
  },
  {
    _id: 2,
    title: "User Management App",
    description:
      "React Native app for managing users with add, update, delete, and search functionalities connected to a real-time backend API.",
    subDescription: [
      "Built with React Native and TypeScript using Hooks.",
      "Integrated with RESTful APIs for real-time user data.",
      "Designed smooth UI and UX for seamless user interaction.",
      "Implements local storage and fetch operations for data sync.",
    ],
    href: "https://github.com/Sanjeevjha01/User-Management-APP",
    logo: userManagement,
    image: usermanagementApp,
    tags: [
      { id: 1, name: "React Native", path: react },
      { id: 2, name: "API", path: api },
    ],
  },
  {
    _id: 3,
    title: "To-Do App",
    description:
      "A simple and clean React Native to-do app allowing users to manage daily tasks effectively.",
    subDescription: [
      "Developed in React Native with TypeScript.",
      "Supports task addition and deletion with smooth UI transitions.",
      "Focus on performance and minimal design.",
      "Ideal for daily productivity tracking.",
    ],
    href: "https://github.com/Sanjeevjha01/To-Do-App",
    logo: todo,
    image: todoApp,
    tags: [{ id: 1, name: "React Native", path: react }],
  },
  {
    _id: 4,
    title: "Wine Store App",
    description:
      "A modern mobile wine store application built using React Native and Expo.",
    subDescription: [
      "Developed with React Native & Expo for cross-platform compatibility.",
      "Includes features like cart, wishlist, search, and deals.",
      "Focused on user experience with categorized browsing.",
      "Designed with a polished UI for premium look and feel.",
    ],
    href: "https://github.com/Sanjeevjha01/Wine-App",
    logo: wine,
    image: wineApp,
    tags: [
      { id: 1, name: "React Native", path: react },
      { id: 2, name: "Expo", path: expo },
    ],
  },
  {
    _id: 5,
    title: "Weather App",
    description:
      "A minimal and stylish weather app that displays current weather using a public API.",
    subDescription: [
      "Built with HTML, CSS, and JS to consume OpenWeather API.",
      "Responsive layout with a focus on mobile-first design.",
      "Shows current temperature, condition, and location.",
    ],
    href: "https://github.com/Sanjeevjha01/Weather-App",
    logo: weather,
    image: weatherApp,
    tags: [
      { id: 1, name: "HTML", path: html5 },
      { id: 2, name: "CSS", path: css3 },
      { id: 3, name: "JavaScript", path: javascript },
    ],
  },
  {
    _id: 6,
    title: "Ecommerce App",
    description:
      "An ecommerce front-end application to browse and purchase products online.",
    subDescription: [
      "Developed a clean and responsive ecommerce interface.",
      "Implemented basic product browsing and cart functionality.",
      "Focus on usability and aesthetic appeal.",
    ],
    href: "https://github.com/Sanjeevjha01/Ecommerce-App",
    logo: ecommerce,
    image: ecommerceApp,
    tags: [
      { id: 1, name: "React Native", path: react },
      { id: 2, name: "JavaScript", path: javascript },
      { id: 3, name: "nodejs", path: node_green },
      { id: 4, name: "express", path: express },
      { id: 5, name: "mongodb", path: mongodb },
      { id: 6, name: "stripe", path: stripe },
      { id: 7, name: "expo", path: expo_blue },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: whatsapp,
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/sanjeevjha1/",
    icon: linkedIn,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/itz.sanjeevv/",
    icon: instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sanjeevjha0007/",
    icon: facebook,
  },
];

export const learning = [
  {
    date: "2023",
    title: "Foundational Programming & Computer Science",
    details: [
      "Started with C and C++ to build strong fundamentals in programming logic and memory management.",
      "Practiced Data Structures and Algorithms (DSA) to enhance problem-solving and algorithmic thinking.",
      "Worked with MySQL to understand relational databases and SQL querying.",
    ],
  },
  {
    date: "2023-2024",
    title: "Web Development Basics",
    details: [
      "Learned HTML and CSS for structuring and styling responsive web pages.",
      "Used JavaScript to build interactive, dynamic web interfaces.",
    ],
  },
  {
    date: "2024",
    title: "Modern Frontend Development",
    details: [
      "Focused on React Native for building cross-platform mobile applications.",
      "Learned component-based architecture, hooks, and navigation in mobile apps.",
    ],
  },
  {
    date: "2024-2025",
    title: "Backend Development & APIs",
    details: [
      "Built RESTful APIs using Node.js and Express for scalable backend services.",
      "Integrated MongoDB for flexible and efficient data storage.",
      "Used Postman for API testing and debugging workflows.",
    ],
  },
  {
    date: "2025",
    title: "Full Stack Projects",
    details: [
      "Combined frontend and backend skills to build complete full-stack applications.",
      "Implemented user authentication, payment gateways, and admin dashboards.",
    ],
  },
];

export const reviews = [
  {
    name: "Vidya Sagar",
    username: "@vidyasagar",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: vidyasagar,
  },
  {
    name: "Rishabh",
    username: "@rishabh",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: rishabh,
  },
  {
    name: "Sagar",
    username: "@sagar",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: sagar,
  },
  {
    name: "Robins",
    username: "@robins",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: robins,
  },
  {
    name: "Pradeep",
    username: "@pradeep",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: pradeep,
  },
  {
    name: "Kishor",
    username: "@kishor",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: kishor,
  },
  {
    name: "Neeraj",
    username: "@neeraj",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: neeraj,
  },
  {
    name: "Suraj",
    username: "@suraj",
    body: "So glad I found this. It has changed the game for me.",
    img: suraj,
  },
];
