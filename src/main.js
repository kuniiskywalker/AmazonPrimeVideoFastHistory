const language = document.querySelector('.nav-a.nav-a-2.icp-link-style-2').text.trim();

const viewing_history_url = '/gp/yourstore/iyr/ref=pd_ys_iyr_edit_watched?ie=UTF8&collection=watched';

const label = language != "JP" ? "Viewing History": chrome.i18n.getMessage("menuLabel");

// 新しいノードの挿入先の親要素への参照を取得
var parentElement = document.querySelector('.av-retail-m-nav-list-subitems');

// 子要素への参照を取得
var theFirstChild = parentElement.firstChild;

// 新規の要素の作成
const newElement = document.createElement('li');
newElement.innerHTML = `<a href="${viewing_history_url}">${label}</a>`;
newElement.className = 'av-retail-m-nav-subitem';

// 最初の子要素の前に新規の要素を挿入
parentElement.insertBefore(newElement, theFirstChild);