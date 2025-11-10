import createHttpClient from '../utils/HttpClient.js'

const { sendRequest } = createHttpClient("dev");

/**
 * 階層を自動解決するハンガーメニュー (メニュー項目修正版)
 */
async function setupHamburgerMenu() {
    const scriptTags = document.querySelectorAll('script[src*="humbarger.js"]');
    if (scriptTags.length === 0) {
        console.error('humbarger.js: 自身の<script>タグを見つけられません。');
        return;
    }
    const thisScript = scriptTags[scriptTags.length - 1];

    const rootPath = thisScript.dataset.root;
    if (typeof rootPath === 'undefined') {
        console.error('humbarger.js: <script> タグに data-root 属性がありません。HTML側を確認してください。');
        return;
    }

    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    if (!menuToggle || !navMenu) {
        return;
    }

    const menuList = navMenu.querySelector('ul');
    if (!menuList) return;

    let loggedInUser = "";
    const token = localStorage.getItem('token');
    // console.log(token);

    const res = await sendRequest('Login/GetUserData', {});
    if (res.isSucc) {
        // console.log(res.res.user);
        window.user = res.res.user;
    }
    else {
        alert("ログインしてください");
        window.location.href = "login.html";
    }

    let menuItemsHTML = '';

    // ★★★ 修正点: ログイン状態に応じてメニュー構成を最適化 ★★★
    if (token) {
        // ログイン時のメニュー
        menuItemsHTML = `
            <li><a href="${rootPath}index.html">ホーム</a></li>
            <li><a href="${rootPath}event/event_exp.html">商品・体験一覧</a></li>
            <li><a href="${rootPath}event/article.html">記事一覧</a></li>
            <li><a href="${rootPath}mypage.html">マイページ (${window.user.firstName1 + ' ' + window.user.lastName1})</a></li>
            <li><a href="${rootPath}chat.html">お問い合わせ</a></li>
            <hr>
            <li><a href="#" id="logout-link">ログアウト</a></li>
        `;
    } else {
        // ログアウト時のメニュー
        //  <li><a href="${rootPath}event/event_mer.html">商品一覧</a></li>
        menuItemsHTML = `
            <li><a href="${rootPath}index.html">ホーム</a></li>
           
            <li><a href="${rootPath}event/event_exp.html">商品・体験一覧</a></li>
            <li><a href="${rootPath}event/article.html">記事一覧</a></li>
            <li><a href="${rootPath}chat.html">お問い合わせ</a></li>
            <hr>
            <li><a href="${rootPath}login.html">ログイン</a></li>
        `;
    }

    menuList.innerHTML = menuItemsHTML;

    // メニューを開くクリックイベント
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    // ログアウト処理
    const logoutLink = document.getElementById('logout-link');
    if (logoutLink) {
        logoutLink.addEventListener('click', (event) => {
            event.preventDefault();
            sessionStorage.removeItem('loggedInUser');
            alert('ログアウトしました。');
            window.location.href = `${rootPath}login.html`;
        });
    }
}

document.addEventListener('DOMContentLoaded', setupHamburgerMenu);
