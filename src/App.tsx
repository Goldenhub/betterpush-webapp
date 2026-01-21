import { Route, Routes } from "react-router";
import Login from "./auth/login";
import Signup from "./auth/signup";
import HomeLayout from "./landing/layout";
import Home from "./landing";
import Contact from "./landing/contact";
import Policy from "./landing/policy";
import Terms from "./landing/terms";
import Docs from "./landing/docs";
import DashboardLayout from "./dashboard/layout";
import Dashboard from "./dashboard";
import NotFound from "@/NotFound";
// import { useEffect } from "react";
import { ROUTES } from "./constants";

function App() {
  // const pathname = useLocation().pathname;
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (pathname === "/") {
  //     navigate(ROUTES.login);
  //   }
  // }, [pathname, navigate]);
  return (
    <Routes>
      <Route path={ROUTES.login} element={<Login />} />
      <Route path={ROUTES.signup} element={<Signup />} />
      <Route path={ROUTES.home} element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.docs} element={<Docs />} />
        <Route path={ROUTES.policy} element={<Policy />} />
        <Route path={ROUTES.terms} element={<Terms />} />
        <Route path={ROUTES.contact} element={<Contact />} />
      </Route>
      <Route path={ROUTES.dashboard} element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        {/* <Route path={ROUTES.resources} element={<Resources />} /> */}
        <Route path={ROUTES.fallback} element={<NotFound />} />
      </Route>
      <Route path={ROUTES.fallback} element={<NotFound />} />ß
    </Routes>
  );
}

export default App;
