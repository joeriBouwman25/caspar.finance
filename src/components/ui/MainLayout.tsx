import { Footer } from "../Footer";
import { Header } from "../Header";
import { Outlet, useLocation } from "react-router";
import { BackToTop } from "./BackToTop";
import { useEffect } from "react";

export const MainLayout = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== undefined) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <BackToTop />
    </>
  );
};
