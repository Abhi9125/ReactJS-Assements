# Chapter 01 - Inception

## Lecture Time Slap

- Compelete namaste react lecture 1 watching.
  - 00:05:25 - Visual Code Setup
  - 00:10:00 - Hello World Program by using plain HTML
  - 00:14:25 - Hello World Program using Vanilla JavaScript
  - 00:18:00 - CDN links discussion
  - 00:32:00 - Hello World Program in React,
    Separately writing JS code within `<script> tags in HTML` - React.createElement explanation
- 00:54:50 - Nested Elements
- 01:02:00 - Array of children
- 01:05:00 - Need of JSX - Rearrangement of CDN files
- 01:19:00 - React Library v/s Framework discussion
- 01:21:00 - Advantages/Specialties of React
- 01:23:00 - Session Recap

## Theory Assement-

- What is Emmet?
- Difference between a Library and Framework?
- What is CDN? Why do we use it?
- Why is React known as React?
- What is crossorigin in script tag?
- What is difference between React and ReactDOM?
- What is difference between react.development.js and react.production.js files via CDN?
- What is async and defer?

## Coding Assement-

- Set up all the tools in your laptop
- VS Code
- Chrome
- Extensions of Chrome
- Create a new Git repo
- Build your first Hello World program using,
- Using just HTML
- Using JS to manipulate the DOM
- Using React
- use CDN Links
- Create an Element
- Create nested React Elements
- Use root.render
- Push code to Github (Theory as well as code)
- Learn about Arrow Functions before the next class

## Refrence

- https://beta.reactjs.org/apis/react/createElement
- https://www.youtube.com/watch?v=IrHmpdORLu8
- https://github.com/chetannada/Namaste-React

### Q : What is Emmet?

> Emmet is a text editor plugin that helps you write HTML, CSS, and other code faster and more efficiently. It does this by providing a number of abbreviations and shortcuts that can be expanded into full code snippets.

Some important vs code short-cut below

- shift + ! + enter -- HTML sceleton
- Element with text content inside them -- div{This is div}
- Nested Element -- ul>li , ul>li\*3>a
- Css short cut -- m10-10-10-10 , margin all side
  read more -- https://medium.com/@kartik2406/web-development-with-vs-code-part-1-emmet-6af80f0f630c

### Q: Difference between a Library and Framework?

> read more -- https://www.freecodecamp.org/news/the-difference-between-a-framework-and-a-library-bd133054023f/

There isn’t anything magic about frameworks or library. Both libraries and frameworks are reusable code written by someone else. Their purpose is to help you solve common problems in easier ways.

The diffrence b/w both of them When you use a library, you are in charge of the flow of the application. You are choosing when and where to call the library. When you use a framework, the framework is in charge of the flow. It provides some places for you to plug in your code, but it calls the code you plugged in as needed.

remember exmaple of house.

### Q: What is CDN? Why do we use it?

A Content Delivery Network (CDN) is a geographically distributed network of servers that deliver web content to users with high availability and performance. CDNs cache content close to the end user, which reduces latency and improves the overall user experience.

### Q: Why is React known as React?

Overall, React is a very powerful and flexible library that can be used to build a wide variety of web applications. It is known as React because it reacts to changes in data and updates the user interface accordingly. This makes it very efficient, fast, and responsive.

### Q: What is crossorigin in script tag?

A: The crossorigin attribute sets the mode of the request to an HTTP CORS Request. The purpose of crossorigin attribute is used to share the resources from one domain to another domain. Basically, it is used to handle the CORS request. It is used to handle the CORS request that checks whether it is safe to allow for sharing the resources from other domains.

```JS
// Syntex
<script
      crossorigin
      src="https://unpkg.com/react@18/umd/react.development.js"
    ></script>
```

### Q: What is difference between React and ReactDOM?

A: React: React is a javascript library, designed for building better user interfaces.

React-DOM: React-DOM is a complimentary library to React which glues React to the browser DOM

In a nutshell, Whenever we use component, classes, elements, etc. We’re using React and whenever we use methods like render() or findDOMNode() we’re using React-DOM.
read more -- https://medium.com/programming-sage/react-vs-react-dom-a0ed3aea9745

### Q: What is difference between react.development.js and react.production.js files via CDN?

A: react.development.js - More developer friendly, readable, will take more size.

react.production.js - Minified code that is not developer friendly as it focused on decreasing in file size, code efficiency.

### Q: What is async and defer?

A: **Async** - The async attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed as soon as it is available (do not block HTML DOM construction during downloading process) and don’t wait for anything.

```JS
// Syntex
<script src="./demo_async.js" async></script>
```

**Defer** - The defer attribute is a boolean attribute. The script is downloaded in parallel(in the background) to parsing the page, and executed after the page has finished parsing(when browser finished DOM construction). The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM.

```JS
// JavaScript
<script src="demo_defer.js" defer></script>
```

Unless you're supporting ancient legacy systems, always add type="module" to all your script tags:

```JS
<script type="module" src="main.js"></script> and place the tag inside <head>
```

As the name suggests, it allows you to import modules, which makes it easier to organize your code. Enable strict mode by default. This makes your code run faster, and reports more runtime errors instead of silently ignoring them. Execute your code only after the DOM has initialized, which makes DOM manipulation easier. Thanks to this, you won't need to listen to load/readystatechange/DOMContentLoaded events. Prevent top level variables from implicitly polluting the global namespace. Allow you to use top-level await in supported engines. Load and parse your code asynchronously, which improves load performance.

## Digital Notes

![Alt text](<Chapter 01 - Inception Digital Notes_page-0001.jpg>)
![Alt text](<Chapter 01 - Inception Digital Notes_page-0002.jpg>)
![Alt text](<Chapter 01 - Inception Digital Notes_page-0003.jpg>)

## Hand Writen Notes Link
