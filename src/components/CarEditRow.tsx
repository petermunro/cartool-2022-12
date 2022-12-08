import { useState } from "react";
import { Car } from "../interfaces/Car";

export interface CarEditRowProps {
  car: Car;
  onSave: (newCar: Car) => void;
  onCancel: () => void;
}

function CarEditRow({ car, onSave, onCancel }: CarEditRowProps) {
  let [editForm, setEditForm] = useState(car);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEditForm({
      ...editForm,
      [e.target.name]:
        e.target.type === "number" ? Number(e.target.value) : e.target.value,
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
          type="number"
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
          type="number"
          name="price"
          id="price"
          value={editForm.price}
          onChange={handleChange}
        />
      </td>
      <td>
        <button onClick={() => onSave(editForm)}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </td>
    </tr>
  );
}

export default CarEditRow;
