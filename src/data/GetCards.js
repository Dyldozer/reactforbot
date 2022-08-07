import React from 'react';
import { useState, useEffect } from 'react';
import { BsPersonCheckFill, BsCalendarEventFill } from 'react-icons/bs';
import { FaCoins } from 'react-icons/fa';
import axios from 'axios';
import { BsFillPersonFill } from 'react-icons/bs';

import { useStateContext } from '../contexts/ContextProvider';
import { Button } from '../components';

function GetCards() {
  const [post, setPosts] = useState([]);
  const data = [];
  useEffect(() => {
    axios
      .get('http://78.108.218.94:25837/api/cards')
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const { currentColor } = useStateContext();

  const dashInfo = [
    {
      icon: <BsPersonCheckFill />,
      amount: post[0],
      title: 'Total Points',
      iconColor: '#03C9D7',
      iconBg: '#E5FAFB',
      pcColor: 'red-600',
    },
    {
      icon: <FaCoins />,
      amount: post[1],
      title: 'Total Splits',
      iconColor: 'rgb(255, 244, 229)',
      iconBg: 'rgb(254, 201, 15)',
      pcColor: 'green-600',
    },
    {
      icon: <BsCalendarEventFill />,
      amount: 'Zulrah',
      title: 'Current Event',
      iconColor: 'rgb(228, 106, 118)',
      iconBg: 'rgb(255, 244, 229)',
      pcColor: 'green-600',
    },
  ];

  return (
    <div>
      <div className='flex flex-wrap lg:flex-nowrap justify-center '>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-cover bg-center'>
          <div className='flex justify-between items-center '>
            <div>
              <p className='font-bold text-gray-400'>Members</p>
              <p className='text-2xl'>{post[2]}</p>
            </div>
            <button
              type='button'
              style={{ backgroundColor: currentColor }}
              className='text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4'
            >
              <BsFillPersonFill />
            </button>
          </div>
          <div className='mt-6'>
            <Button
              color='black'
              bgColor={currentColor}
              text='Download'
              borderRadius='10px'
            />
          </div>
        </div>
        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {dashInfo.map((item) => (
            <div
              key={item.title}
              className='bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl '
            >
              <button
                type='button'
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className='text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl'
              >
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>{item.amount}</span>
              </p>
              <p className='text-sm text-gray-400  mt-1'>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GetCards;
