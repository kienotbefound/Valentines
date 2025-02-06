const messages = [
    "No (Are you sure??🤨)",
    "No (Really sure??🤔)"
,    "No (Still no??🙄)",
    "No (Baby please??🥺)",
    "No (Just think about it☹️)",
    "No (If you say no, I will be really sad😢)",
    "No (I will be very sad😔)",
    "No (Ok fine, I will stop asking😥)",
    "No (Just kidding, say yes na kasi😤)"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}