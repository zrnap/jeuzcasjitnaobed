function updateTitle() {
    const currentTime = new Date();
    const remainingMinutes = calculateRemainingMinutes(currentTime);
    const formattedTime = formatTime(currentTime);

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

function getRemainingText(remaining) {
    return remaining === 1 ? "minuta" : getRemainingText(remaining, "minuta", "minuty", "minut");
}

function formatRemainingTime(remainingMinutes) {
    if (remainingMinutes >= 60) {
        const hours = Math.floor(remainingMinutes / 60);
        const minutes = remainingMinutes % 60;
        const hoursText = getRemainingText(hours, "hodina", "hodiny", "hodin");
        const minutesText = getRemainingText(minutes, "minuta", "minuty", "minut");
        return `${hours} ${hoursText} a ${minutes} ${minutesText}`;
    } else {
        return `${remainingMinutes} minut${getRemainingText(remainingMinutes)}`;
    }
}

// Call the updateTitle function initially
updateTitle();

// Update the title every minute
setInterval(updateTitle, 60000);
