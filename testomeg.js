function Szamol(){
    var mag = document.getElementById("magassag").value;
    var súly = document.getElementById("suly").value;
    mag = Number(mag);
    súly = Number(súly);

    var m = mag/100
    var testtömegindex = súly/(m*m);
    testömegindex = Math.round(testtömegindex,2);
    var s = Math.round(testtömegindex*100)/100;
    document.getElementById("kiir").innerText=s;
} 