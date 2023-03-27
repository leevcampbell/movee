
import './App.css';
import Menu from './components/Menu';
import MovieContainer from './components/MovieContainer'; 
import MovieCard from './components/MovieCard';
import Search from './components/Search';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1 contenteditable spellcheck="false">Move(E)</h1>
      <Search />
      </header>
      <Menu />
     
      <MovieContainer />
      <MovieCard />
    </div>
  );
}

export default App;
