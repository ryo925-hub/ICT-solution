const preset = {
    "dev": {
        wsUrl: "ws://localhost:3001",
        httpUrl: "https://m1.apifoxmock.com/m1/7193386-6918779-default",
    },
    "prod": {
        wsUrl: "ws://:3001",
        httpUrl: "http://:3000",
    }
}


export default () => preset;