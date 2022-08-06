import React from 'react';
import { BsFillPersonFill } from 'react-icons/bs';
import { Button } from '../components';
import { dashInfo } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import DataFetching from '../data/DataFetching';

const Dashboard = () => {
  const { currentColor } = useStateContext();

  return (
    <div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-cover bg-center">
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold text-gray-400">Members</p>
              <p className="text-2xl">142</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsFillPersonFill />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="black"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {dashInfo.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <DataFetching />
    </div>
  );
};

export default Dashboard;
