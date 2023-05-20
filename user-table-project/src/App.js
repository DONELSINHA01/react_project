import logo from './logo.svg';
import './App.css';
import DynamicTable from './Components/DynamicTable';
import Comments from './Components/CommentsPage';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<DynamicTable />} />
        <Route path="/comments/:id" element={<Comments />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
