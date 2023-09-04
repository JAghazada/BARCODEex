const a4_vol = document.querySelector("#a4-vol");
const width_vol = document.querySelector("#width-vol");
const height_vol = document.querySelector("#height-vol");
const margin_vol = document.querySelector("#margin-vol")
const barcodes = document.querySelectorAll(".barcode")
a4_vol.addEventListener("input",e=>{
    
    let val = e.target.value.trim();
    if(val === ""){
        val = 0;
    }
    document.querySelector("#barcode-page").style.padding = val + "mm";
})
width_vol.addEventListener("input",e=>{
    let val = e.target.value.trim();
    if(val === ""){
        val = 0;
    }
  barcodes.forEach(div=>{
      div.style.width = val + "mm"
  })
})
height_vol.addEventListener("input",e=>{
    let val = e.target.value.trim();
    if(val === ""){
        val = 0;
    }
    barcodes.forEach(div=>{
        div.style.height = val + "mm"
    })
})
margin_vol.addEventListener("input",e=>{
    let val = e.target.value.trim();
    if(val === ""){
        val = 0;
    }
    barcodes.forEach(div=>{
        div.style.margin = val + "mm"
    })
})