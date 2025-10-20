var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getPreset from './config.js';
const preset = getPreset();
const createHttpClient = (presetType) => {
    console.log(axios);
    // preset[presetType].httpUrl
    // axios.post('http://localhost:3000/GetData', {
    // })
    //     .then(function (response) {
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     });
    const sendRequest = (requestName, params) => __awaiter(void 0, void 0, void 0, function* () {
        return new Promise((resolve, reject) => __awaiter(void 0, void 0, void 0, function* () {
            try {
                const { data } = yield axios.post(`${preset[presetType].httpUrl}/${requestName}`, params);
                if (data.isSucc) {
                    resolve(data);
                }
                else {
                    resolve(data);
                }
            }
            catch (err) {
                // resolve({
                //     isSucc: false,
                //     err
                // })
                resolve({
                    isSucc: false,
                    err
                });
            }
        }));
    });
    return {
        sendRequest,
    };
};
export default createHttpClient;
