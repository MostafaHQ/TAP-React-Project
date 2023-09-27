import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { MainLayout } from "./layout/MainLayout";
import { Home } from "./pages/home";
import { createGlobalStyle } from "styled-components";
import { Detail } from "./pages/details";

const GlobalStyle = createGlobalStyle`
*{
  padding: 0;
  margin: 0;
  font-family: Nunito Sans;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="details/:id" element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
