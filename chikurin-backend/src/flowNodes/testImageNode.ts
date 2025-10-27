import { HttpServer } from "tsrpc";
import { ServiceType } from "../shared/protocols/serviceProto";

export default async function testImageNode(server: HttpServer<ServiceType>) {
    server.flows.preRecvDataFlow.push(v => {
        console.log("******************");
        console.log(v.data);
        
        return v;
    })
}