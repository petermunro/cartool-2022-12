import { Car } from "../interfaces/Car";

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
  );
}

export default CarTable;
