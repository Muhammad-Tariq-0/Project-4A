import React from 'react';
import {Bar} from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Matar Plao',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 2,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [65, 59, 80, 81, 56, 55, 40]
    },
    {
        label: 'Hot Shot',
        backgroundColor: 'Green',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 2,
        hoverBackgroundColor: 'lightblue',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [50, 40, 34, 75, 50, 55, 70]
      }
  ]
};

function BarChart(){

    return (
      <div>
          <br/>
          <br/>
        <center><h2>Comparison sale chart of Plao vs Hotshat</h2></center> 
        <Bar
          data={data}
          width={100}
          height={50}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
}
export default BarChart;