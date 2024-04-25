import { lazy, Suspense } from "react";
import Lottie from "lottie-react";
import Loading from "../public/loading.json";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./components/Theme";
import "./index.css";
const MainLayout = lazy(() => import("./components/MainLayout"));
import BarChart from "./Pages/barChart/BarChart";
import Calender from "./Pages/calender/Calender";
import Contacts from "./Pages/contacts/Contacts";
import Dashboard from "./Pages/dashboard/Dashboard";
import Error from "./Pages/Error/Error";
import Faq from "./Pages/faq/Faq";
import Form from "./Pages/form/Form";
import Geography from "./Pages/geography/Geography";
import Invoices from "./Pages/invoices/Invoices";
import LineChart from "./Pages/lineChart/LineChart";
import PieChart from "./Pages/pieChart/PieChart";
import Team from "./Pages/team/Team";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Suspense
          fallback={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Lottie
                animationData={Loading}
                style={{ width: "400px", marginTop: "100px" }}
              />
            </Box>
          }
        >
          <MainLayout />
        </Suspense>
      ),
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
        {
          path: "/team",
          element: <Team />,
        },
        {
          path: "/contacts",
          element: <Contacts />,
        },
        {
          path: "/invoices",
          element: <Invoices />,
        },
        {
          path: "/form",
          element: <Form />,
        },
        {
          path: "/calender",
          element: <Calender />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/bar",
          element: <BarChart />,
        },
        {
          path: "/pie",
          element: <PieChart />,
        },
        {
          path: "/line",
          element: <LineChart />,
        },
        {
          path: "/geography",
          element: <Geography />,
        },
      ],
    },
  ]);

  const [theme, colorMode] = useMode();
  return (
    <>
      <ColorModeContext.Provider
        // @ts-ignore
        value={colorMode}
      >
        <ThemeProvider
          // @ts-ignore
          theme={theme}
        >
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
