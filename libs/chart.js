const ctx = document.getElementById('marks');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Hello', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
        label: 'Math',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
        },
        {
            label: 'programming',
            data: [50, 70, 30, 90, 100, 60],
            borderWidth: 3
        },  
        {
            label: 'art',
            data: [50, 70, 30, 90, 100, 60],
            borderWidth: 0
        }  
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });