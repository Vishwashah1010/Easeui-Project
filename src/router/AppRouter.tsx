import { createBrowserRouter, RouterProvider } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import ComponentLayout from "../layouts/ComponentLayout";
import HomePage from "../pages/HomePage";
import ButtonPage from "../pages/components/ButtonPage";
import CardPage from "@/pages/components/CardPage";
import ModalPage from "@/pages/components/ModalPage";
import InputPage from "@/pages/components/InputPage";
import NavbarPage from "@/pages/components/NavbarPage";
import CarouselPage from "@/pages/components/CarouselPage";
import TooltipPage from "@/pages/components/TooltipPage";
import LayoutPage from "@/pages/components/LayoutPage";
import ErrorPage from "@/pages/ErrorPage";
import AboutPage from "@/pages/AboutPage";
import TemplatesPage from "@/pages/TemplatesPage";

const AppRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "templates",
          element: <TemplatesPage />,
        },
        {
          path: "components",
          element: <ComponentLayout />,
          children: [
            {
              index: true,
              element: <ButtonPage />,
            },
            {
              path: "button",
              element: <ButtonPage />,
            },
            {
              path: "card",
              element: <CardPage />,
            },
            {
              path: "modal",
              element: <ModalPage />,
            },
            {
              path: "input",
              element: <InputPage />,
            },
            {
              path: "navbar",
              element: <NavbarPage />,
            },
            {
              path: "carousel",
              element: <CarouselPage />,
            },
            {
              path: "tooltip",
              element: <TooltipPage />,
            },
            {
              path: "layout",
              element: <LayoutPage />,
            },
            {
              path: "*",
              element: <ErrorPage />,
            },
          ],
        },
        {
          path: "*",
          element: <ErrorPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRouter;
