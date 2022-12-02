function CarTool() {
  let cars = [
    {
      id: 1,
      make: "Maserati",
      model: "Merak",
      year: 2012,
      color: "Blue",
      price: 34000,
    },
    {
      id: 2,
      make: "Lamborghini",
      model: "Countache",
      year: 2017,
      color: "Red",
      price: 57000,
    },
  ];

  return (
    <div>
      <header>
        <h1>Car Tool</h1>
      </header>
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
    </div>
  );
}

export default CarTool;
