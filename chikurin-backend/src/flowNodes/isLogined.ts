import { BaseServer } from "tsrpc"
import { ServiceType } from "../shared/protocols/serviceProto"
import { verify } from "jsonwebtoken";
import { secret } from "../dev.json";
import { Global } from "../Global";
import { ObjectId } from "mongodb";
import { users } from "../shared/entities/user";

export async function isLogined(server: BaseServer<ServiceType>) {
    server.flows.preApiCallFlow.push(async (call) => {
        const conf = call.service.conf
        //不需要登录验证
        if (!conf?.needLogin) return call
        //需要验证
        else {
            // console.log('need login');
            const token = call.req.__token

            try {
                const res = verify(token, secret) as {
                    id: string,
                    iat: number,
                    exp: number,
                }

                //unexpired pass
                if (new Date(res.exp * 1000) > new Date()) {
                    //拓展call currentUSer
                    // Global.collection('users').findOne({
                    //     _id:new ObjectId(res.id)
                    // }).then(res =>{
                    //     console.log(res);
                    // })
                    const user = await Global.collection('users').findOne({
                        _id: new ObjectId(res.id)
                    })
                    call.currentUser = user as users

                    return call
                }
                //expired
                else {
                    call.error('expired token')
                    return null
                }
            } catch (error) {
                call.error('invalid token')
                return null
            }

        }
    })
}