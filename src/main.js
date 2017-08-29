const language = document.querySelector('.nav-a.nav-a-2.icp-link-style-2').text.trim();

const viewing_history_url = '/gp/yourstore/iyr/ref=pd_ys_iyr_edit_watched?ie=UTF8&collection=watched';

const label = language != "JP" ? "Viewing History": chrome.i18n.getMessage("menuLabel");

const link = document.createElement('a'); 
link.innerHTML = `<span class="nav-a-content">${label}</span>`;
link.className = 'nav-a nav-right';
link.href = viewing_history_url;

const nav = document.querySelector('#nav-subnav[data-category="instant-video"]');
nav.insertBefore(link, nav.querySelectorAll('a')[9]);