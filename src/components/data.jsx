export const data = {
    labels: ["00.00","01.00","02.00","03.00","04.00","05.00","06.00","07.00","08.00","09.00","10.00","11.00","12.00","13.00","14.00","15.00","16.00","17.00","18.00","19.00","20.00","21.00","22.00","23.00"],
    datasets: [
      {
        label: "Ketgazilgan Sekund",
        data: [0,0,0,0,0,0,0,0,0,0, 1800,60,1200,3120,3600,600,900,0,0,3600,600,0,0,0],
        fill: true,
        tension: 0.2,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
      },
    ],
  };
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Phone time",
      },
    },
  };
  