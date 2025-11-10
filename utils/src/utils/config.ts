const preset = {
    "dev": {
        wsUrl: "ws://localhost:3001",
        httpUrl: "http://192.168.43.186",
    },
    "prod": {
        wsUrl: "ws://:3001",
        httpUrl: "http://:3000",
    }
}


export default () => preset;