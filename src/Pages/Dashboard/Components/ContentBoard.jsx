import React from 'react';
import ContentList from './ContentList';
import ChartSection from '../../../Components/ChartSection';
import FilterBoard from './FilterBoard';

function ContentBoard() {
  return (
    <div className="flex flex-col border h-full ">
    <div className='flex flex-col  p-4 w-full  h-[50%]'><ContentList /></div>
      
      
      <div className="flex flex-row border-2  rounded-md p-4 w-full   h-[50%]  ">
       <div className='flex h-full w-[80%]'>
       <ChartSection/>
       </div>
       <div className='flex h-full w-[20%]'>
        {/* <h2>Statistics</h2> */}
       </div>
      </div>
    </div>
  );
}

export default ContentBoard;
