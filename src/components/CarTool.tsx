import { useState } from "react";
import "./CarTool.css";

function CarTool() {
  let [carForm, setCarForm] = useState({
    make: "",
    model: "",
    year: 2012,
    color: "",
    price: 0,
  });

  let cars = [
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

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    let newCar = {
      ...carForm,
      [e.target.name]: e.target.value,
    };
    setCarForm(newCar);
    console.log(newCar);
  }

  return (
    <div>
      <header>
        <h1>Car Tool</h1>
      </header>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Color</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <tr key={car.id}>
              <th>{car.id}</th>
              <th>{car.make}</th>
              <th>{car.model}</th>
              <th>{car.year}</th>
              <th>{car.color}</th>
              <th>{car.price}</th>
            </tr>
          ))}
        </tbody>
      </table>
      <form className="car-form">
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
      </form>
    </div>
  );
}

export default CarTool;
