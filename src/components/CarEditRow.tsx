import { useState } from "react";
import { Car } from "../interfaces/Car";

export interface CarEditRowProps {
  car: Car;
}

function CarEditRow({ car }: CarEditRowProps) {
  let [editForm, setEditForm] = useState(car);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <tr>
      <td>{editForm.id}</td>
      <td>
        <input
          type="text"
          name="make"
          id="make"
          value={editForm.make}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="model"
          id="model"
          value={editForm.model}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="year"
          id="year"
          value={editForm.year}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="color"
          id="color"
          value={editForm.color}
          onChange={handleChange}
        />
      </td>
      <td>
        <input
          type="text"
          name="price"
          id="price"
          value={editForm.price}
          onChange={handleChange}
        />
      </td>
      <td>
        <button>Save</button>
        <button>Cancel</button>
      </td>
    </tr>
  );
}

export default CarEditRow;
