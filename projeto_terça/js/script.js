let btn = document.querySelector(".button");
let qr_code_element = document.querySelector(".qr-code");

btn.addEventListener("click", ( ) => {
let user_input = document.querySelector("#input_text");
    if (user_input.value != "") {
        if (qr_code_element.childElementCount == 0) {
            generate(user_input);    
        } else {
            qr_code_element.innerHTML = "";
            generate(user_input);
        }
    }else {
        qr_code_element.style = "display:none"
    }
});

function generate(user_input){
    qr_code_element.style = "";
    console.log(user_input.value)
    let qrcode = new QRCode(qr_code_element, {
        width: 180, //128
        height: 180,
        colorDark: "#000",
        colorLight:"#fff",
        correctLevel:QRCode.CorrectLevel.H
    });

    qrcode.makeCode(user_input.value)

    let download = document.createElement("button");
    qr_code_element.appendChild(download);

    let download_link = document.createElement("a");
    download_link.setAttribute("download", "qr_code.png");
    download_link.innerHTML = `download`;
    
    download.appendChild(download_link);

    let qr_code_img = document.querySelector(".qr-code img");
    let qr_code_canvas = document.querySelector("canvas");

    if(qr_code_img.getAttribute("src") == null) {
        setTimeout(() => {
            download_link.setAttribute("href", `${qr_code_canvas.toDataURL()}`); 
        }, 300);
    }else {
        setTimeout(() => {
            download_link.setAttribute("href", `${qr_code_img.getAttribute("src")}`);
        }, 300);
    }
}

generate({
    value:"https://codepen.io/coding_dev_"
});