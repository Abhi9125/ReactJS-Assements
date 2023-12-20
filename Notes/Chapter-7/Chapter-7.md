# Chapter 07 - Finding Path

## Detailed Mention of Topics and its Timestamps according to Namaste React Web Series

- 00:03:00 – useEffect hook explanation, Dependency Array
- 00:15:40 – React Router
- 00:19:00 – Create Routing Configuration
- 00:22:00 – Create About Component
- 00:30:00 – Rafce
- 00:33:00 – error (404 not found)
- 00:37:00 – useRouteError Hook
- 00:41:55 – Error.js
- 00:44:20 – Children Routes
- 00:51:00 – Outlet Keyword
- 00:56:00 – Create links to Header Menu
- 00:58:18 – Link Component
- 01:00:00 – Observe the performance
- 01:03:55 – Single Page Applications (SPA)
- 01:05:35 – 2 types of Routing: Client Side Routing & Server-side Routing
- 01:08:00 – Session Recap till now
- 01:11:50 – Dynamic Routing
- 01:13:35 – JSON Viewer
- 01:40:30 – GraphQL Introduction
- 01:52:40 – Dynamic Data coding
- 01:57:50 – Map function and its usage with a key
- 01:59:00 – Changing Restaurant ID’s
- 02:00:00 – New SuperPower Hook: UseParams
- 02:02:30 – Move API to constants.js
- 02:04:00 - Dynamic Cards- to be clickable
- 02:08:00 – Link Component
- 02:13:00 – Session Recap

### Coding Assignment:

- Add Shimmer Effect without installing a library.
- Install react-router-dom.
- Create an appRouter and Provide it to the app.
- Create a Home, About, and Contact - Page with Link (use child routes).
- Make an Error page for routing errors.
- Create a Restaurant Page with dynamic restaurant ID.
- (Extra) - Create a login Page using Formik Library.

### Theory Assignment:

- What are various ways to add images into our App? Explain with code examples.
- What would happen if we do console.log(useState())?
- How will useEffect behave if we don't add a dependency array?
- What is SPA?
- What is the difference between Client Side Routing and Server Side Routing?
- What is React Router, Routing configration, Handling Error in routing.(Self)
- Children Routing.(Self)
- Dynamic Routing.(Self)
- Why use Link instead of anthor tag and what is in last Link tag. (Self)
- Why use useParam Hook(Self)
- How to identify Hook and Component. (Self)
-

### References:

[React Router](https://reactrouter.com/en/main)
[Client Side Routing](https://reactrouter.com/en/main/start/overview)
[Formik](https://formik.org/)

### Q.What are various ways to add images into our App? Explain with code examples.

### Q. What is React Router, Routing configration, Handling Error in routing.

- A.

1. For react Routing first we install react-router-dom by npm `npm install react-router-dom` or `npm i react-router-dom`
2. configer router with path by using createBrowserRouter component that is provided by react-router-dom.

```JS
import React from "react";
import ReactDOM from "react-dom/client";
import HeaderCom from "./Components/HeaderCom";
import BodyCom from "./Components/BodyCom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { HeaderCom } from "./Components/HeaderCom";
// importing router configration, RouterProvider for rendering.
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// App component
const AppContainer = () => {
  return (
    <div>
      <HeaderCom />
      <BodyCom />
    </div>
  );
};

// Configar the path by use createBrowserRouter method
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    // handle error if path not match ex - localhost:1479/difhdsukfh
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<AppContainer />); do not use this for rendring
// render the router by follwing way.
root.render(<RouterProvider router={appRouter} />);
```

3. `For Handling error we import useRouteError hook`

```JS
import { useRouteError } from "react-router-dom";

const Error = () => {
  // useRouterError return an Object with deatail of error.
  const errorObj = useRouteError();
  console.log(errorObj);
  return (
    <div>
      <h1>Oppssss!!!!!!</h1>
      <br />
      <h2>{errorObj.status + " " + errorObj.statusText}</h2>
    </div>
  );
};
export default Error;
```

### Q How to do Children Routing.(Self)

A. For children routing we use outlet component

```JS
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import { HeaderCom } from "./Components/HeaderCom";
import HeaderCom from "./Components/HeaderCom";
// importing router configration, RouterProvider for rendering.
// Use import Outlet component for children routing.
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// App component
const AppContainer = () => {
  return (
    <div>
      <HeaderCom />
      {/* I want when path is "/about" below <About/> render ho. agr "/contact" to below <Contact/ component render ho same for other header Component> */}
      {/* So for above functionality we use Outlet component and Children routing. */}
      <Outlet />
    </div>
  );
};
// Configar the path by use createBrowserRouter method
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppContainer />,
    // children for giving children routing.
    children: [
      {
        path: "/",
        element: <BodyCom />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
    // handle error if path not match ex - localhost:1479/difhdsukfh
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);
const root = ReactDOM.createRoot(document.querySelector("#root"));
// render the router by follwing way.
root.render(<RouterProvider router={appRouter} />);
```

### How to do Dynamic routing.

A. For dynamic routing we only use (Collon) ":" like following

```JS
 {
        // we give `:`(Collon) for dynamic routing.
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
 },
```

### What is the use of useParam Hook.

A. The useParams hook is a React hook that allows you to access the dynamic parameters present in the current URL. These parameters are typically defined in the route path using placeholders like :id.

### Notes

[Digital_notes](https://drive.google.com/file/d/1UEUVCrk75rAllR4bCIZo1PHSenA9wX_-/view)<br>
[Hand_Notes](https://drive.google.com/file/d/1n_8C5b7zHIWrXb-39MibXX74RyNoztJm/view)
