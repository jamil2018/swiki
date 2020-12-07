import React, { useState } from 'react';
import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

const App = () => {
  const [page, setPage] = useState('planets');
  const handlePageClick = (to) => {
    switch (to) {
      case 'planets':
        setPage('planets');
        break;
      case 'people':
        setPage('people');
        break;
      default:
        setPage('planets');
    }
  };
  return (
    <>
      <Navbar clickHandler={(to) => handlePageClick(to)} currentPage={page} />
      {page === 'planets' ? <Planets /> : <People />}
    </>
  );
};

export default App;
