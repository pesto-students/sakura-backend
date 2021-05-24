export function convertToJsObj(data: any) {
    return JSON.parse(JSON.stringify(data));
}