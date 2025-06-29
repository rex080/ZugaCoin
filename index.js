// 🔐 Correct credentials
const correctID = "rex080";
const correctPassword = "080676";

// 📦 DOM Elements
const loginWrapper = document.querySelector(".login-wrapper");
const loadingScreen = document.getElementById("loading");
const secondLoading = document.getElementById("secondloading");
const dashboard = document.getElementById("dashboard");
const mainApp = document.getElementById("mainApp");

// 🔒 Hide all non-login sections initially
document.getElementById("incorrectID").style.display = "none";
document.getElementById("incorrectPassword").style.display = "none";
dashboard.style.display = "none";
loadingScreen.style.display = "none";

// 🚪 Login Logic
function myLogin(event) {
  event.preventDefault();

  const enteredID = document.getElementById("zugaCoin_ID").value.trim();
  const enteredPassword = document.getElementById("zugaCoin_Password").value.trim();

  document.getElementById("incorrectID").style.display = "none";
  document.getElementById("incorrectPassword").style.display = "none";

  if (enteredID === correctID && enteredPassword === correctPassword) {
    loginWrapper.style.display = "none";
    loadingScreen.style.display = "flex";

    setTimeout(() => {
      loadingScreen.style.display = "none";
      dashboard.style.display = "flex";
    }, 5000);
  } else {
    if (enteredID !== correctID) {
      document.getElementById("incorrectID").style.display = "block";
    }
    if (enteredPassword !== correctPassword) {
      document.getElementById("incorrectPassword").style.display = "block";
    }
  }
}

// 📊 Dashboard Sections
function showSection(section) {
  const sections = {
    summary: document.getElementById("summarySection"),
    history: document.getElementById("historySection"),
    converter: document.getElementById("converterSection"),
  };

  for (let key in sections) {
    sections[key].classList.toggle("hidden", key !== section);
  }

  document.querySelectorAll(".sidebar__link").forEach(link => link.classList.remove("active"));
  document.getElementById(`nav-${section}`).classList.add("active");
}

// 💱 USDT to Naira Conversion
function convert() {
  const usdt = parseFloat(document.getElementById("usdt").value);
  const rate = parseFloat(document.getElementById("rate").value);
  const result = document.getElementById("converted");

  if (!isNaN(usdt) && !isNaN(rate)) {
    result.textContent = (usdt * rate).toFixed(2);
  } else {
    result.textContent = "0.00";
  }
}

// 🔚 Logout Button
document.querySelector(".logout").addEventListener("click", () => {
  dashboard.style.display = "none";
  loginWrapper.style.display = "flex";
});

// 📱 Toggle Sidebar (Mobile)
function toggleMobileNav() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.classList.toggle("active");
}

// 🔄 Crypto Bot Toggle
let botRunning = false;

function toggleCryptoBot(button) {
  const status = document.getElementById("botStatus");
  const message = document.getElementById("botMessage");

  if (!botRunning) {
    status.textContent = "Bot Status: Active";
    message.textContent = "Monitoring active. The system is now scanning price differences across exchanges.";
    button.textContent = "Stop Monitoring";
    botRunning = true;
  } else {
    status.textContent = "Bot Status: Inactive";
    message.textContent = "The arbitrage monitoring system is currently offline. Click below to initiate scanning.";
    button.textContent = "Start Monitoring";
    botRunning = false;
  }
}


