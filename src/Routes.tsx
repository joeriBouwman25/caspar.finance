import { BrowserRouter, Route, Routes } from "react-router";
import { ContactPage } from "./pages/ContactPage";
import { MainLayout } from "./components/ui/MainLayout";
import { AboutPage } from "./pages/AboutPage";
import { DienstenPage } from "./pages/DienstenPage";
import { WerkwijzePage } from "./pages/WerkwijzePage";
import { HomePage } from "./pages/HomePage";
import { AlgemeneVoorwaardenPage } from "./pages/AlgemeneVoorwaardenPage";

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="diensten" element={<DienstenPage />} />
          <Route path="werkwijze" element={<WerkwijzePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="terms" element={<AlgemeneVoorwaardenPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
