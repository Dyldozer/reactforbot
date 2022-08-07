import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { Button } from '../components';
import { dashInfo } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import GetGrid from '../data/GetGrid';
import GetCards from '../data/GetCards';

const Dashboard = () => {
  const { currentColor } = useStateContext();

  return (
    <div>
       <GetCards />
      <GetGrid />
    </div>
  );
};

export default Dashboard;
