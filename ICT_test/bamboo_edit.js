import createHttpClient from "../utils/HttpClient.js"

const httpClient = createHttpClient('dev');

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
    alert("ログインしてください");
    window.location.href = "login.html";
}

const ret = await httpClient.sendRequest('Chikurin/GetChikurins', {});
if (ret.isSucc) {
    if (ret.res.chikurins.length === 0) {
        alert("竹林はまだ登録されていません!");
        location.href = `bamboo.html?id=${id}`;
    }

    const bamboo = ret.res.chikurins[0];
    console.log(bamboo);
    bambooOwner.value = bamboo.ownerName;
    bambooZipcode.value = bamboo.postCode;
    bambooAddress.value = bamboo.address;
    bambooArea.value = bamboo.area.toString();
    bambooCount.value = bamboo.bambooCount.toString();
    bambooType.value = bamboo.category;
    bambooNotes.value = bamboo.else;
}
else {
    alert(ret.err.message);
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
    const res = await httpClient.sendRequest('Chikurin/UpdateChikurin', {
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
        alert("竹林情報を更新しました！")
    }
    else {
        alert(res.err.message)
    }

})

bamboo.addEventListener('click', () => {
    location.href = `bamboo.html?id=${id}`;
})
information.addEventListener('click', () => {
    location.href = `information.html?id=${id}`;
})