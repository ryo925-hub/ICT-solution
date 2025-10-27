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
const res = await sendRequest('Login/Login', {
    loginID: "abcd@gmail.com",
    password: "password",
})

if (res.isSucc) {
    console.log(res.res.token);
    localStorage.setItem('token', res.res.token);
}