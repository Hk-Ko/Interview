export const QAs = [
  {
    id: 1,
    question: "What is difference between Html and Html5?",
    answer:
      "HTML is the standard language for creating web pages. HTML5 is a newer version that adds new features like improved structure, multimedia support, canvas for graphics, local storage, and better form elements.",
  },
  {
    id: 2,
    question: "What is box model?",
    answer:
      "The box model is a concept in web design that defines how elements are structured visually, including their content, padding, border, and margin.",
  },
  {
    id: 3,
    question: "What is difference between id and class",
    answer:
      "ID uniquely identifies a single element, while class groups multiple elements for styling or JavaScript purposes.",
  },
  {
    id: 4,
    question: "What is difference between let and consts?",
    answer:
      "let allows reassignment, while const declares variables with unchangeable values.",
  },
  {
    id: 5,
    question: "What is Media Queries?",
    answer:
      "Media queries are CSS rules that let you apply different styles based on the device's characteristics, like screen size, creating responsive designs.",
  },
  {
    id: 6,
    question: "What is difference between margin and padding?",
    answer: `Margin is the space outside an element, creating separation from other elements. Padding is the space inside an element, creating space between the content and the border.`,
  },
  {
    id: 7,
    question: "what is call back function?",
    answer: `Margin is the space outside an element, creating separation from other elements. Padding is the space inside an element, creating space between the content and the border.`,
  },
  {
    id: 8,
    question: "what is promises?",
    answer: `Promises are JavaScript objects that represent the eventual completion or failure of an asynchronous operation, allowing better handling of async code.`,
  },
  {
    id: 9,
    question: "what is event loop?",
    answer: `The event loop is a core concept in JavaScript that manages the execution of code, handling asynchronous operations and callbacks.`,
  },
  {
    id: 10,
    question: "what is CSS processes? ",
    answer: `CSS processes involve parsing, applying styles, and rendering web page elements to achieve the desired visual layout and design.`,
  },
  {
    id: 11,
    question: "What is AJAX",
    answer: `AJAX (Asynchronous JavaScript and XML) enables web pages to update content dynamically without reloading the entire page, enhancing user experience.`,
  },
  {
    id: 12,
    question: "Git commands?",
    answer: `Git commands include 'init', 'clone', 'add', 'commit', 'pull', 'push', 'branch', 'checkout', 'merge', 'status', 'log', 'remote', and 'diff'.`,
  },
  {
    id: 13,
    question: "what is difference between null and defined?",
    answer: `"Null" indicates intentional absence of value, while "defined" means a value has been assigned, even if it's empty or zero.`,
  },
  {
    id: 14,
    question: "New features in ES6?",
    answer: `Arrow functions, classes, template literals, destructuring, let/const, spread/rest operators, promises, and more.`,
  },
  {
    id: 15,
    question: "Difference between arrow function and normal function?",
    answer: `Arrow functions have shorter syntax, inherit "this" from their surrounding context, and cannot be used as constructors.`,
  },
  {
    id: 16,
    question: "what is closure?",
    answer: `A closure is a function that retains access to its outer function's variables even after the outer function has finished executing.`,
  },
  {
    id: 17,
    question: "what is react?",
    answer: `React is an open-source JavaScript library for building user interfaces, often used for creating dynamic and interactive web applications.`,
  },
  {
    id: 18,
    question: "what is jsx?",
    answer: `JSX (JavaScript XML) is a syntax extension for JavaScript used with React to describe how user interfaces should look in a declarative way.`,
  },
  {
    id: 19,
    question: "how we can run JSX on our browser?",
    answer: `JSX code needs to be transpiled into regular JavaScript using tools like Babel before it can run in a browser.`,
  },
  {
    id: 20,
    question: "what is life cycle method in react?",
    answer: `Lifecycle methods in React are special functions that automatically get called as components are created, updated, or removed.`,
  },
  {
    id: 21,
    question: "how what hook can we use to achieve Lifecycle methods? ",
    answer: `In React, you can use the 'useEffect' hook to achieve functionality similar to lifecycle methods for managing side effects and component updates.`,
  },
  {
    id: 22,
    question: "what is ref?",
    answer: `"Ref" is a feature in React that allows you to access and interact with a DOM element directly within a component.`,
  },
  {
    id: 23,
    question: "what is controlled components and uncontrolled components?",
    answer: `Controlled components are React elements whose values are controlled by the component's state, while uncontrolled components store their values in the DOM. `,
  },
  {
    id: 24,
    question: "what is map ,filter,reduce?",
    answer: `'map', 'filter', and 'reduce' are higher-order functions in JavaScript used for manipulating arrays.

    - 'map': Creates a new array by applying a function to each element of an existing array.
    - 'filter': Creates a new array with elements that pass a specified condition.
    - 'reduce': Applies a function to accumulate a single result by iterating through the array.`,
  },
  {
    id: 25,
    question: "what is router? ",
    answer: `A router is a tool or library used in web development to manage and handle different routes or URLs in a web application, allowing navigation between different pages or views.`,
  },
  {
    id: 26,
    question: "what is server side rendering?",
    answer: `Server-Side Rendering (SSR) is a technique where web pages are initially rendered on the server and then sent to the client, enhancing performance and SEO.`,
  },
  {
    id: 27,
    question: "how to optimize the performance of a web application?",
    answer: `Optimize web app by reducing file sizes, caching, minimizing requests, using CDNs, lazy loading, image optimization, limiting third-party scripts, and optimizing critical rendering path.`,
  },
  {
    id: 28,
    question: "what is Flexbox?",
    answer: `Flexbox (Flexible Box Layout) is a CSS layout model that provides an efficient way to distribute space and align items in a container. It simplifies complex layouts and helps in creating responsive designs.`,
  },
  {
    id: 29,
    question: "what is difference between virtual DOM and real DOM ? ",
    answer: `The real DOM represents the actual structure of a web page, while the virtual DOM is a lightweight copy that React uses to improve efficiency and update only the necessary parts of the real DOM.`,
  },
];

