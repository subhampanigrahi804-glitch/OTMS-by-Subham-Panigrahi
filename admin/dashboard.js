/* ================= AUTH CHECK ================= */

if (localStorage.getItem("adminLoggedIn") !== "true") {
  window.location.href = "admin-login.html";
}

function logout() {
  localStorage.removeItem("adminLoggedIn");
  window.location.href = "admin-login.html";
}

/* ================= SECTION SWITCH ================= */

function showSection(id) {
  document.querySelectorAll(".section").forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

/* ================= DASHBOARD OVERVIEW CHARTS ================= */

// Bookings line chart (LIVE)
const bookingData = [12, 19, 8, 15, 22, 30];

const bookingChart = new Chart(document.getElementById('bookingChart'), {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Bookings',
      data: bookingData,
      borderColor: '#00c6ff',
      backgroundColor: 'rgba(0,198,255,0.1)',
      tension: 0.4,
      borderWidth: 3,
      fill: true,
      pointRadius: 5
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,   // ✅ FIX
    animation: {
      duration: 1200
    },
    plugins: {
      legend: {
        labels: { color: '#fff' }
      }
    },
    scales: {
      x: { ticks: { color: '#ccc' } },
      y: { ticks: { color: '#ccc' } }
    }
  }
});

// Revenue bar chart
const revenueChart = new Chart(document.getElementById('revenueChart'), {
  type: 'bar',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Revenue (₹ in thousands)',
      data: [10, 15, 6, 14, 20, 28],
      backgroundColor: '#00c6ff',
      borderRadius: 8
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,   // ✅ FIX
    plugins: {
      legend: {
        labels: { color: '#fff' }
      }
    },
    scales: {
      x: { ticks: { color: '#ccc' } },
      y: { ticks: { color: '#ccc' } }
    }
  }
});

// Popular destinations donut chart
const destinationChart = new Chart(document.getElementById('destinationChart'), {
  type: 'doughnut',
  data: {
    labels: ['Goa', 'Manali', 'Kerala', 'Jaipur'],
    datasets: [{
      data: [40, 25, 20, 15],
      backgroundColor: ['#00c6ff', '#ff9f43', '#1dd1a1', '#ff6b6b']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,   // ✅ FIX
    plugins: {
      legend: {
        position: 'bottom',
        labels: { color: '#fff' }
      }
    }
  }
});

/* ================= LIVE UPDATE EFFECT ================= */

setInterval(() => {
  const newVal = Math.floor(Math.random() * 30) + 5;

  bookingChart.data.datasets[0].data.shift();
  bookingChart.data.datasets[0].data.push(newVal);

  bookingChart.update();
}, 3000);
