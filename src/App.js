import { Nav } from "./components/Nav/Nav";
import "./App.css"
import { Body } from "./components/body/Body";
import { NoteProvider } from "./components/NoteContext";


const App = () => {
  return <>
    <NoteProvider>
      <Nav />
      <Body />
    </NoteProvider>
  </>
}

export default App;
