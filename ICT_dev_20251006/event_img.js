// イベントデータ
const events = [
  {
    title: "陶芸体験",
    description: "自分だけのオリジナル陶器を作ろう！初心者でも安心のサポート付きです。",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNTc5fDB8MXxzZWFyY2h8MTB8fGNvZGluZ3xlbnwwfHx8fDE3MjE4NzkzNjV8MA&ixlib=rb-4.0.3&q=&w=30"
  },
  {
    title: "そば打ち体験",
    description: "地元のそば粉を使って、香り高い手打ちそばを作ってみよう！",
    image: "https://images.unsplash.com/photo-1582980495309-9b33ef39e0d6?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "キャンドルづくり体験",
    description: "好きな香りと色を選んで、世界にひとつだけのキャンドルを作りましょう。",
    image: "https://images.unsplash.com/photo-1584714268709-9f8e30e6f5e1?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "陶芸絵付け体験",
    description: "完成済みの器に絵付けをして、自分だけの作品を作れます。",
    image: "https://images.unsplash.com/photo-1602007775779-88082c7a35b1?auto=format&fit=crop&w=800&q=80"
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

