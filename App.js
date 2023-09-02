import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Form from './Component/Form';
import Table from './Component/Table';
import { useState } from 'react';

function App() {
  const [selectedData, setSelectedData] = useState(null)
  return (
    <div>
      <Form selectedData={selectedData} setSelectedData={setSelectedData}  />
      <Table setSelectedData={setSelectedData} />
    </div>
  );
}

export default App;
