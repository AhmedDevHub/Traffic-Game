let lights = ["red", "yellow", "green"];
let messages = ["Stop", "Steady", "Go"];
let currentIndex = 0;
let timeout; 

function startTraffic() {
    stopTraffic();
    updateLight(); 
}

function stopTraffic() {
    clearTimeout(timeout); 
    lights.forEach(light => document.getElementById(light).classList.remove("active"));
    document.getElementById("statusMessage").innerText = "Press Start";
}

function updateLight() {
    lights.forEach(light => document.getElementById(light).classList.remove("active"));
    document.getElementById(lights[currentIndex]).classList.add("active");
    document.getElementById("statusMessage").innerText = messages[currentIndex];
    document.getElementById("statusMessage").style.color = lights[currentIndex];

    currentIndex = (currentIndex + 1) % lights.length;

    timeout = setTimeout(updateLight, 2000);
}
