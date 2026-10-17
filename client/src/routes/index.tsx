import { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import PublicLayout from "../layouts/PublicLayout";
import AdminLayout from "../layouts/AdminLayout";
import BusinessCardLayout from "../layouts/BusinessCardLayout";

import HomePage from "../pages/public/Home";
import AboutPage from "../pages/public/About";
import ContactPage from "../pages/public/Contact";

import LoginPage from "../pages/admin/Login";
import DashboardPage from "../pages/admin/Dashboard";

import CardPage from "../pages/Business-card/Card";
import { PortfolioPage, ProjectPage, ServicesPage } from "./LazyPublicPages";

const pageFallback = <div className="min-h-[100svh] bg-[#f4f3ef]" />;

export const router = createBrowserRouter([
  {
    element: <PublicLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      {
        path: "/portfolio",
        element: (
          <Suspense fallback={pageFallback}>
            <PortfolioPage />
          </Suspense>
        ),
      },
      {
        path: "/portfolio/:slug",
        element: (
          <Suspense fallback={pageFallback}>
            <ProjectPage />
          </Suspense>
        ),
      },
      { path: "/about", element: <AboutPage /> },
      {
        path: "/services",
        element: (
          <Suspense fallback={pageFallback}>
            <ServicesPage />
          </Suspense>
        ),
      },
      { path: "/projects", element: <Navigate to="/portfolio" replace /> },
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
