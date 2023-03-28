
import './App.css';
import Menu from './components/Menu';
import MovieContainer from './components/MovieContainer'; 
import Search from './components/Search';
import { useState } from 'react'





function App() {

 
  const [search, setSearch] = useState('')



  return (
    <div className="App">

      <header className="App-header">

      <h1  spellCheck="false">Move(E)</h1>

      </header>
     <div className="menu-grid">
        <div>
          <Menu />
        </div>
        <div>
          <Search search={search} setSearch={setSearch}/>
     
          <MovieContainer search={search} setSearch={setSearch}/>
          
          
        </div>
    </div> 
    </div>
  );
}

export default App;
