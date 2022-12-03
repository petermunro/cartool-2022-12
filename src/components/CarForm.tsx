import { useState } from "react";
import { uniqueRandomInt } from "./randomInt";
import { Car } from "../interfaces/Car";

export interface CarFormProps {
  onSave: (car: Car) => void;
  usedIds: number[];
}

function CarForm({ onSave, usedIds }: CarFormProps) {
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
    let newId = uniqueRandomInt(0, 1000, usedIds);

    let newCar = {
      ...carForm,
      id: newId,
    };
    onSave(newCar);
    e.preventDefault();
  }

  return (
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
  );
}

export default CarForm;