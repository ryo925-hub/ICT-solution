const preset = {
    "dev": {
        wsUrl: "ws://localhost:3001",
        httpUrl: "http://157.80.143.205:3000",
    },
    "prod": {
        wsUrl: "ws://:3001",
        httpUrl: "http://:3000",
    }
}


export default () => preset;