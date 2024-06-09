let btn = document.querySelector(".button");
let qr_code_element = document.querySelector(".qr-code");

btn.addEventListener("click", ( ) => {
let input_nome = document.querySelector("#input_nome");
let input_matricula = document.querySelector("#input_matricula");
let input_email = document.querySelector("#input_email");

    if (input_nome.value != "" && input_matricula.value != "") {
        
        let values = {
            nome: input_nome.value,
            matricula: input_matricula.value,
            email: input_email.value
        }

        if (qr_code_element.childElementCount == 0) {
            generate(values);    
        } else {
            qr_code_element.innerHTML = "";
            generate(values);   
        }
    }else {
        qr_code_element.style = "display:none"
        alert("Preencha todos os campos!")
    }
});

function generate(value){
    qr_code_element.style = "";

    console.log(value)

    let qrcode = new QRCode(qr_code_element, {
        width: 180, //128
        height: 180,
        colorDark: "#000",
        colorLight:"#fff",
        correctLevel:QRCode.CorrectLevel.H
    });

    qrcode.makeCode(JSON.stringify(value))

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
    value:"Hello World!"
});
