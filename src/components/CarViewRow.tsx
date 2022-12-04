import { Car } from "../interfaces/Car";

export interface CarViewRowProps {
  car: Car;
  onEdit: (carId: number) => void;
  onDelete: (carId: number) => void;
}

function CarViewRow({ car, onEdit, onDelete }: CarViewRowProps) {
  return (
    <tr>
      <td>{car.id}</td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.color}</td>
      <td>{car.price}</td>
      <td>
        <button onClick={() => onEdit(car.id as number)}>Edit</button>
        <button onClick={() => onDelete(car.id as number)}>Delete</button>
      </td>
    </tr>
  );
}

export default CarViewRow;
