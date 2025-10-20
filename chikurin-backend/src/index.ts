import * as path from "path";
import { HttpServer, WsServer } from "tsrpc";
import { serviceProto } from "./shared/protocols/serviceProto";
import { log } from "console";

// Create the Server
const server = new HttpServer(serviceProto, {
    port: 3000,
    // Remove this to use binary mode (remove from the client too)
    json: true
});
const wsServer = new WsServer(serviceProto, {
    port: 3001,
    json: true
})

// Initialize before server start
async function init() {
    // Auto implement APIs
    await server.autoImplementApi(path.resolve(__dirname, 'api'));

    // TODO
    // Prepare something... (e.g. connect the db)
    wsServer.listenMsg('Chat', async ctx => {
        console.log(ctx.msg.content);
        wsServer.broadcastMsg('Chat', {
            content: 'Hello, World!'
        })
        
        wsServer.broadcastMsg('Test', {
            name: 'Test',
            age: 19,
            gender: 'Male'
        })
    })


};

// Entry function
async function main() {
    await init();
    await server.start();
    await wsServer.start();

};
main();