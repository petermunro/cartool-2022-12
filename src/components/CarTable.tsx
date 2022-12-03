import { Car } from "../interfaces/Car";
import CarViewRow from "./CarViewRow";

interface CarTableProps {
  cars: Car[];
  onDelete: (carId: number) => void;
}

function CarTable(props: CarTableProps) {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>Color</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.cars.map((car) => (
          <CarViewRow car={car} key={car.id} onDelete={props.onDelete} />
        ))}
      </tbody>
    </table>
  );
}

export default CarTable;
