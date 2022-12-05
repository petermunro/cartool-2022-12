import { useEffect, useState } from "react";
import { Car } from "../interfaces/Car";
import CarForm from "./CarForm";
import CarTable from "./CarTable";
import "./CarTool.css";
import ToolFooter from "./ToolFooter";
import ToolHeader from "./ToolHeader";

let initialCars: Car[] = [];

function CarTool() {
  let [cars, setCars] = useState(initialCars);
  let [editCarId, setEditCarId] = useState(-1);
  let [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3020/cars")
      .then((result) => result.json())
      .then(setCars)
      .catch((err) => {
        setError("Failed to fetch cars");
      });
  }, []);

  function handleSave(newCar: Car) {
    setCars([...cars, newCar]);
    setEditCarId(-1);
  }

  function replaceCar(newCar: Car) {
    setCars(cars.map((car) => (car.id === newCar.id ? newCar : car)));
    setEditCarId(-1);
  }

  function handleEdit(carId: number) {
    setEditCarId(carId);
  }

  function handleDelete(carId: number) {
    setCars(cars.filter((car) => car.id !== carId));
    setEditCarId(-1);
  }

  return (
    <div>
      <ToolHeader title="Car Tool" />
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          <CarTable
            cars={cars}
            editCarId={editCarId}
            onEdit={handleEdit}
            onSave={replaceCar}
            onCancel={() => setEditCarId(-1)}
            onDelete={handleDelete}
          />
          <CarForm
            onSave={handleSave}
            usedIds={cars.map((c) => c.id as number)}
          />
        </>
      )}
      <ToolFooter footerText="Copyright 2022. A Cool Company, Inc." />
    </div>
  );
}

export default CarTool;
