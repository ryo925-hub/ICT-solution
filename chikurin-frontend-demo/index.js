import createWsClient from '../utils/WsClient.js';
import createHttpClient from '../utils/HttpClient.js';


//チャット機能で使用するメッセージ
const { initClient, sendMessage, closeClient, listenMessage, removeMessageListener } = createWsClient("dev")

const wsClient = await initClient();
if (wsClient.isSucc) {

    sendMessage('Chat', {
        content: 'Hello, world!'
    })

    listenMessage('s', (data) => {
        console.log(data.sas);
    })

    listenMessage('Chat', data => {
        console.log(data.content);
    })

    listenMessage('Test', data => {
        console.log(data.name, data.gender, data.age);
    })

    sendMessage('Test', {
        gender: 'Male',
        age: 25,
        name: 'John'
    })
}
else {
}


//httpクライアント
const { sendRequest } = createHttpClient("dev");

const res = await sendRequest('AddData', {
    content: 'sadsfasdf'
})
if (res.isSucc) {
    console.log(res.res.time);
}
else {
    console.log(res.err);
}

const res2 = await sendRequest('GetData', {})
if (res2.isSucc) {
    console.log(res2.res.data);
}





