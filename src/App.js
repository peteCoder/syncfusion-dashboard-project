import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

// Components
import {
  Navbar,
  Footer,
  ThemeSettings,
  Sidebar
} from './components';

// Pages
import {
  Ecommerce,
  Orders,
  Calendar,
  Employees,
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  Area,
  Bar,
  Pie,
  LineChart,
  Financial,
  ColorPicker,
  ColorMapping,
  Editor
} from './pages';

import { useStateContext } from './contexts/ContextProvider';


function App() {

  const { activeMenu } = useStateContext();

  return (
    <div>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content='Settings' position='Top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl 
              hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {
            activeMenu ? (
              <div className='w-72 fixed dark:bg-secondary-dark-bg bg-white sidebar'>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg sidebar'>
                {/* w-0 */}
                <Sidebar />
              </div>
            )
          }
          <div className={`dark:bg-main-dark-bg bg-main-bg  w-full ${activeMenu ? 'md:ml-72' : 'flex-1'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg 
            navbar w-full'>
              <Navbar />
            </div>
            {/* Check this Out */}
            <div>
              
              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />

                {/* Pages */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />

                {/* Apps */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
                <Route path='/color-picker' element={<ColorPicker />} />

                {/* Charts */}x
                <Route path='/line' element={<LineChart />} />
                <Route path='/area' element={<Area />} />
                <Route path='/bar' element={<Bar />} />
                <Route path='/pie' element={<Pie />} />
                <Route path='/color-mapping' element={<ColorMapping />} />
                <Route path='/financial' element={<Financial />} />
                <Route path='/pyramid' element={<Pyramid />} />
                <Route path='/stacked' element={<Stacked />} />
              </Routes>

            </div>
          </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;




