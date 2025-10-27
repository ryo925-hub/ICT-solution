import createHttpClient from '../utils/HttpClient.js';

const fileInput = document.querySelector('#file-input');
const uploadBtn = document.querySelector('#upload-btn');

const { sendRequest } = createHttpClient('dev')

uploadBtn.addEventListener('click', async () => {
    const imageDatas = new Array
    const files = fileInput.files;
    if (files.length === 0) return;

    for (let i = 0; i < files.length; i++) {
        const file = files.item(i);

        imageDatas.push({
            fileName: file.name,
            fileType: file.type,
            fileData: new Uint8Array(await file.arrayBuffer()),
        })
    }
    console.log(imageDatas[0].fileData instanceof Uint8Array);

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

