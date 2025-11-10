import createHttpClient from "../utils/HttpClient.js"

const httpClient = createHttpClient('dev');

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (!id) {
    alert("ログインしてください");
    window.location.href = "login.html";
}

const ret = await httpClient.sendRequest('Login/GetUserData', {});
if (ret.isSucc) {
    console.log(ret.res);

    lastName2.value = ret.res.user.lastName2;
    firstName2.value = ret.res.user.firstName2;
    lastName1.value = ret.res.user.lastName1;
    firstName1.value = ret.res.user.firstName1;

    switch (ret.res.user.gender) {
        case "male":
            document.getElementById("male").checked = true;
            break;
        case "female":
            document.getElementById("female").checked = true;
            break;
        case "other":
            document.getElementById("other").checked = true;
            break;
        default:
            break;
    }


    birthdate.value = new Date(ret.res.user.birthday).toISOString().split('T')[0];
    email.value = ret.res.user.mailAddress;
    password.value = ret.res.user.password;
}
else {
    alert(ret.err.message)
}


updateButton.addEventListener('click', async () => {

    let genderValue;
    if (document.getElementById("male").checked) {
        genderValue = "male";
    }
    else if (document.getElementById("female").checked) {
        genderValue = "female";
    }
    else if (document.getElementById("other").checked) {
        genderValue = "other";
    }
    const ret = await httpClient.sendRequest('Login/UpdateProfile', {
        lastName1: lastName1.value,
        firstName1: firstName1.value,
        lastName2: lastName2.value,
        firstName2: firstName2.value,
        gender: genderValue,
        birthday: new Date(birthdate.value).toISOString(),
        mailAddress: email.value,
        password: password.value,
    })

    if (ret.isSucc) {
        alert('個人情報を更新しました！')
    }
    else {
        alert(ret.err.message)
    }
})

bamboo.addEventListener('click', () => {
    location.href = `bamboo.html?id=${id}`;
})