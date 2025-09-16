import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Layout2 from "../Layout/Layout2";
import Home2 from "../Pages/Home2";
import Layout3 from "../Layout/Layout3";
import Home3 from "../Pages/Home3";
import Layout4 from "../Layout/Layout4";
import TeamPage from "../Pages/TeamPage";
import GalleryPage from "../Pages/GalleryPage";
import TestimonialPage from "../Pages/TestimonialPage";

import FaqPage from "../Pages/FaqPage";
import ContactPage from "../Pages/ContactPage";
import ServicePage from "../Pages/ServicePage";
import ServiceDetailPage from "../Pages/ServiceDetailPage";
import BlogGridPage from "../Pages/BlogGridPage";
import BlogListPage from "../Pages/BlogListPage";
import BlogDetailsPage from "../Pages/BlogDetailsPage";
import PricingPage from "../Pages/PricingPage";
import ProjectPage from "../Pages/ProjectPage";
import ProjectDetailPage from "../Pages/ProjectDetailPage";
import Profile from "../Pages/Profile";
import DataShowcase from "../Pages/DataShowcase";
import PrivateRoute from "../Components/Common/PrivateRoute";

import Découvrir from "../Pages/Découvrir";
import Approfondir from "../Pages/Approfondir";
import Transmettre from "../Pages/Transmettre";
import ParcoursPage from "../Pages/ParcoursPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout4 />,
      children: [
        { path: "/about", element: <About /> },

        { path: "/team", element: <TeamPage /> },
        { path: "/gallery", element: <GalleryPage /> },
        { path: "/testimonial", element: <TestimonialPage /> },
        { path: "/pricing", element: <PricingPage /> },
        { path: "/faq", element: <FaqPage /> },

        { path: "/service", element: <ServicePage /> },
        { path: "/service/service-details", element: <ServiceDetailPage /> },
        { path: "/blog", element: <BlogGridPage /> },
        { path: "/blog-sidebar", element: <BlogListPage /> },
        { path: "/blog/blog-details", element: <BlogDetailsPage /> },
        { path: "/project/project-details", element: <ProjectDetailPage /> },
        { path: "/project", element: <ProjectPage /> },
      ],
    },
    {
      path: "/",
      element: <Main />,
      children: [
        { index: true, element: <Home /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/data-showcase", element: <DataShowcase /> },
        {
          path: "/profile",
          element: (
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          ),
        },
        {
          path: "/parcours",
          element: <ParcoursPage />,
        },
        {
          path: "/Découvrir",
          element: <Découvrir />,
        },
        {
          path: "/Approfondir",
          element: <Approfondir />,
        },
        {
          path: "/Transmettre",
          element: <Transmettre />,
        },
      ],
    },
    {
      path: "home2",
      element: <Layout2 />,
      children: [{ index: true, element: <Home2 /> }],
    },
    {
      path: "home3",
      element: <Layout3 />,
      children: [{ index: true, element: <Home3 /> }],
    },
  ]
  // {
  //   basename: "/ennemaroc", // 👈 très important pour ton sous-dossier
  // }
);
