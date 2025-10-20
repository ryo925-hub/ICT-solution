import createWsClient from './utils/WsClient.js';
import createHttpClient from './utils/HttpClient.js';

    const items = [
      { name: "竹細工体験", category: "体験", area: "関東", price: 3000, img: "" },
      { name: "竹箸セット", category: "竹材", area: "関西", price: 1200, img: "" },
      { name: "竹灯り体験", category: "体験", area: "九州", price: 4500, img: "" },
      { name: "竹の弁当箱", category: "加工品", area: "関東", price: 2800, img: "" },
      { name: "竹のしおり", category: "竹材", area: "関西", price: 800, img: "" },
      { name: "竹炭クッキー", category: "食品", area: "九州", price: 1000, img: "" },
      { name: "竹ランプ", category: "加工品", area: "関西", price: 5000, img: "" },
      { name: "竹茶体験", category: "体験", area: "関東", price: 2500, img: "" },
      { name: "竹粉せっけん", category: "食品", area: "九州", price: 900, img: "" },
      { name: "竹風鈴", category: "加工品", area: "関西", price: 1800, img: "" }
    ];

    let currentPage = 1;
    const itemsPerPage = 6;

    const itemList = document.getElementById("itemList");
    const pagination = document.getElementById("pagination");
    const priceSlider = document.getElementById("priceSlider");
    const priceValue = document.getElementById("priceValue");

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

      itemList.innerHTML = paginated.map(i => `
        <div class="item">
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

    function goToPage(page) {
      currentPage = page;
      renderItems();
    }

    document.getElementById("categoryFilter").addEventListener("click", e => {
      if (e.target.dataset.category) {
        filters.category = e.target.dataset.category;
        currentPage = 1;
        renderItems();
      }
    });

    document.getElementById("areaFilter").addEventListener("click", e => {
      if (e.target.dataset.area) {
        filters.area = e.target.dataset.area;
        currentPage = 1;
        renderItems();
      }
    });

    priceSlider.addEventListener("input", e => {
      filters.maxPrice = parseInt(e.target.value);
      priceValue.textContent = e.target.value;
      renderItems();
    });

    document.getElementById("searchInput").addEventListener("input", e => {
      filters.keyword = e.target.value;
      renderItems();
    });

    renderItems();