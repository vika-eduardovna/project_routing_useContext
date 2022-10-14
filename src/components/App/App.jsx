import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import AddDeal from '../../pages/AddDeal';
import ListDeals from '../../pages/ListDeals';
import NavBar from '../NavBar';
import {Context} from '../../context'

function App() {
  const [deals, setDeals] = useState([]);
  
  const addDeals = (title, day) => {
    day= +day;
    setDeals(prev => {
      const new_deals = 
      [...prev,
        {
          id: Date.now(),
          title, day
        }
        ];
        new_deals.sort((a,b) => a.day - b.day);
        return new_deals
    });
  };

 
  return (
    <Context.Provider value={{addDeals, deals}}>
      <NavBar />

      <div>
        <Routes>
          <Route path='/add' element={<AddDeal/>} />
          <Route path='/list' element={<ListDeals/>} />
        </Routes>
      </div>
      </Context.Provider>

  );
}

export default App;
