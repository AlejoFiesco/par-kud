import DashboardList from "../../components/dashboard-list/DashboardList";
import Navbar from "../../components/header/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import '../styles/adminDashboard.css'
import '../styles/forms-inner.css'
import BarChart from "../../components/charts/bar-chart/BarChart";
import PieChart from "../../components/charts/pie-chart/PieChart";

import React, { useEffect , useState } from 'react';





export default function Stats( ) {

    const barChartData = {
      "01/02/2023": "80000",
      "02/02/2023": "10000",
      "03/02/2023": "200000",
      "04/02/2023": "100000",
      "05/02/2023": "5000"
    };

    const barkeys = Object.keys(barChartData);
    const barvalues = Object.values(barChartData);
  
    const pieChartData = {
      "01/02/2023": "40",
      "02/02/2023": "1",
      "03/02/2023": "27",
      "04/02/2023": "13",
      "05/02/2023": "59"
    };

    const piekeys = Object.keys(pieChartData);
    const pievalues = Object.values(pieChartData);
    

    const[barChartConfig, charUserData] = useState({
        labels: barkeys,
        datasets: [{
            label: "$COP Vendido por Día",
            data: barvalues,
            backgroundColor: ["#FF8000"],
            borderWidth: 2, 
            borderColor: "white" 
        }]
    })
    
    const[pieChartConfig, pieUserData] = useState({
      labels: piekeys,
      datasets: [{
          label: "% Ocupación por Día",
          data: pievalues,
          backgroundColor: ["#FF8000"],
          borderWidth: 2, 
          borderColor: "white" 
      }]
  })

  return (
    
    < >
      <div style={{ background: 'white', borderRadius: '10px', border: '1px solid gray', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
        <BarChart chartData={barChartConfig} />
      </div>

      <div style={{ background: 'white', borderRadius: '10px', border: '1px solid gray', display: 'flex', justifyContent: 'center', alignItems: 'center'  }}>
        <PieChart chartData={pieChartConfig} />
      </div>
    </>

  )
}