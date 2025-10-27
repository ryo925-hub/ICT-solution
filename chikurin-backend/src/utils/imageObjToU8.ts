export default function (imageObj: { [index: number]: number }) {
    const arr = Object.values(imageObj);
    return new Uint8Array(arr);
}