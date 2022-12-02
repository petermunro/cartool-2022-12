import { Car } from "../interfaces/Car";
import CarViewRow from "./CarViewRow";

function CarTable({ cars }: { cars: Car[] }) {
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
        </tr>
      </thead>
      <tbody>
        {cars.map((car) => (
          <CarViewRow car={car} key={car.id} />
        ))}
      </tbody>
    </table>
  );
}

export default CarTable;
