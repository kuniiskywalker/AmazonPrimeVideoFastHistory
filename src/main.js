const link = document.createElement('a'); 
link.innerHTML = '<span class="nav-a-content">視聴履歴</span>';
link.className = 'nav-a nav-right';
link.href = '/gp/yourstore/iyr/ref=pd_ys_iyr_edit_watched?ie=UTF8&collection=watched';

const nav = document.querySelector('#nav-subnav[data-category="instant-video"]');
nav.insertBefore(element, nav.querySelectorAll('a')[9]);
