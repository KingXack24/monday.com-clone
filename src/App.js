import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import DashBoard from "./pages/DashBoard";
import TicketPage from "./pages/TicketPage";
import CategoriesContext from "./context";

function App() {
  const [categories, setCategories] = useState(null);
  const value = { categories, setCategories };
  return (
    <div className="App">
      <CategoriesContext.Provider value={value}>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<DashBoard />} />
            <Route path="/ticket" element={<TicketPage />} />
            <Route
              path="/ticket/:id"
              element={<TicketPage editMode={true} />}
            />
          </Routes>
        </BrowserRouter>
      </CategoriesContext.Provider>
    </div>
  );
}

export default App;
