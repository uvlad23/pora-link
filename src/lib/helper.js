export function noSymbolsString(str) {
    return str.replace(/[^a-zA-ZА-Яа-я0-9\s']/, "")
}