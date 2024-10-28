let pushedButton = null;
let xkonum = 325;
let xhiz = 1;
let ykonum = 325;
let yhiz= 1;
let aci = 0
let yilan = document.getElementById("yilan");
let hareketEdiyor = false;

function tusuYakalama(){
    document.addEventListener("keydown", function(event){
        pushedButton = event.key;
        if (!hareketEdiyor){
            hareket();
        }
        ekleme();
        takipet();
    }); 
}

function hareket(){
    hareketEdiyor = true;
    if (pushedButton == "a"){
        if(true){
            yilan.style.left = `${xkonum}px`;
            xkonum -= xhiz;
            console.log("a");
            yilan.style.transform = `rotate(${270}deg)`;
            
            
        }
    }
    else if (pushedButton == "d"){
        if(true){
            yilan.style.left = `${xkonum}px`;
            xkonum += xhiz;
            console.log("d")
            yilan.style.transform = `rotate(${90}deg)`;
            
        }
    }
    else if (pushedButton == "w"){
        if(true){
            yilan.style.top = `${ykonum}px`; 
            ykonum -= yhiz;
            console.log("w")
            yilan.style.transform = `rotate(${0}deg)`;
            
        }
    }
    else if (pushedButton == "s"){
        if(true){
            yilan.style.top = `${ykonum}px`; 
            ykonum += yhiz;
            console.log("s")
            yilan.style.transform = `rotate(${180}deg)`;
            
        }
    }
    setTimeout(hareket,10);
    document.getElementById("durakla").textContent = ""
    if(ykonum >= 675){
        ykonum=0;
        }
    else if(ykonum <= 0){
        ykonum=675;
        }
    if(xkonum >= 675){
        xkonum=0;
        }
    else if(xkonum <= 0){
        xkonum=675;
        }
}



