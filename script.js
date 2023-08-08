function updateTitle() {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();

    const remainingMinutes = calculateRemainingMinutes(hours, minutes);
    const formattedTime = formatTime(hours, minutes);
    const remainingText = getRemainingText(remainingMinutes);

    const titleElement = document.getElementById("timeDisplay");

    if (remainingMinutes > 0) {
        const remainingFormatted = formatRemainingTime(remainingMinutes);
        titleElement.textContent = `Ještě ${remainingFormatted}`;
    } else {
        titleElement.textContent = `Ano! Lepší čas než ${formattedTime} na oběd nenajdeš`;
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
        let hoursText = "hodin";
        let minutesText = "minut";

        if (hours === 1) {
            hoursText = "hodina";
        } else if (hours > 1 && hours < 5) {
            hoursText = "hodiny";
        }

        if (minutes === 1) {
            minutesText = "minuta";
        } else if (minutes > 1 && minutes < 5) {
            minutesText = "minuty";
        }

        if (hours > 0 && minutes > 0) {
            return `${hours} ${hoursText} a ${minutes} ${minutesText}`;
        } else if (hours > 0) {
            return `${hours} ${hoursText}`;
        } else if (minutes > 0) {
            return `${minutes} ${minutesText}`;
        }
    } else {
        return `${remainingMinutes} minut`;
    }
}

// Call the updateTitle function initially
updateTitle();

// Update the title every minute
setInterval(updateTitle, 10000); // 60000 milliseconds = 1 minute
