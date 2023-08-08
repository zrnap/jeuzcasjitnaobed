function updateTitle() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const remainingMinutes = calculateRemainingMinutes(hours, minutes);
    const formattedTime = formatTime(hours, minutes);

    const titleElement = document.getElementById("timeDisplay");

    if (remainingMinutes > 0) {
        titleElement.textContent = `ještě ${remainingMinutes} minut`;
    } else {
        titleElement.textContent = `ANO! lepší čas než ${formattedTime} na oběd nenajdeš`;
    }
}

function calculateRemainingMinutes(hours, minutes) {
    const targetHours = 12;
    const targetMinutes = 30;

    let remainingMinutes = (targetHours - hours) * 60 + (targetMinutes - minutes);

    if (remainingMinutes < 0) {
        remainingMinutes += 24 * 60; // Add 24 hours worth of minutes to handle cases past 12:30 of the next day
    }

    return remainingMinutes;
}

function formatTime(hours, minutes) {
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}`;
}

// Call the updateTitle function initially
updateTitle();

// Update the title every minute
setInterval(updateTitle, 10000); // 60000 milliseconds = 1 minute
