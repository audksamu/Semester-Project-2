export function displayMessage(messageType, message, targetElement) {
    const element = document.querySelector(targetElement);
    element.innerHTML = `<div class="message ${messageType}">${message}</div>`;
}

export function spinner(classForSpinner) {

    const spinnerHTML = `    <div class="spinner-border text-primary" role="status">
    <span class="visually-hidden">Loading...</span>
    </div>`;
    return spinnerHTML;
}

