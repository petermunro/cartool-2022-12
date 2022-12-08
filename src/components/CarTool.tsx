import { useEffect, useState } from "react";
import { Car } from "../interfaces/Car";
import { addCar, deleteCar, getAllCars, updateCar } from "../services/cars";
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

  function refreshCars() {
    return getAllCars().then(setCars);
  }

  useEffect(() => {
    refreshCars().catch((err) => {
      setError("Failed to fetch cars");
    });
  }, []);

  function handleSave(newCar: Car) {
    addCar(newCar)
      .then(refreshCars)
      .then(() => setEditCarId(-1));
  }

  function replaceCar(newCar: Car) {
    updateCar(newCar)
      .then(refreshCars)
      .then(() => setEditCarId(-1));
  }

  function handleEdit(carId: number) {
    setEditCarId(carId);
  }

  function handleDelete(carId: number) {
    deleteCar(carId)
      .then(refreshCars)
      .then(() => setEditCarId(-1));
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
