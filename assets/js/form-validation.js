function showError(input, message) {
    const errorDiv = document.getElementById(input.id + "Error");
    input.classList.add("invalid");
    if (errorDiv) errorDiv.textContent = message;
}

function clearError(input) {
    const errorDiv = document.getElementById(input.id + "Error");
    input.classList.remove("invalid");
    if (errorDiv) errorDiv.textContent = "";
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    return /^09\d{9}$/.test(phone);
}
