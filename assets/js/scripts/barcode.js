function randomLetterString(length) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let result = "";
    const lettersLength = letters.length;

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * lettersLength);
        result += letters.charAt(randomIndex);
    }

    return result;
}
const genereateBarcodes =(col)=>{
    for(let count = 0;count <13 ; count++){
        const img = document.createElement("img");
        const id = randomLetterString(10);
        img.id = id;
        img.classList.add("barcode")
        col.append(img);
        JsBarcode(`#${id}`, "98004787844848");

    }
    
}
for(let num = 1;num<6;num++){
    const col = document.querySelector(".col-"+num);
    genereateBarcodes(col)
    
}