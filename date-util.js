exports.dateToString = (date) => {
    return padString(date.getFullYear()) +
                  padString(1 + date.getMonth()) +
                  padString(date.getDate()) +
                  padString(date.getHours()) +
                  padString(date.getMinutes()) +
                  padString(date.getSeconds());
}

function padString(i) {
    return (i < 10) ? '0' + i : '' + i;
}