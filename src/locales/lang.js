import en from "./en.json";
import pt from "./pt.json";
import es from "./es.json";
import fr from "./fr.json";
import de from "./de.json";
import ja from "./ja.json";

const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang');

if (lang) {
    document.documentElement.setAttribute('lang', lang);
}

const supportedLanguages = ["en", "pt", "es", "fr", "de", "ja"];
const defaultLanguage = "en";

function getBrowserLanguage() {
    const lang = navigator.language.slice(0, 2);
    return supportedLanguages.includes(lang) ? lang : defaultLanguage;
}

function getLanguageFromURL() {
    const params = new URLSearchParams(window.location.search);
    const lang = params.get("lang");
    return lang && supportedLanguages.includes(lang) ? lang : getBrowserLanguage();
}

const translations = { en, pt, es, fr, de, ja };

function loadLanguage(lang) {
    const langData = translations[lang] || translations[defaultLanguage];

    document.getElementById("title").innerHTML = langData["Get Unlimited <br>Access"];

    document.getElementById("card1").innerHTML = langData["Unlimited Art <br>Creation"];
    document.getElementById("card2").innerHTML = langData["Exclusive <br>Styles"];
    document.getElementById("card3").innerHTML = langData["Magic Avatars <br>With 20% Off"];

    document.getElementById("yearly-title").innerHTML = langData["YEARLY ACCESS"];
    document.getElementById("yearly-desc").innerHTML = langData["Just {{price}} per year"];
    document.getElementById("weekly-title").innerHTML = langData["WEEKLY ACCESS"];
    document.getElementById("notify-offer").innerHTML = langData["BEST OFFER"];
    document.querySelectorAll(".price").forEach(el => {
        el.innerHTML = langData["{{price}} <br>per week"];
    });
    
    document.getElementById("continue-btn").innerText = langData["Continue"];

    document.getElementById("policy-link1").innerText = langData["Terms of Use"];
    document.getElementById("policy-link2").innerText = langData["Privacy Policy"];
    document.getElementById("policy-link3").innerText = langData["Restore"];

}

const selectedLanguage = getLanguageFromURL();
loadLanguage(selectedLanguage);
