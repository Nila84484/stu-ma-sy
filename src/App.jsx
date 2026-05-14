import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dark bg-gray-900 text-white min-h-screen" : "bg-gray-100 min-h-screen"}>

      {/* Theme Toggle (GLOBAL) */}
      <div className="p-3 flex justify-end">
        <button
          onClick={() => setDark(!dark)}
          className="bg-black text-white px-3 py-1 rounded"
        >
          Toggle Theme
        </button>
      </div>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Login />} />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/students"
            element={
              <ProtectedRoute>
                <Students />
              </ProtectedRoute>
            }
          />

        </Routes>
      </BrowserRouter>

    </div>
  );
}