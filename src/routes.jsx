import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    )
}