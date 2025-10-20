import { ServiceType } from "../shared/protocols/serviceProto"
import getPreset from "./config.js"

const preset = getPreset()

type presetType = keyof typeof preset

type msgNames = keyof ServiceType['msg']
type msgTpye = ServiceType['msg']
type callbackMapType = { [key in msgNames]?: (data: msgTpye[key]) => any }
type msgDataType = {
    [key in msgNames]: [key, msgTpye[key]]
}[msgNames]

const createWsClient = (presetType: presetType) => {
    let wsClient: WebSocket | null = null;
    const callbackMap: callbackMapType = {};
    // const callbackMap: Map<msgNames, (data: ServiceType['msg'][msgNames]) => any> = new Map();

    const initClient = async () => {
        closeClient();
        return new Promise((resolve, reject) => {
            wsClient = new WebSocket(preset[presetType].wsUrl)

            wsClient.addEventListener("open", () => {
                console.log("WebSocket connection established on: ", preset[presetType].wsUrl);

                resolve({
                    isSucc: true,
                    wsClient,
                })
            })

            wsClient.addEventListener("close", (e) => {
                console.log("WebSockeFt connection closed: ", e);

                resolve({
                    isSucc: false,
                    e
                })
            })

            wsClient.addEventListener("error", (e) => {
                console.log("WebSocket connection error: ", e);
            })

            wsClient.addEventListener("message", (event) => {
                const messageString = event.data as string;
                const [messageName, data] = JSON.parse(messageString) as msgDataType;
                console.log("Received message: ", messageName, data);

                if (callbackMap[messageName]) {
                    (callbackMap[messageName] as (a: typeof data) => any)(data);
                }
                else {
                    console.error(`No callback registered for message: ${messageName}`);
                }

                // if (callbackMap[messageName]) {
                //     callbackMap.get(messageName)?.(data);
                // }
                // else {
                //     console.error(`No callback registered for message: ${messageName}`);
                // }
            })
        })
    }

    const sendMessage = async <T extends msgNames>(messageName: T, data: msgTpye[T]) => {
        if (!wsClient) {
            console.log("WebSocket connection is not established yet.");
            return;
        }

        wsClient.send(JSON.stringify([messageName, data]))
    }

    const closeClient = () => {
        wsClient?.close()
        wsClient = null;
    }

    const listenMessage = <T extends msgNames>(messageName: T, callback: callbackMapType[T]) => {
        callbackMap[messageName] = callback
    }

    const removeMessageListener = (messageName: msgNames) => {
        delete callbackMap[messageName]
    }

    return {
        initClient,
        sendMessage,
        closeClient,
        listenMessage,
        removeMessageListener,
    }
}

export default createWsClient;