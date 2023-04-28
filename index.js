let ipAddress = document.querySelector(".ip-result")
let get = document.querySelector(".get")
let copy = document.querySelector(".copy")
let SHare = document.querySelector(".Share")


get.addEventListener("click", function() {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://ipinfo.io?token=4667875371056a",true);

    xhr.onload = () => {
        let Responses = JSON.parse(xhr.response).ip;
        localStorage.setItem("ip",Responses);
        ipAddress.innerHTML = Responses;
    }

    xhr.onprogress = () => {
        ipAddress.innerHTML = "Loading...";
    }

    xhr.send()
})

copy.addEventListener("click", () => {
    navigator.clipboard.writeText(ipAddress.innerHTML);
    copy.innerHTML = "Copyed";

    setTimeout( () => {
        copy.innerHTML = "Copy IP"
    }, 3000)
})

SHare.addEventListener("click" , () => {
    navigator.share({
        title: "Get IP",
        text: "Shared IP With...",
        url: ipAddress.innerHTML
    })
});

window.onload = () => {
    let localVal = localStorage.getItem("ip")

    ipAddress.innerHTML = localVal;

    console.log(navigator.userAgent)
}