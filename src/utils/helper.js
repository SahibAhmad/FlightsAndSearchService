function compareTime(dateTime1,dateTime2) {
    let arrivalTime = new Date(dateTime1);
    let departureTime = new Date(dateTime2);

    return departureTime.getTime() < arrivalTime.getTime();
}


module.exports = {
    compareTime,
}