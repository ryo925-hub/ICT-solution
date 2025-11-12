// イベントデータ
const events = [
  {
    title: "「竹市場」開設",
    description: "「刈って」「使って」「育てる」全国初の竹資源の循環システム流通拠点「竹市場」開設",
    image: "/ICT_test/image/itiba.png"
  },
  {
    title: "竹への落書き",
    description: "「拾った小石で竹に落書き」「立ち入り禁止エリアに侵入」京都の人気スポット・竹林の小径で迷惑行為が深刻化...記者の直撃にも悪びれないインバウンド客たち地元商店街からも嘆き「本当にやめてもらいたい」",
    image: "/ICT_test/image/itazura.png"
  },
  {
    title: "竹のチップ",
    description: "【神戸市】竹のチップで地面がやさしい…そんな公園が海岸通にありました",
    image: "/ICT_test/image/tip.png"
  },
  {
    title: "竹CNF",
    description: "世界初、大分大学が有機ガス放出しない竹CNFを実証した意義",
    image: "/ICT_test/image/CNF.png"
  },
  {
    title: "竹筋コンクリート",
    description: "鉄筋の代わりに竹材利用…復活「竹筋コンクリート」の実力値",
    image: "/ICT_test/image/konnkuri.png"
  },
  {
    title: "バンブーテクノ",
    description: "「竹」の需要拡大で地域課題を解決。バンブーテクノの取り組みが面白い",
    image: "/ICT_test/image/teq.png"
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

