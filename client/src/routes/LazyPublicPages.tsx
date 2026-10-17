import { lazy } from "react";

export const PortfolioPage = lazy(() => import("../pages/public/Portfolio"));
export const ProjectPage = lazy(() => import("../pages/public/Project"));
export const ServicesPage = lazy(() => import("../pages/public/Services"));
