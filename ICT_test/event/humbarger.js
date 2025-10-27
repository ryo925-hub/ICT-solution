function setupHamburgerMenu() {
      const menuToggle = document.getElementById('menu-toggle');
      const navMenu = document.getElementById('nav-menu');
      const menuList = navMenu.querySelector('ul');
      const loggedInUser = sessionStorage.getItem('loggedInUser');

      if (!menuToggle || !navMenu || !menuList) return;

      // メニュー内容を構築
      let menuItemsHTML = `
        <li><a href="../mypage.html">マイページ</a></li>
        <li><a href="event_exp.html">体験一覧</a></li>
        <li><a href="event_mer.html">商品一覧</a></li>
        <li><a href="article.html">記事一覧</a></li>
        <li><a href="../read.html">みんなの投稿を見る</a></li>
        <li><a href="../chat.html">お問い合わせ</a></li>
      `;
      if (loggedInUser) {
        menuItemsHTML =
          `<li><a href="../mypage.html">マイページ (${loggedInUser})</a></li>` +
          menuItemsHTML +
          `<hr><li><a href="#" id="logout-link">ログアウト</a></li>`;
      } else {
        menuItemsHTML += `<hr><li><a href="../login.html">ログイン</a></li>`;
      }

      menuList.innerHTML = menuItemsHTML;

      // ハンバーガーの開閉
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
          window.location.href = '../login.html';
        });
      }
    }

    document.addEventListener('DOMContentLoaded', setupHamburgerMenu);