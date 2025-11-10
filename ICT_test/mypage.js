import createHttpClient from '../utils/HttpClient.js'

const { sendRequest } = createHttpClient('dev')

const res = await sendRequest('Login/GetUserData', {});
if (res.isSucc) {
    console.log("mypage");
    console.log(res.res.user);

    information.href = `information.html?id=${res.res.user._id}`;
    eventResister.href = `event/eventResister.html`;//?id=${res.res.user._id}
}

logout.addEventListener('click', () => {
    localStorage.removeItem('token');
    location.href = 'login.html';
})
