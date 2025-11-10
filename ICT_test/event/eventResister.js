import createHttpClient from '../../utils/HttpClient.js'

const { sendRequest } = createHttpClient("dev");
const res = await sendRequest('Login/GetUserData', {});
if (res.isSucc) {
    // console.log(res.res.user);
    window.user = res.res.user;
}
else {
    alert("ログインしてください");
    window.location.href = "../login.html";
}

// 擬似的なデータベースとして使用する配列
// imgプロパティは、後で画像のデータURLを格納するために空にしておきます
let items = [
    { name: "竹細工体験", category: "体験", area: "関東", price: 3000, img: "https://via.placeholder.com/300x200.png?text=Takezaiku" },
    { name: "竹箸セット", category: "竹材", area: "関西", price: 1200, img: "https://via.placeholder.com/300x200.png?text=Hashi" },
    { name: "竹灯り体験", category: "体験", area: "九州", price: 4500, img: "https://via.placeholder.com/300x200.png?text=Takeakari" },
    { name: "竹の弁当箱", category: "加工品", area: "関東", price: 2800, img: "https://via.placeholder.com/300x200.png?text=Bento" },
];

// DOM要素の取得
const form = document.getElementById('event-form');
const nameInput = document.getElementById('name-input');
const categorySelect = document.getElementById('category-select');
const areaSelect = document.getElementById('area-select');
const priceInput = document.getElementById('price-input');
const imageInput = document.getElementById('image-input');
const imagePreview = document.getElementById('image-preview');
const previewText = document.getElementById('preview-text');
const itemListContainer = document.getElementById('item-list');

// 画像プレビュー機能
imageInput.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
            previewText.style.display = 'none';
        };
        reader.readAsDataURL(file);
    }
});

// // フォーム送信時の処理
// form.addEventListener('submit', (event) => {
//     // デフォルトのフォーム送信をキャンセル
//     event.preventDefault();

//     // 新しいアイテムのオブジェクトを作成
//     const newItem = {
//         name: nameInput.value,
//         category: categorySelect.value,
//         area: areaSelect.value,
//         price: parseInt(priceInput.value),
//         // プレビューに表示されている画像(データURL)を取得。なければ空文字。
//         img: imagePreview.src.startsWith('data:') ? imagePreview.src : ''
//     };

//     // 配列（データベース）に新しいアイテムを追加
//     items.push(newItem);

//     // フォームをリセット
//     form.reset();
//     resetPreview();

//     // 一覧を再描画
//     renderItems();
// });


/**
 * 画像プレビューを初期状態に戻す関数
 */
function resetPreview() {
    imagePreview.src = '#';
    imagePreview.style.display = 'none';
    previewText.style.display = 'block';
}

/**
 * items配列の内容を元に、HTMLを生成して一覧表示する関数
 */
function renderItems() {
    // 表示エリアを一旦空にする
    itemListContainer.innerHTML = '';

    items.forEach(item => {
        // 画像がない場合のプレースホルダー画像
        const imageUrl = item.img || 'https://via.placeholder.com/300x200.png?text=No+Image';

        const cardHTML = `
            <div class="item-card">
                <img src="${imageUrl}" alt="${item.name}">
                <div class="item-card-content">
                    <h3>${item.name}</h3>
                    <p><strong>カテゴリー:</strong> ${item.category}</p>
                    <p><strong>エリア:</strong> ${item.area}</p>
                    <p class="price">${item.price.toLocaleString()}円</p>
                </div>
            </div>
        `;
        // HTMLをコンテナの末尾に追加
        itemListContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// 初期表示のために、ページ読み込み時に一度実行する
document.addEventListener('DOMContentLoaded', renderItems);

//ここから追加


//<input type="file">
const fileInput = document.querySelector('#image-input');
//button
const uploadBtn = document.querySelector('#upload-btn');

button.addEventListener('click', async () => {
    const imageDatas = new Array
    //画像本体
    const files = fileInput.files;

    //画像をimageDatasに格納
    for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        imageDatas.push({
            fileName: file.name,
            fileType: file.type,
            fileData: new Uint8Array(await file.arrayBuffer()),
        })
    }
    // console.log(imageDatas[0].fileData instanceof Uint8Array);

    console.log(priceInput.value);
    
    //requestする
    const res = await sendRequest('Event/AddEvent', {
        images: imageDatas,
        name: nameInput.value,
        category: categorySelect.value,
        area: areaSelect.value,
        price: parseFloat(priceInput.value),
        description: previewText.value || '',
        startTime: new Date(),
        endTime: new Date(),
    })

    if (res.isSucc) {
        console.log(res.res.imageUrls);
    }
    else {
        console.log(res.err);
    }
})