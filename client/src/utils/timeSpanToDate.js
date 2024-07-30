export function timestampToDate(timestamp) {
    const date = new Date(timestamp);
    return date.toISOString().replace('T', ' ').substring(0, 19);
}