import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import styled from "styled-components";
import { locations } from "../utils/index";
import { Button } from "react-bootstrap";
import { Buses } from "../utils/index"; // Ensure the correct path
import BusList  from "../components/BusList";

const Container = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
`;
export default function BusSearch({ searchState, setSearchState}) {
  const [filteredBus, setFilteredBus] = useState([]);

  const handleSearch = () => {
    setFilteredBus(
      Buses.filter(
        (data) =>
          data.source.toLowerCase() === searchState.from.toLowerCase() &&
          data.destination.toLowerCase() === searchState.to.toLowerCase() &&
          data.availableDates.includes(searchState.date)
      )
    );
  };

   return (
     <Container>
       <h2 className="mb-3">Search for Buses</h2>
     <div className="d-flex flex-column align-items-center">
         <Form.Select
          className="mb-3 width-300"
          value={searchState.from}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              from: e.target.value,
            }))
          }
        >
          {locations.map((data) => (
            <option key={`${data}-source`} value={data}>
              {data}
            </option>
          ))}
        </Form.Select>
        <Form.Select
          className="mb-3 width-300"
          value={searchState.to}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              to: e.target.value,
            }))
          }
        >
          {locations.map((data) => (
            <option key={`${data}-destination`} value={data}>
              {data}
            </option>
          ))}
        </Form.Select>
        <input
          className="form-control mb-3 width-300"
          type="date"
          value={searchState.date}
          onChange={(e) =>
            setSearchState((prevState) => ({
              ...prevState,
              date: e.target.value,
            }))
          }
        />
      </div>
      <Button variant="primary" className="mb-3" onClick={handleSearch}>
        Search
      </Button> 
    

      {filteredBus && filteredBus?.length > 0 && <BusList buses={filteredBus} />} 
      {filteredBus && filteredBus.length < 1 && <h3>No Buses Found</h3>}
   </Container>
   );
   }
