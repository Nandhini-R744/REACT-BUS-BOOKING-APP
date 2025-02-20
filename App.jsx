import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BusSearch from "./components/BusSearch";
import "bootstrap/dist/css/bootstrap.min.css";
import { locations } from "./utils";
import BusLayout from "./components/BusLayout"; // ✅ Import BusLayout component
import BookingForm from "./components/BookingForm";

function App() {
  const [searchState, setSearchState] = useState({
    from: locations[0],
    to: locations[2],
    date: "",
  });

  const [selectedSeats, setSelectedSeats] = useState([]);
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <BusSearch
                searchState={searchState}
                setSearchState={setSearchState}
              />
            }
          />
          <Route
            path="/bus/:id"
            element={
              <BusLayout
                selectedSeats={selectedSeats}
                setSelectedSeats={setSelectedSeats}
              />
            }
          />
          <Route
            path="/bus/book"
            element={
              <BookingForm
                selectedSeats={selectedSeats}
                searchState={searchState}
                setSelectedSeats={setSelectedSeats}
                setSearchState={setSearchState}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
