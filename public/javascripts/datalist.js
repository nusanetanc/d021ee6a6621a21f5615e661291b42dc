function selectCity() {
    $("#formdistrics").show();
    $("#formvillages").hide();
    $("#formstreets").hide();
    $("#formstreetnos").hide();
    $("#customer-data-tab").hide();
  //  var city = document.getElementById("city").value;

var selectedArr = (document.getElementById("city").value);
var districs = document.getElementById('districs');

var arrJakut = ["","[Not Coverage]","Koja Utara","Koja Selatan","Kelapa Gading Barat"];
var arrJaktim = ["","[Not Coverage]","Jati","Rawamangun","Rawa Bunga"];
var arrJakpus = ["","[Not Coverage]","Bendungan Hilir","Gelora"];
var arrJakbar = ["","[Not Coverage]","Kalideres","Tomang", "Grogol"];
var arrJaksel = ["","[Not Coverage]","Mampang Prapatan","Kebayoran Baru", "Pasar Minggu"];

document.getElementById('districs').innerHTML = "";
if (selectedArr == "Jakarta Utara"){
   arrJakut.forEach(Jakutfunc);
   } 
else if (selectedArr == "Jakarta Timur"){
    arrJaktim.forEach(Jaktimfunc);
}
else if (selectedArr == "Jakarta Pusat"){
    arrJakpus.forEach(Jakpusfunc);
   } 
else if (selectedArr == "Jakarta Barat"){
    arrJakbar.forEach(Jakbarfunc);
   } 
else if (selectedArr == "Jakarta Selatan"){
    arrJaksel.forEach(Jakselfunc);
   } 
else {
    $("#notcoverage").show();
}

function Jakutfunc(array_element){
    var seloptions = document.createElement('option');
    seloptions.innerHTML = array_element;
    seloptions.value = array_element;
    districs.appendChild(seloptions);  
}

function Jaktimfunc(array_element){
    var seloptions = document.createElement('option');
    seloptions.innerHTML = array_element;
    seloptions.value = array_element;
    districs.appendChild(seloptions);  
}

function Jakpusfunc(array_element){
    var seloptions = document.createElement('option');
    seloptions.innerHTML = array_element;
    seloptions.value = array_element;
    districs.appendChild(seloptions);  
}

function Jakbarfunc(array_element){
    var seloptions = document.createElement('option');
    seloptions.innerHTML = array_element;
    seloptions.value = array_element;
    districs.appendChild(seloptions);  
}

function Jakselfunc(array_element){
    var seloptions = document.createElement('option');
    seloptions.innerHTML = array_element;
    seloptions.value = array_element;
    districs.appendChild(seloptions);  
}

}

function selectSubdistric() {
    $("#customer-data-tab").hide();
    var selectedArr = (document.getElementById("districs").value);
    var villages = document.getElementById('villages');

    //var arrVillage= [{"villages" : "Koja"},{"villages" : "Lagoa"},{"villages" : "Badak"}];
    //var arrVillage= JSON.parse('https://nsnt2018-purwanto1337.c9users.io/location/subdistric/Koja%20Utara');
    if( selectedArr == '[Not Coverage]'){
        $("#notcoverage").show();
        $("#formdistrics").show();
        $("#formvillages").hide();
        $("#formstreets").hide();
        $("#formstreetnos").hide();
    }else {
        $.getJSON("https://nsnt2018-purwanto1337.c9users.io/location/subdistric/"+selectedArr, function(json){
            var arrVillage = json;
            arrVillage.forEach(Villagefunc);
        });

        function Villagefunc(array_element){
            var seloptions = document.createElement('option');
            seloptions.innerHTML = array_element.villages;
            seloptions.value = array_element.villages;
            villages.appendChild(seloptions);  
        }
        $("#notcoverage").hide();
        $("#formdistrics").show();
        $("#formvillages").show();
        $("#formstreets").hide();
        $("#formstreetnos").hide();
    }
}

function selectVillage() {
    $("#customer-data-tab").hide();
    var selectedArr = (document.getElementById("villages").value);
    var streets = document.getElementById('streets');
    if( selectedArr == '[Not Coverage]'){
        $("#notcoverage").show();
        $("#formdistrics").show();
        $("#formvillages").show();
        $("#formstreets").hide();
        $("#formstreetnos").hide();
    }else {
        $.getJSON("https://nsnt2018-purwanto1337.c9users.io/location/villages/"+selectedArr, function(json){
            var arrStreet = json;
            arrStreet.forEach(Streetfunc);
        });
        $("#notcoverage").hide();
        $("#formdistrics").show();
        $("#formvillages").show();
        $("#formstreets").show();
        $("#formstreetnos").hide();

        function Streetfunc(array_element){
            var seloptions = document.createElement('option');
            seloptions.innerHTML = array_element.streets;
            seloptions.value = array_element.streets;
            streets.appendChild(seloptions);  
        }
    }
}

function selectStreet() {
    $("#customer-data-tab").hide();
    var selectedArr = (document.getElementById("streets").value);
    var streetnos = document.getElementById('streetnos');
    if( selectedArr == '[Not Coverage]'){
        $("#notcoverage").show();
         $("#formdistrics").show();
        $("#formvillages").show();
        $("#formstreets").show();
        $("#formstreetnos").hide();
    }else {
        $.getJSON("https://nsnt2018-purwanto1337.c9users.io/location/streets/"+selectedArr, function(json){
            var arrStreetNo = json;
            arrStreetNo.forEach(StreetNofunc);
        });
        $("#notcoverage").hide();
        $("#formdistrics").show();
        $("#formvillages").show();
        $("#formstreets").show();
        $("#formstreetnos").show();
        function StreetNofunc(array_element){
            var seloptions = document.createElement('option');
            seloptions.innerHTML = array_element.nostreets;
            seloptions.value = array_element.nostreets;
            streetnos.appendChild(seloptions);  
        }
    }
}

function selectStreetNo() {
    var selectedArr = (document.getElementById("streetnos").value);
    if( selectedArr == '[Not Coverage]'){
        $("#notcoverage").show();
    }else {
        $("#notcoverage").hide();
        $("#customer-data-tab").show();
    }
}