//HEART ICONS 
let count = 0;
const heartCount = document.getElementById('love-text');
const totalHearts = 9; 

for (let i = 1; i <= totalHearts; i++) {
  const heart = document.getElementById(`love-text-btn-${i}`);
  if (heart) {
    heart.onclick = function() {
      count++;
      heartCount.textContent = count;
    }
  }
}

//CALL BUTTONS 
let coins = 100;
const coinCount = document.getElementById('coin-count');
const historyContainer = document.getElementById('call-history');
const callButtons = document.getElementsByClassName('call-btn');
const clearBtn = document.getElementById('clear-history-btn');
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].onclick = function() {
    const serviceName = this.parentElement.parentElement.querySelector('.service-name').textContent;
    const serviceNumber = this.parentElement.parentElement.querySelector('.service-number').textContent;
    // Check coins
    if (coins < 20) {
      alert("Not enough coins to make a call!");
      return;
    }
    // Deduct coins
    coins -= 20;
    coinCount.textContent = coins;
    // Show alert
    alert(`Calling ${serviceName} (${serviceNumber})`);
    // Add to call history
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    const newEntry = document.createElement('div');
    newEntry.className = 'flex justify-between items-center bg-[#F5FFF6] p-3 rounded-lg';
    newEntry.innerHTML = `
      <div>
        <h3 class="font-medium">${serviceName}</h3>
        <p class="text-sm text-gray-500">${serviceNumber}</p>
      </div>
      <span class="text-sm text-gray-500">${timeString}</span>
    `;
    historyContainer.appendChild(newEntry);
  }
}
// CLEAR HISTORY BUTTON 
clearBtn.onclick = function() {
  historyContainer.innerHTML = '';
  alert("Call history cleared!");
}
// COPY BUTTONS
let availableCopy=0;
function copyNumber(serviceNumber) {
    availableCopy++;
    document.getElementById("available-copy").innerText = availableCopy;
    alert("Hotline number " + serviceNumber + " copied!");
}

