import prices from "./prices.json";

function loadLanguage(lang) {
    const langData = translations[lang] || translations[defaultLanguage];
    const priceData = prices[lang] || prices[defaultLanguage];

    const currency = priceData.currency;

    const yearlyTotal = priceData.yearly.total;
    const yearlyWeekly = priceData.yearly.weekly;
    const monthlyTotal = priceData.monthly.total;

    document.getElementById("yearly-title").innerHTML = langData["YEARLY ACCESS"];
    document.getElementById("yearly-desc").innerHTML = langData["Just " + currency + yearlyTotal + " per year"];

    document.getElementById("weekly-title").innerHTML = langData["WEEKLY ACCESS"];

    document.querySelectorAll(".price-yearly").forEach(el => {
        el.innerHTML = `${currency}${yearlyWeekly} <br> per week`;
    });

    document.querySelectorAll(".price-monthly").forEach(el => {
        el.innerHTML = `${currency}${monthlyTotal} <br> per month`;
    });

    document.getElementById("notify-offer").innerHTML = langData["BEST OFFER"];
    document.getElementById("continue-btn").innerText = langData["Continue"];
}
