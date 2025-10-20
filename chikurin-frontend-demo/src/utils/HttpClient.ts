import { ServiceType } from "../shared/protocols/serviceProto"
import getPreset from './config.js'
import global from 'global'

const preset = getPreset()

type presetType = keyof typeof preset

type requestNames = keyof ServiceType['api']
type requestType = ServiceType['api']

type success<T extends requestNames> = {
    isSucc: true,
    res: requestType[T]['res']
}
type fail = {
    isSucc: false,
    err: any
}
type responseResult<T extends requestNames> = success<T> | fail

const createHttpClient = (presetType: keyof typeof preset) => {
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

    const sendRequest = async <T extends requestNames>(requestName: T, params: requestType[T]['req']): Promise<responseResult<T>> => {
        return new Promise(async (resolve, reject) => {
            try {
                const { data } = await axios.post(`${preset[presetType].httpUrl}/${requestName}`, params)

                if (data.isSucc) {
                    resolve(data as {
                        isSucc: true,
                        res: requestType[T]['res']
                    })
                }
                else {
                    resolve(data as {
                        isSucc: false,
                        err: any
                    })
                }
            } catch (err) {
                resolve({
                    isSucc: false,
                    err
                });
            }
        })
    }

    return {
        sendRequest,
    }
}

export default createHttpClient;