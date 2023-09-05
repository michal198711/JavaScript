initBattery();

function initBattery() {
    const batteryLiquid = document.querySelector(".bLiquid");
    const batteryStatus = document.querySelector(".bPercentage");
    const batteryPercentage = document.querySelector(".bPercentage");
    navigator.getBattery().then((batt) => {
        updateBattery = ()=> {
            let level = Math.floor(batt.level * 100)
            batteryPercentage.innerHTML = level + "%"
            batteryLiquid.style.height= `${parseInt(batt.level * 100)}%`
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
                    batteryLiquid.classList.remove("gradient-color-green","gradient-color-orange", "gradient-color-yellow");
                    batteryLiquid.classList.add("gradient-color-red");
                } else if (level<=48) {
                    batteryLiquid.classList.remove("gradient-color-green","gradient-color-orange", "gradient-color-yellow");
                    batteryLiquid.classList.add("gradient-color-orange");
                }
                else if(level <=80) {
                    batteryLiquid.classList.add("gradient-color-green","gradient-color-orange", "gradient-color-red");
                    batteryLiquid.classList.add("gradient-color-yellow");
                } else {
                    batteryLiquid.classList.add("gradient-color-red","gradient-color-orange", "gradient-color-yellow");
                    batteryLiquid.classList.add("gradient-color-green");
                }

                }
          //  }
      //  }
        updateBattery();
        batt.addEventListener("chargingchange", () => { updateBattery() });
        batt.addEventListener("levelchange", () => { updateBattery });
    })
}
