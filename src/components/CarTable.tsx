import { Car } from "../interfaces/Car";
import CarEditRow from "./CarEditRow";
import CarViewRow from "./CarViewRow";

interface CarTableProps {
  cars: Car[];
  editCarId: number;
  onSave: (car: Car) => void;
  onCancel: () => void;
  onEdit: (carId: number) => void;
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
        {props.cars.map((car) =>
          car.id === props.editCarId ? (
            <CarEditRow
              car={car}
              key={car.id}
              onCancel={props.onCancel}
              onSave={props.onSave}
            />
          ) : (
            <CarViewRow
              car={car}
              key={car.id}
              onEdit={props.onEdit}
              onDelete={props.onDelete}
            />
          )
        )}
      </tbody>
    </table>
  );
}

export default CarTable;
