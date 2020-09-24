import React, { useState } from 'react';

import Navbar from './components/Navbar';
import Locations from './components/Locations';
import EarthQuakes from './components/EarthQuakes';
import Loans from './components/Loans';

const style = {
  width: '70vw',
  margin: '0 auto',
  marginTop: '2vh'
}

function App() {
  const [page, setPage] = useState('Locations')
  return (
    <div style={style}>
      <Navbar page={page} setPage={setPage} />

      {page === 'Locations' &&
        <Locations />
      }
      
      {page === 'EarthQuakes' &&
        <EarthQuakes />
      }
      
      {page === 'Loans' &&
        <Loans />
      }
    </div>
  );
}

export default App;
