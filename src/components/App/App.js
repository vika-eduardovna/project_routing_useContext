import { Routes, Route } from 'react-router-dom';
import { useState, useContext } from 'react';
import AddDeal from '../../pages/AddDeal';
import ListDeals from '../../pages/ListDeals';
import NavBar from '../NavBar';



function App() {

  const [deals, setDeals] = useState([]);
  const addDeals = (title, day) => {
    setDeals([...deals,
    {
      id: Date.now(),
      title, day
    }
    ])
  }

  return (
    <>
      <NavBar />

      <div>
        <Routes>
          <Route path='/add' element={<AddDeal/>} />
          <Route path='/list' element={<ListDeals/>} />
        </Routes>
      </div>
    </>

  );
}

export default App;
