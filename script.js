function addImage(){
    let div = document.getElementById("div");
    let h2 = document.createElement("h2");
    h2.innerText = "Image Element Added.";
    h2.style.color = "green";
    let img = document.createElement("img");
    img.src = "https://geekster.in/images/logo.svg";
    div.innerHTML = "";
    div.appendChild(h2);
    div.appendChild(img);
}