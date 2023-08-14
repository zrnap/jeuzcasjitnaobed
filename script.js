function updateTitle() {
    const currentTime = new Date();
    const remainingMinutes = calculateRemainingMinutes(currentTime);
    const formattedTime = formatTime(currentTime);
    const remainingText = getRemainingText(remainingMinutes);

    const titleElement = document.getElementById("timeDisplay");
    
    titleElement.textContent = remainingMinutes > 0
        ? `Ještě ${formatRemainingTime(remainingMinutes)}`
        : `Ano! Lepší čas než ${formattedTime} na oběd nenajdeš`;
}

function calculateRemainingMinutes(currentTime) {
    const targetTime = new Date(currentTime);
    targetTime.setHours(12);
    targetTime.setMinutes(30);

    let remainingMinutes = (targetTime - currentTime) / 60000;

    if (remainingMinutes < 0) {
        remainingMinutes += 24 * 60; // Add 24 hours worth of minutes to handle cases past 12:30 of the next day
    }

    return Math.floor(remainingMinutes);
}

function formatTime(time) {
    return time.toLocaleTimeString("cs-CZ", { hour: "2-digit", minute: "2-digit" });
}

function getRemainingText(remainingMinutes) {
    if (remainingMinutes === 1) {
        return "minuta";
    } else if (remainingMinutes > 1 && remainingMinutes < 5) {
        return "minuty";
    } else {
        return "minut";
    }
}

function formatRemainingTime(remainingMinutes) {
    if (remainingMinutes >= 60) {
        const hours = Math.floor(remainingMinutes / 60);
        const minutes = remainingMinutes % 60;
        const hoursText = hours === 1 ? "hodina" : hours > 1 && hours < 5 ? "hodiny" : "hodin";
        const minutesText = minutes === 1 ? "minuta" : minutes > 1 && minutes < 5 ? "minuty" : "minut";
        return `${hours} ${hoursText} a ${minutes} ${minutesText}`;
    } else {
        return `${remainingMinutes} minut`;
    }
}

// Call the updateTitle function initially
updateTitle();

// Update the title every minute
setInterval(updateTitle, 10000); // 60000 milliseconds = 1 minute
