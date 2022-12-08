import { Car } from "../interfaces/Car";

const SERVER_URL = "http://localhost:3020";

export function getAllCars(): Promise<Car[]> {
  return fetch(`${SERVER_URL}/cars`).then((result) => result.json());
}

export function deleteCar(carId: number) {
  return fetch(`${SERVER_URL}/cars/${encodeURIComponent(carId)}`, {
    method: "DELETE",
  }).then((response) => response.json());
  // encodeURIComponent is not strictly necessary above but best practice for user-generated data
}
