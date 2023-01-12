import logo from './logo.svg';
import './App.css';
import Table from "../src/component/table";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='table-container'>
      <Table/>
    </div>
  );
}

export default App;
