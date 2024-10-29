let pushedButton = null;
let xkonum = 325;
let xhiz = 5;
let ykonum = 350;
let yhiz= 5;
let kuyrukxkonum = 325;
let kuyrukykonum = 325;
let hareketSirasi = 0 ;
let footPrintX = [];
let footPrintY = [];
footPrintX.push(xkonum);
footPrintY.push(ykonum);
let aci = 0
let yilan = document.getElementById("yilan");
let kuyruk = document.getElementById("kuyruk");
let hareketEdiyor = false;
let sonbasilan_w = false;
let sonbasilan_s = false;
let sonbasilan_a = false;
let sonbasilan_d = false

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
    if (sonbasilan_d == false && pushedButton == "a"){
        
        if(true){

            
            
            xkonum -= xhiz;
            
            
            yilan.style.left = `${xkonum}px`;
            
            yilan.style.transform = `rotate(${270}deg)`;
           
            sonbasilan_w = false;
            sonbasilan_s = false;
            sonbasilan_d = false;
            sonbasilan_a = true;
        }
    }

    else if (sonbasilan_a == false && pushedButton == "d"){
        if(true){
            
            xkonum += xhiz;
            
            yilan.style.left = `${xkonum}px`;
            
            
            yilan.style.transform = `rotate(${90}deg)`;
            
            sonbasilan_w = false;
            sonbasilan_s = false;
            sonbasilan_d = true;
            sonbasilan_a = false;
            
        }
    }
    else if (sonbasilan_s == false && pushedButton == "w"){
        if(true){
            
            ykonum += yhiz;
            kuyrukykonum += yhiz;
            yilan.style.bottom = `${ykonum}px`; 
            
            
            yilan.style.transform = `rotate(${0}deg)`;
            
            sonbasilan_w = true;
            sonbasilan_s = false;
            sonbasilan_d = false;
            sonbasilan_a = false;
            
        }
    }
    
    else if (sonbasilan_w == false && pushedButton == "s"){
        if(true){
            
            ykonum -= yhiz;
            
            yilan.style.bottom = `${ykonum}px`; 
            
            yilan.style.transform = `rotate(${180}deg)`;
            
            sonbasilan_w = false;
            sonbasilan_s = true;
            sonbasilan_d = false;
            sonbasilan_a = false;
        }
    }
    
    kuyruk.style.left = `${footPrintX[hareketSirasi - 5]}px`;
    kuyruk.style.bottom = `${footPrintY[hareketSirasi - 5]}px`;
    footPrintX.push(xkonum);
    footPrintY.push(ykonum);
    console.log(footPrintX[hareketSirasi]);
    hareketSirasi ++;
    
    
    
   
    console.log("yilankonum="+xkonum+" "+ykonum);
    console.log("kuyrukkonum="+kuyrukxkonum+" "+kuyrukykonum);
    
    setTimeout(hareket,50);
    document.getElementById("durakla").textContent = ""
    if(ykonum == 675){
        ykonum=0;
        }
    else if(ykonum == 0){
        ykonum=675;
        }
    if(xkonum == 675){
        xkonum=0;
        }
    else if(xkonum == 0){
        xkonum=675;
        }
       
    
        
}



