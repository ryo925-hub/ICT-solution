const preset = {
    "dev": {
        wsUrl: "ws://localhost:3001",
        // httpUrl: "https://m1.apifoxmock.com/m1/7193386-6918779-default",
        // httpUrl: "http://192.168.43.186:3000"
        httpUrl: "http://localhost:3000"
    },
    "prod": {
        wsUrl: "ws://:3001",
        httpUrl: "http://:3000",
    }
};
export default () => preset;
