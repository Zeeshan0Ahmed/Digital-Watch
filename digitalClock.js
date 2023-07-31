const hourEl = document.getElementById("hour")
const minEl = document.getElementById("minute")
const secEl = document.getElementById("second")
const ampmEl = document.getElementById("ampm")
function clock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM"
    if(h > 12){
        h = h - 12;
        ampm = "PM"
    }
    h = h<10 ? "0" + h : h;
    m = m<10 ? "0" + m : m;
    s = s<10 ? "0" + s : s;
    hourEl.innerHTML = h;
    minEl.innerHTML = m;
    secEl.innerHTML = s;
    ampmEl.innerHTML = ampm;
    setTimeout(()=>{
        clock();
    },1000);
}
clock();