export const htmlQAs = [
  {
    id: 1,
    question:
      "Describe the difference between `<script>`, `<script async>` and `<script defer>`?",
    answer:
      "- `<script>`: It blocks HTML parsing and executes the script before rendering. - `<script async>`: It loads the script asynchronously and doesn't block parsing, allowing rendering to continue while the script loads.- `<script defer>`: It also loads the script asynchronously but ensures it only executes after HTML parsing is complete.",
  },
  {
    id: 2,
    question:
      "Describe the difference between a cookie, `sessionStorage` and `localStorage`?",
    answer:
      "Cookie: Small data stored in the user's browser, sent with every HTTP request, often used for tracking and maintaining user state but limited in size (around 4KB)." +
      "sessionStorage: Data storage limited to a single session, data is lost when the session ends (e.g., when the browser is closed)." +
      "localStorage: Persistent data storage with no expiration, data remains even after the browser is closed, and has a larger storage capacity (around 5-10MB).",
  },
  {
    id: 3,
    question:
      "Why is it generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>`?",
    answer:
      "It's generally a good idea to position CSS `<link>`s between `<head></head>` and JS `<script>`s just before `</body>` to prioritize faster loading of essential page content, ensuring that styles load before rendering and scripts load after the page structure.",
  },
  {
    id: 4,
    question: "Describe event bubbling.",
    answer:
      "Event bubbling is a propagation mechanism in which an event starts from the target element and moves up through its parent elements in the DOM tree. It allows multiple elements to respond to the same event, with the outermost parent handling it first.",
  },
  {
    id: 5,
    question: "Explain event delegation?",
    answer:
      "Event delegation is a JavaScript technique where you attach a single event listener to a parent element to manage events for its child elements. This improves efficiency and reduces memory usage when handling events on multiple elements. The event bubbles up to the parent, where you can identify the specific child element that triggered the event.",
  },
  {
    id: 6,
    question: `What kind of things must you be wary of when designing or developing for multilingual sites?
    `,
    answer: `Consider text expansion, character encoding, cultural sensitivity, translation accuracy, language switching, SEO Considerations, performance, and content updates when designing multilingual sites.`,
  },
  {
    id: 7,
    question: "",
    answer: "",
  },
  {
    id: 8,
    question: "",
    answer: "",
  },
  {
    id: 9,
    question: "",
    answer: "",
  },
  {
    id: 10,
    question: "",
    answer: "",
  },
  {
    id: 11,
    question: "",
    answer: "",
  },

  {
    id: 12,
    question: "",
    answer: "",
  },
];
