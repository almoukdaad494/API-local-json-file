var body=document.querySelector('body');
var form=document.createElement('form');
var input=document.createElement('input');
var butt=document.createElement('input');

butt.setAttribute('type','button');
butt.setAttribute('id','druk');
butt.setAttribute('value','verzend');

input.setAttribute('id','aantal'); 
input.setAttribute('type','text');

form.appendChild(input);
form.appendChild(butt);
body.appendChild(form);

var druk=document.querySelector('#druk');


var toonEl=document.createElement('p'); // toonEl waar de gegevens in komen
body.appendChild(toonEl);
toonEl.innerHTML="";




druk.addEventListener('click',function(ev){
    ev.preventDefault();
    toonEl.innerHTML="";
    var requestURL='studenten.json';
    var request=new XMLHttpRequest();
    request.open('GET',requestURL,true);
    request.responseType='json';
    request.send();
    request.onload=function(){
        let data=request.response;
        addData(data);
    }
    
    var divv2=document.createElement('div');
    divv2.innerHTML="";
    
    body.appendChild(divv2);
    
    function addData(json){
        
        var aantalEl=document.querySelector('#aantal');
        var aantal=Number(aantalEl.value);
        var studenten=json.studenten;
        
        for(var i=0 ; i<aantal ; i++){
            toonEl.innerHTML+="De voornaam is "+studenten[i].voornaam+'<br>';
            toonEl.innerHTML+="De achternaam is "+studenten[i].achternaam+'<br>';
            toonEl.innerHTML+="De email adres is "+studenten[i].emailadres+'<br>';
            toonEl.innerHTML+="De geboortedatum is "+studenten[i].geboortedatum+'<br>';
            toonEl.innerHTML+="De woonplaats is "+studenten[i].woonplaats+'<br><br>';
        }
    }
}
)

