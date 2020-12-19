let startDate = new Date(2019, 8, 28);
let now = new Date();

document.getElementById("timesince").innerHTML = yearsDiff(startDate, now);

function days_between(date1, date2){
    //Number of milliseconds in a day
    const singleDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    //Difference in milliseconds
    let difference = Math.abs(date1 - date2);
    //return difference converted into days
    return Math.round(difference / singleDay);
}

function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
      (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

function yearsDiff(startDate, endDate){
    let difference = endDate.getFullYear() - startDate.getFullYear();
    return difference;
}