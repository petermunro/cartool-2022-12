import { Car } from "../interfaces/Car";

export interface CarViewRowProps {
  car: Car;
  onDelete: (carId: number) => void;
}

function CarViewRow({ car, onDelete }: CarViewRowProps) {
  return (
    <tr>
      <th>{car.id}</th>
      <th>{car.make}</th>
      <th>{car.model}</th>
      <th>{car.year}</th>
      <th>{car.color}</th>
      <th>{car.price}</th>
      <th>
        <button onClick={() => onDelete(car.id as number)}>Delete</button>
      </th>
    </tr>
  );
}

export default CarViewRow;
