
import './App.css';
import NavBar from './Components/navbar'
import MovieList from './Components/MovieList';
import {MovieProvider} from './Context/MovieContext';
import AddMovie from './Components/AddMovie';


function App() {
  return (
    <MovieProvider>
    <div className="App">
       <NavBar />
       <AddMovie />
      <MovieList />
    </div>
    </MovieProvider>
  );
}

export default App;
