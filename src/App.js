import { Nav } from "./components/Nav/Nav";
import "./App.css"
import { Body } from "./components/body/Body";
import { NoteProvider } from "./components/NoteContext";
import { FilterProvider } from "./components/FilerContext";


const App = () => {
  return <>
    <FilterProvider>
      <NoteProvider>
        <Nav />
        <Body />
      </NoteProvider>
    </FilterProvider>
  </>
}

export default App;
