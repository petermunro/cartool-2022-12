import { Car } from "../interfaces/Car";

function CarViewRow({ car }: { car: Car }) {
  return (
    <tr>
      <th>{car.id}</th>
      <th>{car.make}</th>
      <th>{car.model}</th>
      <th>{car.year}</th>
      <th>{car.color}</th>
      <th>{car.price}</th>
    </tr>
  );
}

export default CarViewRow;
