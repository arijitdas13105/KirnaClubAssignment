// import React from 'react'

// function HeaderNav( ) {
//   return (
//     <div className='flex  justify-between  items-center border'>
//         <h1>Codeforces Contest Dashboard</h1>
//         <div className= 'w-[50%] flex flex-row items-center   justify-between gap-10'>
//             <input type="text" placeholder='Search' className='p-2 rounded-lg w-[50%]'  />
//             <div className='flex flex-row gap-10'>
//                 <span>Dashboard</span>
//                 <span>Favourites</span>
//                 <span>Help</span>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default HeaderNav


import React from 'react';

function HeaderNav({ onSearch }) {
  return (
    <div className='flex justify-between items-center border'>
        <h1>Codeforces Contest Dashboard</h1>
        <div className='w-[50%] flex flex-row items-center justify-between gap-10'>
            <input 
              type="text" 
              placeholder='Search' 
              className='p-2 rounded-lg w-[50%]' 
              onChange={(e) => onSearch(e.target.value)} 
            />
            <div className='flex flex-row gap-10'>
                <span>Dashboard</span>
                <span>Favourites</span>
                <span>Help</span>
            </div>
        </div>
    </div>
  );
}

export default HeaderNav;
