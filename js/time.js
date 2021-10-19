function update(){
    const today = new Date();
    const minutes = ('0' + today.getMinutes()).slice(-2);
    const seconds = ('0' + today.getSeconds()).slice(-2);
    const hours = ('0' + today.getHours(today)).slice(-2);

    let array = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const tempDay = today.getDay();
    const currentDay = array[tempDay];
    const day = ('0' + today.getDate()).slice(-2);
    const month = ('0' + (today.getMonth() + 1)).slice(-2);
    let element = document.getElementById("currentDate");
    element.innerHTML = `<div>${day}(${currentDay})/${month} ${hours}:${minutes}:${seconds}</div>`;
}


setInterval(update, 1000);

