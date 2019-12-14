const viewingHistoryUrl = '/gp/yourstore/iyr/ref=pd_ys_iyr_edit_watched?ie=UTF8&collection=watched';

const languageCode = document.querySelector('.nav-a.nav-a-2.icp-link-style-2').text.trim();

const viewingHistoryLabel = (() => {
    switch (languageCode) {
        case "JP": return "視聴履歴";
        case "ZH": return "查看历史";
        default : return "Viewing History";
    }
})();

if (document.querySelector('.DVWebNode-retail-nav-wrapper')) {
    addLoginMenu(viewingHistoryUrl, viewingHistoryLabel);
} else {
    addNoLoginMenu(viewingHistoryUrl, viewingHistoryLabel);
}

function addLoginMenu(viewingHistoryUrl, label)
{
    const parentElement = document.querySelector('.av-retail-m-nav-list-subitems');

    const theFirstChild = parentElement.firstChild;

    const link = document.createElement('li');
    link.innerHTML = `<a href="${viewingHistoryUrl}">${label}</a>`;
    link.className = 'av-retail-m-nav-subitem';

    parentElement.insertBefore(link, theFirstChild);
}

function addNoLoginMenu(viewingHistoryUrl, label)
{
    const parentElement = document.querySelector('#nav-subnav');

    const link = document.createElement('a');
    link.innerHTML = `<span class="nav-a-content">${label}</span>`;
    link.className = 'nav-a nav-right';
    link.href = viewingHistoryUrl;

    parentElement.appendChild(link);
}
