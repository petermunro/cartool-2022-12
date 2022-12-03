import { useState } from "react";
import CarTable from "./CarTable";
import "./CarTool.css";
import { uniqueRandomInt } from "./randomInt";
import ToolHeader from "./ToolHeader";

let initialCars = [
  {
    id: 1,
    make: "Maserati",
    model: "Merak",
    year: 2012,
    color: "Blue",
    price: 34000,
  },
  {
    id: 2,
    make: "Lamborghini",
    model: "Countache",
    year: 2017,
    color: "Red",
    price: 57000,
  },
];

function CarTool() {
  let [cars, setCars] = useState(initialCars);
  let [carForm, setCarForm] = useState({
    make: "",
    model: "",
    year: 2012,
    color: "",
    price: 0,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let newCar = {
      ...carForm,
      [e.target.name]: e.target.value,
    };
    setCarForm(newCar);
  }

  function handleSubmit(e: React.FormEvent) {
    let usedIds = cars.map((car) => car.id);
    let newId = uniqueRandomInt(0, 1000, usedIds);

    setCars([
      ...cars,
      {
        ...carForm,
        id: newId,
      },
    ]);
    e.preventDefault();
  }

  function handleDelete(carId: number) {
    console.log("Delete:", carId);
    setCars(cars.filter((car) => car.id !== carId));
  }

  return (
    <div>
      <ToolHeader title="Car Tool" />
      <CarTable cars={cars} onDelete={handleDelete} />
      <form className="car-form" onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="make">make:</label>
            <input
              type="text"
              name="make"
              id="make"
              value={carForm.make}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="model">model:</label>
            <input
              type="text"
              name="model"
              id="model"
              value={carForm.model}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="year">year:</label>
            <input
              type="text"
              name="year"
              id="year"
              value={carForm.year}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="color">color:</label>
            <input
              type="text"
              name="color"
              id="color"
              value={carForm.color}
              onChange={handleChange}
            />
          </li>
          <li>
            <label htmlFor="price">price:</label>
            <input
              type="text"
              name="price"
              id="price"
              value={carForm.price}
              onChange={handleChange}
            />
          </li>
        </ul>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default CarTool;
