//import createWsClient from './utils/WsClient.js';
//import createHttpClient from './utils/HttpClient.js';

// ▼▼▼ 変更点1: 各データにIDと詳細説明を追加 ▼▼▼
const items = [
  { id: 1, name: "竹細工体験", category: "体験", area: "関東", price: 3000, img: "", description: "熟練の職人が教える、本格的な竹細工体験。世界に一つだけのオリジナル作品を作ってみませんか？" },
  { id: 2, name: "竹箸セット", category: "竹材", area: "関西", price: 1200, img: "", description: "しなやかで使いやすい竹箸の5膳セット。食卓に自然の温もりを添えます。" },
  { id: 3, name: "竹灯り体験", category: "体験", area: "九州", price: 4500, img: "", description: "幻想的な竹灯りを作るワークショップ。竹に穴を開けて、美しい光のアートを創造します。" },
  { id: 4, name: "竹の弁当箱", category: "加工品", area: "関東", price: 2800, img: "", description: "通気性が良く、ご飯が美味しいまま保たれる伝統的な竹製の弁当箱です。" },
  { id: 5, name: "竹のしおり", category: "竹材", area: "関西", price: 800, img: "", description: "読書のお供に。繊細なデザインが施された、軽くて丈夫な竹のしおりです。" },
  { id: 6, name: "竹炭クッキー", category: "食品", area: "九州", price: 1000, img: "", description: "デトックス効果も期待できる竹炭を練り込んだ、ほんのり甘いヘルシークッキー。" },
  { id: 7, name: "竹ランプ", category: "加工品", area: "関西", price: 5000, img: "", description: "お部屋を優しく照らす竹製のランプシェード。和室にも洋室にもマッチします。" },
  { id: 8, name: "竹茶体験", category: "体験", area: "関東", price: 2500, img: "", description: "静かな茶室で、珍しい竹の葉のお茶を味わう体験。心落ち着くひとときを。" },
  { id: 9, name: "竹粉せっけん", category: "食品", area: "九州", price: 900, img: "", description: "竹の微粒子パウダーを配合した自然派せっけん。すべすべの洗い上がりが特徴です。" },
  { id: 10, name: "竹風鈴", category: "加工品", area: "関西", price: 1800, img: "", description: "涼やかな音色が心地よい竹の風鈴。夏の暑さを和らげてくれます。" }
];

let currentPage = 1;
const itemsPerPage = 6;

const itemList = document.getElementById("itemList");
const pagination = document.getElementById("pagination");
const priceSlider = document.getElementById("priceSlider");
const priceValue = document.getElementById("priceValue");

// ▼▼▼ 変更点2: モーダル関連の要素を取得 ▼▼▼
const modal = document.getElementById('itemModal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalCategoryAndArea = document.getElementById('modalCategoryAndArea');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const modalPurchaseBtn = document.getElementById('modalPurchaseBtn');
const modalCloseBtn = document.getElementById('modalCloseBtn');


let filters = { category: "all", area: "all", maxPrice: 10000, keyword: "" };

function renderItems() {
  const filtered = items.filter(i =>
    (filters.category === "all" || i.category === filters.category) &&
    (filters.area === "all" || i.area === filters.area) &&
    (i.price <= filters.maxPrice) &&
    (i.name.includes(filters.keyword))
  );

  const start = (currentPage - 1) * itemsPerPage;
  const paginated = filtered.slice(start, start + itemsPerPage);

  // ▼▼▼ 変更点3: 表示するHTMLをシンプルに。data-idを付与 ▼▼▼
  itemList.innerHTML = paginated.map(i => `
    <div class="item" data-id="${i.id}">
      <img src="${i.img || 'https://via.placeholder.com/220x140?text=Image'}" alt="${i.name}">
      <h4>${i.name}</h4>
      <p>${i.category}</p>
      <p>¥${i.price.toLocaleString()}</p>
    </div>
  `).join("");

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  pagination.innerHTML = Array.from({ length: totalPages }, (_, i) => `
    <button class="${i + 1 === currentPage ? 'active' : ''}" onclick="goToPage(${i + 1})">${i + 1}</button>
  `).join("");
}

// ▼▼▼ 変更点4: モーダルを開く関数を定義 ▼▼▼
function openModal(item) {
  modalImg.src = item.img || 'https://via.placeholder.com/500x250?text=Image';
  modalImg.alt = item.name;
  modalTitle.textContent = item.name;
  modalCategoryAndArea.textContent = `カテゴリ: ${item.category} / エリア: ${item.area}`;
  modalDescription.textContent = item.description;
  modalPrice.textContent = `¥${item.price.toLocaleString()}`;
  modalPurchaseBtn.dataset.id = item.id; // 決済ボタンにIDを持たせる
  modal.classList.add('show');
}

// ▼▼▼ 変更点5: モーダルを閉じる関数を定義 ▼▼▼
function closeModal() {
  modal.classList.remove('show');
}

function goToPage(page) {
  currentPage = page;
  renderItems();
}

// フィルタリング関連のイベントリスナーは変更なし
document.getElementById("categoryFilter").addEventListener("click", e => {
    if (e.target.dataset.category) { filters.category = e.target.dataset.category; currentPage = 1; renderItems(); }
});
document.getElementById("areaFilter").addEventListener("click", e => {
    if (e.target.dataset.area) { filters.area = e.target.dataset.area; currentPage = 1; renderItems(); }
});
priceSlider.addEventListener("input", e => {
    filters.maxPrice = parseInt(e.target.value);
    priceValue.textContent = e.target.value;
    currentPage = 1;
    renderItems();
});
document.getElementById("searchInput").addEventListener("input", e => {
    filters.keyword = e.target.value;
    currentPage = 1;
    renderItems();
});


// ▼▼▼ 変更点6: イベントリスナーをモーダル用に変更 ▼▼▼
// 商品一覧のクリックイベント
itemList.addEventListener('click', (e) => {
  const clickedItem = e.target.closest('.item');
  if (!clickedItem) return;

  const itemId = clickedItem.dataset.id;
  const selectedItem = items.find(item => item.id == itemId);
  
  if (selectedItem) {
    openModal(selectedItem);
  }
});

// モーダル内の決済ボタンのクリックイベント
modalPurchaseBtn.addEventListener('click', (e) => {
  const itemId = e.target.dataset.id;
  const selectedItem = items.find(item => item.id == itemId);
  alert(`「${selectedItem.name}」の決済登録画面へ遷移します。`);
  // 実際の遷移処理例: window.location.href = '/checkout/' + itemId;
  closeModal(); // 遷移後にモーダルを閉じる
});

// モーダルを閉じるイベント
modalCloseBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  // 背景（オーバーレイ）部分をクリックしたら閉じる
  if (e.target === modal) {
    closeModal();
  }
});


renderItems();