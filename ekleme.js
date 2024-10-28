

function ekleme(){
   
    if(pushedButton == "e"){
    let oyunalani = document.getElementById("oyunalani");
    let yeniKuyruk = document.createElement("div");
    yeniKuyruk.className = "kuyruk"
    oyunalani.appendChild(yeniKuyruk);
    let kuyruk = document.getElementsByClassName("kuyruk");



    }
    
   
   

}

function takipet(){
    let kuyrukxkonum = xkonum - 25;
    let kuyrukykonum = ykonum - 25;

    kuyruk.style.left = `${kuyrukxkonum}px`
    kuyruk.style.top = `${kuyrukykonum}px` 
    
    
   
}