import createHttpClient from "../utils/HttpClient.js"

const httpClient = createHttpClient('dev');

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
    alert("ログインしてください");
    window.location.href = "login.html";
}

const fileInput = document.getElementById("bambooPhotos");
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

    //requestする
    const res = await httpClient.sendRequest('Chikurin/AddChikurin', {
        images: imageDatas,
        // bambooOwner
        // bambooZipcode
        // bambooAddress
        // bambooArea
        // bambooCount
        // bambooType
        // bambooNotes
        ownerName: bambooOwner.value,
        postCode: bambooZipcode.value,
        address: bambooAddress.value,
        //turn to number
        area: parseFloat(bambooArea.value),
        bambooCount: parseFloat(bambooCount.value),
        category: bambooType.value,
        else: bambooNotes.value,
    })

    if (res.isSucc) {
        alert("竹林情報を登録しました！")
    }
    else {
        alert(res.err.message)
    }

})

information.addEventListener('click', () => {
    location.href = `information.html?id=${id}`;
})

bambooEdit.addEventListener('click', () => {
    location.href = `bamboo_edit.html?id=${id}`;
})