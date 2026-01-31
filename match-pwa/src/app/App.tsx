import { Navigate, Route, Routes } from "react-router-dom";
import { LoadingPage } from "../pages/Loading/LoadingPage";
import { WelcomePage } from "../pages/Welcome/WelcomePage";
import "./styles/loading.css";
import "./styles/welcome.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LoadingPage />} />
      <Route path="/welcome" element={<WelcomePage />} />
      <Route path="*" element={<Navigate to="/welcome" replace />} />
    </Routes>
  );
}
