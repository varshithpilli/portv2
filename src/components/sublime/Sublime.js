import {
  createHashRouter,  // Replace createBrowserRouter with createHashRouter
  RouterProvider,
  redirect,
} from "react-router-dom";
import { lazy, Suspense } from "react";

import Wrapper from "../wrapper/Wrapper";
import TopBar from "../top-bar/TopBar";
import BottomBar from "../bottom-bar/BottomBar";
import Home from "../home/Home";
import Loading from "../loading/Loading";

import classes from "./Sublime.module.css";

const Projects = lazy(() => import("../projects/Projects"));
const About = lazy(() => import("../about/About"));
const Contact = lazy(() => import("../contact/Contact"));
const Resume = lazy(() => import("../resume/Resume"));

const router = createHashRouter([  // Use createHashRouter instead
  {
    path: "/",
    element: <Wrapper comp={<Home />} />,
  },
  {
    path: "*",
    loader: () => redirect("/"),
  },
  {
    path: "about",
    element: <Wrapper comp={<About />} />,
  },
  {
    path: "work",
    element: <Wrapper comp={<Projects />} />,
  },
  {
    path: "contact",
    element: <Wrapper comp={<Contact />} />,
  },
  {
    path: "resume",
    element: <Wrapper comp={<Resume />} />,
  },
]);

function Sublime() {
  return (
    <div className={classes.mainContainer}>
      <TopBar />
      <main className={classes.contentArea}>
        <Suspense fallback={<Loading />}>
          <RouterProvider router={router}></RouterProvider>
        </Suspense>
      </main>
      <BottomBar />
    </div>
  );
}

export default Sublime;
