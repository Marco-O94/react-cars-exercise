import CarForm from "./components/CarForm";
import CarList from "./components/CarList";
import CarSearch from "./components/CarSearch";
import CarValue from "./components/CarValue";
/*
Piece of states will be:
name (car name) - string
cost (car cost) - number
searchTerm - string
cars - Array of {id,name,cost}

*/

/*
Derived States
totalCost - number
matchedCars - 
*/

function App() {
  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  );
}

export default App;
