import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useThemeContext } from "../context/ThemeContext";

export const MainLayout = ({}) => {
  const { theme } = useThemeContext();
  console.log(localStorage);
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
