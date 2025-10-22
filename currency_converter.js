const exchangeRates = {
    USD: 1,
    EUR: 0.92,
    INR: 83.34,
    GBP: 0.78
};

const currencySymbol = {
    USD: "USD",
    EUR: "EUR",
    INR: "INR",
    GBP: "GBP"
};

// Conversion function
function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('fromCurrency').value;
    const to = document.getElementById('toCurrency').value;
    const resultBox = document.getElementById('convertedAmount');

    if (isNaN(amount) || amount < 0) {
        resultBox.textContent = "Converted Amount: --";
        return;
    }

    // Convert from USD
    let usdAmount = from === "USD" ? amount : amount / exchangeRates[from];

    // Convert USD to
    let finalAmount = to === "USD" ? usdAmount : usdAmount * exchangeRates[to];

    resultBox.textContent = `Converted Amount: ${finalAmount.toFixed(2)} ${currencySymbol[to]}`;
}

document.getElementById('amount').addEventListener('input', convertCurrency);
document.getElementById('fromCurrency').addEventListener('change', convertCurrency);
document.getElementById('toCurrency').addEventListener('change', convertCurrency);

window.onload = convertCurrency;
