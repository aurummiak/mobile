(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=i(t);fetch(t.href,r)}})();const u="Restore",d="Continue",E={"Get Unlimited <br>Access":"Get Unlimited <br>Access","Unlimited Art <br>Creation":"Unlimited Art <br>Creation","Exclusive <br>Styles":"Exclusive <br>Styles","Magic Avatars <br>With 20% Off":"Magic Avatars <br>With 20% Off","YEARLY ACCESS":"YEARLY ACCESS","BEST OFFER":"BEST OFFER","Just {{price}} per year":"Just {{price}} per year","WEEKLY ACCESS":"WEEKLY ACCESS","{{price}} <br>per week":"{{price}} <br>per week","Terms of Use":"Terms of Use","Privacy Policy":"Privacy Policy",Restore:u,Continue:d},b="Restaurar",m="Continuar",p={"Get Unlimited <br>Access":"Obtenha Acesso <br>Ilimitado","Unlimited Art <br>Creation":"Criação de Arte <br>Ilimitada","Exclusive <br>Styles":"Estilos <br>Exclusivos","Magic Avatars <br>With 20% Off":"20% de Desconto em <br>Avatares de IA","YEARLY ACCESS":"ACESSO ANUAL","BEST OFFER":"MELHOR OFERTA","Just {{price}} per year":"Apenas {{price}} por ano","WEEKLY ACCESS":"ACESSO SEMANAL","{{price}} <br>per week":"{{price}} <br>por semana","Terms of Use":"Termos de Uso","Privacy Policy":"Política de Privacidade",Restore:b,Continue:m},A="Restaurar",C="Continuar",f={"Get Unlimited <br>Access":"Obtén acceso <br>ilimitado","Unlimited Art <br>Creation":"Ilimitada creación <br>de arte","Exclusive <br>Styles":"Estilos <br>exclusivos","Magic Avatars <br>With 20% Off":"20 % de descuento en <br>avatares de IA","YEARLY ACCESS":"ACCESO ANUAL","BEST OFFER":"MEJOR OFERTA","Just {{price}} per year":"Solo {{price}} por año","WEEKLY ACCESS":"ACCESO SEMANAL","{{price}} <br>per week":"{{price}} <br>por semana","Terms of Use":"Términos de uso","Privacy Policy":"Política de privacidad",Restore:A,Continue:C},S="Restaurer",y="Continuer",g={"Get Unlimited <br>Access":"Obtenez un accès <br>illimité","Unlimited Art <br>Creation":"Création artistique <br>illimitée","Exclusive <br>Styles":"Styles <br>exclusifs","Magic Avatars <br>With 20% Off":"20&nbsp;% de réduction <br>sur les avatars IA","YEARLY ACCESS":"ACCÈS ANNUEL","BEST OFFER":"MEILLEURE OFFRE","Just {{price}} per year":"Seulement {{price}} par an","WEEKLY ACCESS":"ACCÈS HEBDOMADAIRE","{{price}} <br>per week":"{{price}} <br>par semaine","Terms of Use":"Conditions d’utilisation","Privacy Policy":"Politique de confidentialité",Restore:S,Continue:y},L="Wiederherstellen",R="Weiter",v={"Get Unlimited <br>Access":"Erhalten Sie unbegrenzten <br>Zugriff","Unlimited Art <br>Creation":"Unbegrenzte <br>Kunstschaffung","Exclusive <br>Styles":"Exklusive <br>Stile","Magic Avatars <br>With 20% Off":"20 % Rabatt auf <br>KI-Avatare","YEARLY ACCESS":"JÄHRLICHER ZUGRIFF","BEST OFFER":"BESTES ANGEBOT","Just {{price}} per year":"Nur {{price}} pro Jahr","WEEKLY ACCESS":"WÖCHENTLICHER ZUGRIFF","{{price}} <br>per week":"{{price}} <br>pro Woche","Terms of Use":"Nutzungsbedingungen","Privacy Policy":"Datenschutzrichtlinie",Restore:L,Continue:R},O="復元する",T="続行する",U={"Get Unlimited <br>Access":"無制限アクセス<br>を入手","Unlimited Art <br>Creation":"アート作品を<br>無制限に創造","Exclusive <br>Styles":"特別な<br>スタイル","Magic Avatars <br>With 20% Off":"AIアバターが<br>20%オフ","YEARLY ACCESS":"年間アクセス","BEST OFFER":"ベストオファー","Just {{price}} per year":"わずか{{price}}/年","WEEKLY ACCESS":"週ごとのアクセス","{{price}} <br>per week":"{{price}}/週<br>","Terms of Use":"利用規約","Privacy Policy":"プライバシーポリシー",Restore:O,Continue:T},a=["en","pt","es","fr","de","ja"],l="en";function h(){const n=navigator.language.slice(0,2);return a.includes(n)?n:l}function I(){const e=new URLSearchParams(window.location.search).get("lang");return e&&a.includes(e)?e:h()}const c={en:E,pt:p,es:f,fr:g,de:v,ja:U};function F(n){const e=c[n]||c[l];document.getElementById("title").innerHTML=e["Get Unlimited <br>Access"],document.getElementById("card1").innerHTML=e["Unlimited Art <br>Creation"],document.getElementById("card2").innerHTML=e["Exclusive <br>Styles"],document.getElementById("card3").innerHTML=e["Magic Avatars <br>With 20% Off"],document.getElementById("yearly-title").innerHTML=e["YEARLY ACCESS"],document.getElementById("yearly-desc").innerHTML=e["Just {{price}} per year"],document.getElementById("weekly-title").innerHTML=e["WEEKLY ACCESS"],document.getElementById("notify-offer").innerHTML=e["BEST OFFER"],document.querySelectorAll(".price").forEach(i=>{i.innerHTML=e["{{price}} <br>per week"]}),document.getElementById("continue-btn").innerText=e.Continue,document.getElementById("policy-link1").innerText=e["Terms of Use"],document.getElementById("policy-link2").innerText=e["Privacy Policy"],document.getElementById("policy-link3").innerText=e.Restore}const M=I();F(M);document.addEventListener("DOMContentLoaded",function(){const n=document.querySelectorAll(".subs-option__btn");n.forEach(e=>{e.addEventListener("click",function(){n.forEach(i=>i.classList.remove("subs-option__btn--active")),this.classList.add("subs-option__btn--active")})})});
