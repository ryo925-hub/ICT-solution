// イベントデータ
const events = [
  {
    title: "竹細工体験",
    description: "熟練の職人が教える、本格的な竹細工体験。世界に一つだけのオリジナル作品を作ってみませんか？",
    image: "/ICT_test/image/test.png"
  },
  {
    title: "竹灯り体験",
    description: "幻想的な竹灯りを作るワークショップ。竹に穴を開けて、美しい光のアートを創造します。",
    image: "/ICT_test/image/taketomori.png"
  },
  {
    title: "竹箸セット",
    description: "しなやかで使いやすい竹箸の5膳セット。食卓に自然の温もりを添えます。",
    image: "/ICT_test/image/chopsticks5.png"
  },
  {
    title: "竹ランプ",
    description: "お部屋を優しく照らす竹製のランプシェード。和室にも洋室にもマッチします。",
    image: "/ICT_test/image/bamboo_lamp.png"
  },
  {
    title: "竹茶体験",
    description: "静かな茶室で、珍しい竹の葉のお茶を味わう体験。心落ち着くひとときを。",
    image: "/ICT_test/image/take_cha.png"
  },
  {
    title: "竹の弁当箱",
    description: "お通気性が良く、ご飯が美味しいまま保たれる伝統的な竹製の弁当箱です。",
    image: "/ICT_test/image/lunch_box.png"
  }
];

// 要素取得
const eventList = document.getElementById("event-list");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const closeModal = document.getElementById("close-modal");

// カード生成
events.forEach(event => {
  const card = document.createElement("div");
  card.className = "event-card";
  card.innerHTML = `
    <img src="${event.image}" alt="${event.title}">
    <div class="content">
      <h3>${event.title}</h3>
      <p>${event.description}</p>
    </div>
  `;
  card.addEventListener("click", () => {
    modal.style.display = "block";
    modalImage.src = event.image;
    modalTitle.textContent = event.title;
    modalDescription.textContent = event.description;
  });
  eventList.appendChild(card);
});

// モーダルを閉じる
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
window.addEventListener("click", e => {
  if (e.target == modal) modal.style.display = "none";
});


