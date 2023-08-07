function updateTitle() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const titleElement = document.getElementById("timeDisplay");

    if (hours === 12 && minutes === 30) {
        titleElement.textContent = "ano";
    } else {
        titleElement.textContent = "ještě ne";
    }
}

// Call the updateTitle function initially
updateTitle();

// Update the title every minute
setInterval(updateTitle, 60000); // 60000 milliseconds = 1 minute
