import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Tab1 from './components/Tab1'
import Tabs from './components/Tabs'
import Charts from './components/Charts'
import { store } from './store/store'

import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip } from 'recharts'
import { Provider } from 'react-redux'

const App = () => {
  const apiUrl = 'http://kumca.urgeyazilim.net/api/getlive';
  const [state, setState] = useState()
  const [dataa, setDataa] = useState()
  const [dashboard, setDashboard] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setState(data);
        })

        .catch(error => {
          console.error('Veri çekme hatası:', error);
        });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setDashboard(data.map(({ STATUS, MNO, VSAY, VSUR }, index) => (
            { name: index, dokunus: parseFloat((VSAY / VSUR * 3600)) * index ? parseFloat((VSAY / VSUR * 3600)) * index : 0 }
          )))
        })

        .catch(error => {
          console.error('Veri çekme hatası:', error);
        });
      {
        state && state.map(({ STATUS, MNO, VSAY, VSUR }, index) => {
          dashboard.push = { name: 1, dokunus: 50 }
          console.log(dashboard)
        })
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [state])


  const options = {
    plugins: {
      legend: false
    },
    scales: {
      x: {
        grid: {
          // display: false
        }
      }
    }
  };

  return (
    <div className='max-h-[100vh] h-[100vh] gap-2 flex flex-col'>
      <Header />
      <Tab1 />
      <div className="h-[200px] max-h-[200px] md:container max-md:w-full mx-auto bg-stone-200 flex max-lg:flex max-lg:flex-col max-lg:overflow-scroll max-lg:max-h-[200px] max-lg:h-full">
        <div className="h-full flex items-center justify-center w-3/5">
          <LineChart className="w-[500px]" width={500} height={200} data={dashboard}>
            <Line type="monotone" dataKey="dokunus" stroke="#2196F3" strokeWidth={3} />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </div>
        <Tabs />
      </div>
    </div>
  )
}

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithRedux;