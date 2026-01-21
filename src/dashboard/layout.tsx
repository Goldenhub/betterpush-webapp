// import Header from "../components/Header";
import { Navigate, Outlet, useLocation } from "react-router";
// import NavMenu from "../components/side-nav";
import { ROUTES } from "@/constants";
import { useAuth } from "@/lib/ProviderHooks";

export default function Layout() {
  const { isAuthenticated } = useAuth();

  //   const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.login} replace />;
  }

  return (
    <section className="px-8 py-6">
      <section className="grid grid-cols-[1fr_4fr] gap-6 items-start">
        {/* <NavMenu /> */}
        <main>
          <Outlet />
        </main>
      </section>
    </section>
  );
}
