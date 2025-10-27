import createHttpClient from '../utils/HttpClient.js';

const { sendRequest } = createHttpClient('dev');

// const res = await sendRequest('Login/Regist', {
//     firstName1: "リョウ",
//     lastName1: "スギヤマ",
//     firstName2: "涼",
//     lastName2: "杉山",
//     birthday: new Date("2002-09-25"),
//     mailAddress: "abcd@gmail.com",
//     password: "password",
// })


async function login() {
    const loginId = document.getElementById('loginId').value;
    const password = document.getElementById('password').value;

    const res = await sendRequest("Login/Login", {
        loginID: loginId,
        password: password,
    })

    if (res.isSucc) {
        console.log(res.res.token);
        localStorage.setItem('token', res.res.token);
        window.location.href = 'index.html';
    }
}