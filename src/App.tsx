import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import "./App.css";
import KanbanBoard from "./components/KanbanBoard.tsx";


function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boards" element={<KanbanBoard />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;
