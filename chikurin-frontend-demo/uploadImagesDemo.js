import createHttpClient from '../utils/HttpClient.js';

//<input type="file">
const fileInput = document.querySelector('#file-input');
//button
const uploadBtn = document.querySelector('#upload-btn');

const { sendRequest } = createHttpClient('dev')

uploadBtn.addEventListener('click', async () => {
    const imageDatas = new Array
    //画像本体
    const files = fileInput.files;
    if (files.length === 0) return;

    //画像をimageDatasに格納
    for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        imageDatas.push({
            fileName: file.name,
            fileType: file.type,
            fileData: new Uint8Array(await file.arrayBuffer()),
        })
    }
    console.log(imageDatas[0].fileData instanceof Uint8Array);

    //requestする
    const res = await sendRequest('UploadImageTest', {
        otherNumber: 123,
        otherString: 'abc',
        images: imageDatas,
    })

    if (res.isSucc) {
        console.log(res.res.imageUrls);
    }
    else {
        console.log(res.err);
    }
})

