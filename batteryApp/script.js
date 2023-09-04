initBattery();

function initBattery() {
    const batteryLiquid = document.querySelector(".bLiquid");
    const batteryStatus = document.querySelector(".bStatus");
    const batteryPercentage = document.querySelector(".bPercentage");
    navigator.getBattery().then((batt) => {
        updateBattery = ()=> {
            let level = Math.floor(batt.level * 100);
            batteryPercentage.innerHTML = level + "%";
            batteryLiquid.style.height = `${parseInt(batt.level * 100)}%`;
            if (level == 100){
                batteryStatus.innerHTML = `Bateria Pełna <i class="ri-battery-2-fill green-color"></i>`;
                batteryLiquid.style.height = "103%";
                } else if (level <=20 & !batt.charging) {
                batteryStatus.innerHTML = `Niski poziom <i class="ri-plug-line animated-red animated-red"></i>`;
                } else if(batt.charging){
                batteryStatus.innerHTML = `Ładowanie... <i class="ri-flashLight-line animated-green"></i>`
                }
                else {
                    batteryStatus.innerHTML = ""
                }

                if (level <= 20) {
                    batteryLiquid.classList.add("gradient-color-red");
                    batteryLiquid.classList.remove("gradient-color-green","gradient-color-orange", "gradient-color-yellow");
                } else if (level <= 48) {
                    batteryLiquid.classList.add("gradient-color-orange");
                    batteryLiquid.classList.remove("gradient-color-green","gradient-color-orange", "gradient-color-yellow");
                }
                else if(level <= 80) {
                    batteryLiquid.classList.add("gradient-color-yellow");
                    batteryLiquid.classList.remove("gradient-color-green","gradient-color-orange", "gradient-color-red");
                } else {
                    batteryLiquid.classList.add("gradient-color-green");
                    batteryLiquid.classList.remove("gradient-color-red","gradient-color-orange", "gradient-color-yellow");
                }

                }
          //  }
      //  }
        updateBattery();
        batt.addEventListener("chargingchange", () => { updateBattery() });
        batt.addEventListener("levelchange", () => { updateBattery() });
    })
}
