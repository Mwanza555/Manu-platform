import { createBrowserRouter } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";
import BusinessCardLayout from "../layouts/BusinessCardLayout";

import HomePage from "../pages/public/Home";
import PortfolioPage from "../pages/public/Portfolio";
import ProjectPage from "../pages/public/Project";
import AboutPage from "../pages/public/About";
import ServicesPage from "../pages/public/Services";
import ContactPage from "../pages/public/Contact";
import ProjectsPage from "../pages/public/Projects";

import LoginPage from "../pages/admin/Login";
import DashboardPage from "../pages/admin/Dashboard";

import CardPage from "../pages/Business-card/Card";

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/portfolio/:slug", element: <ProjectPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/services", element: <ServicesPage /> },
      { path: "/projects", element: <ProjectsPage /> },
      { path: "/contact", element: <ContactPage /> },
    ],
  },

  {
    element: <BusinessCardLayout />,
    children: [
      {
        path: "/card",
        element: <CardPage />,
      },
    ],
  },

  {
    element: <AdminLayout />,
    children: [
      {
        path: "/admin/login",
        element: <LoginPage />,
      },
      {
        path: "/admin",
        element: <DashboardPage />,
      },
    ],
  },
]);
