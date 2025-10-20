var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import getPreset from "./src/utils/config.js";
const preset = getPreset();
const createWsClient = (presetType) => {
    let wsClient = null;
    const callbackMap = {};
    // const callbackMap: Map<msgNames, (data: ServiceType['msg'][msgNames]) => any> = new Map();
    const initClient = () => __awaiter(void 0, void 0, void 0, function* () {
        closeClient();
        return new Promise((resolve, reject) => {
            wsClient = new WebSocket(preset[presetType].wsUrl);
            wsClient.addEventListener("open", () => {
                console.log("WebSocket connection established on: ", preset[presetType].wsUrl);
                resolve({
                    isSucc: true,
                    wsClient,
                });
            });
            wsClient.addEventListener("close", (e) => {
                console.log("WebSockeFt connection closed: ", e);
                resolve({
                    isSucc: false,
                    e
                });
            });
            wsClient.addEventListener("error", (e) => {
                console.log("WebSocket connection error: ", e);
            });
            wsClient.addEventListener("message", (event) => {
                const messageString = event.data;
                const [messageName, data] = JSON.parse(messageString);
                console.log("Received message: ", messageName, data);
                if (callbackMap[messageName]) {
                    callbackMap[messageName](data);
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
            });
        });
    });
    const sendMessage = (messageName, data) => __awaiter(void 0, void 0, void 0, function* () {
        if (!wsClient) {
            console.log("WebSocket connection is not established yet.");
            return;
        }
        wsClient.send(JSON.stringify([messageName, data]));
    });
    const closeClient = () => {
        wsClient === null || wsClient === void 0 ? void 0 : wsClient.close();
        wsClient = null;
    };
    const listenMessage = (messageName, callback) => {
        callbackMap[messageName] = callback;
    };
    const removeMessageListener = (messageName) => {
        delete callbackMap[messageName];
    };
    return {
        initClient,
        sendMessage,
        closeClient,
        listenMessage,
        removeMessageListener,
    };
};
export default createWsClient;
