let pushedButton = null;
let xkonum = 325;
let xhiz = 1;
let ykonum = 325;
let yhiz= 1;
let yilan = document.getElementById("yilan");
let hareketEdiyor = false;

function tusuYakalama(){
    document.addEventListener("keydown", function(event){
        pushedButton = event.key;
        if (!hareketEdiyor){
            hareket();
        }
    });
}

function hareket(){
    hareketEdiyor = true;
    if (pushedButton == "a"){
        if(true){
            yilan.style.left = `${xkonum}px`;
            xkonum -= xhiz;
            setTimeout(hareket,10);
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
    }
    if (pushedButton == "d"){
        if(true){
            yilan.style.left = `${xkonum}px`;
            xkonum += xhiz;
            setTimeout(hareket,10);
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
    }
    if (pushedButton == "w"){
        if(true){
            yilan.style.top = `${ykonum}px`; 
            ykonum -= yhiz;
            setTimeout(hareket,10);
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
    }
    if (pushedButton == "s"){
        if(true){
            yilan.style.top = `${ykonum}px`; 
            ykonum += yhiz;
            setTimeout(hareket,10);
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

    }

}



