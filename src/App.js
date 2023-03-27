
import './App.css';
import Menu from './components/Menu';
import MovieContainer from './components/MovieContainer'; 
import Search from './components/Search';
import { useState } from 'react'
import MovieComments from './components/MovieComments';


function App() {

 
  const [search, setSearch] = useState('')



  return (
    <div className="App">

      <header className="App-header">

      <h1  spellCheck="false">Move(E)</h1>

      </header>
     
      <Menu />

      <Search search={search} setSearch={setSearch}/>
     
      <MovieContainer search={search} setSearch={setSearch}/>
    </div>
  );
}

export default App;
