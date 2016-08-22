  function pobierz(przycisk){
  if (przycisk=='C'){
  document.getElementById('ekran').value = '';
     }
  else{
          document.getElementById('ekran').value += przycisk;
     }

switch(przycisk){
       case '+': operator='+';
         break;
       case '-': operator='-';
           break;        
       case '*': operator='*';
          break;
       case '/': operator='/';  
          break;
     }
}

function licz() {
  var napis=document.getElementById('ekran').value;
  var liczby=napis.split(operator);
  console.log(liczby);
  var a=parseFloat(liczby[0]);
  var b=parseFloat(liczby[1]);
  switch(operator){
    case '+':  wynik=a+b;
               break;
    case '-':  wynik=a-b;
               break;
    case '*':  wynik=a*b;
               break;
    case '/':  if(b!==0){wynik=a/b;}
                else {wynik='error';}
  } document.getElementById('ekran').value=wynik;
}