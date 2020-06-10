function Result1() {
    let num1 = +document.querySelector("#n1").value;
    let num2 = +document.querySelector("#n2").value;
    let result;

    if ( num1 > num2){
       result=num1;
    } else if (num1 == num2){
       result="Числа равны";
    } else{
       result=num2;
    }
    document.getElementById('out1').innerHTML = result;
}

function Result2() {
    let num1 = +document.querySelector("#n21").value;
    let num2 = +document.querySelector("#n22").value;
    let num3 = +document.querySelector("#n23").value;
    let result;

    if (num1 >= num2 && num1>=num3){
       result=num1;
    } else if (num1 == num2 && num1 == num3){
        result="Числа равны";
    } else if (num2 >= num1 && num2 >= num3){ 
        result=num2;
    } else {
        result=num3;
    }
    document.getElementById('out2').innerHTML = result;
}

function Result3() {
    let num1 = +document.querySelector("#n31").value;
    let num2 = +document.querySelector("#n32").value;
    let result;

    if (num1 > 0 && num2 >0){
       result="Первая четверть";
    } else if (num1 < 0 && num2 >0){
        result="Вторая четверть";
    } else if (num1 < 0 && num2 < 0){
        result="Третья четверть";
    } else if (num1 > 0 && num2 <0){
        result="Четвертая четверть";
    } else if (num1 == 0 && num2 ==0){
        result="Точка находится в начале координат"
    } else if (num1 == 0 && num2 > 0){
        result="Точка находится на оси У между 1й и 2й кординатной плоскостью"
    } else if (num1 == 0 && num2 < 0){
        result="Точка находится на оси У между 3й и 4й кординатной плоскостью"
    } else if (num1 > 0 && num2 == 0){
        result="Точка находится на оси X между 1й и 4й кординатной плоскостью"
    } else if (num1 < 0 && num2 == 0){
        result="Точка находится на оси X между 2й и 3й кординатной плоскостью"
    } 

    document.getElementById('out3').innerHTML = result;
}

    function Result4() {
    let num1 = +document.querySelector("#n41").value;
    let num2 = +document.querySelector("#n42").value;
    let result;

    if (Number.isInteger(num1) && Number.isInteger (num2)){
       if (num1 > num2){
        result=num1;
       } else if (num1 < num2){
       result=num2;
       } else{
        result="0";
       }
    } else{
        result="Не целые";
    }   
    document.getElementById('out41').innerHTML = result;
    document.getElementById('out42').innerHTML = result;
}

function Result5() {
    let num1 = +document.querySelector("#n51").value;
    let result

    if (Number.isInteger(num1)){
       if (num1%2==0 ){
           if (num1>=10 && num1<100){
            result="Число четное и двузначное";
           } else{
             result="Число четное и недвузначное"
           }
        } else if (num1>=10 && num1<100){
           result="Число нечетное и двузначное";
          } else{
          result="Число нечетное и недвузначное";
          }
    } else{
        result="Не целое число";
      }   
    document.getElementById('out5').innerHTML = result;
}

function Result6() {
    let num1 = +document.querySelector("#n61").value;
    let result;

    if (num1 >0){
       if (num1%5==0){
           result="Число положительно и кратно 5";
       } else {
       result="Число положительно, но не кратно 5";
       } 
    } else {
        result="Число отрицательно или равно 0"
    }
    document.getElementById('out6').innerHTML = result;
}

function Result7() {
    let num1 = +document.querySelector("#n71").value;
    let result;
    
    if (num1%2==0 && num1%3==0 ){
           result="Число кратно 2 и 3"
          } else 
              if (num1%2==0 && num1%5!=0) {
              result="Число кратно 2 и не кратно 5";
            } else 
                if (num1>0 && num1<3){
                    result="Число пренадлежи интервалу (0;3)"
                }  else if (num1>=-2 && num1<=0){
                    result="Число принадлежит интервалу [-2;0]"
                } else {
                    result="Число не отвечает условиям";   
                }    
    document.getElementById('out7').innerHTML = result;
}

function Result8() {
    let num1 = +document.querySelector("#n81").value;
    let result;

    if (Number.isInteger(num1)){
    if (num1>0){ 
    if (num1>=100 && num1<1000){
        if (num1%10==(num1-num1%100)/100){
            result="Число является полиндромом";
        } else {
        result="Число не является полиндромом";
        } 
     } else {
         result="Число не трехзначное"
    }
    } else {
        result="Число отрицательное или равно 0"
    } 
    }else{
        result="Введите целое число";
      }   
    document.getElementById('out8').innerHTML = result;
}

function Result9() {
    let num1 = +document.querySelector("#n91").value;
    let num2 = +document.querySelector("#n92").value;
    let result;

    if (Number.isInteger(num1) && Number.isInteger(num2)){
       if (num1>=0 && num1<=23 && num2>=0 && num2<=60){
             if (num1>=6 && num1<=11){
                 result="Доброе утро!"
            } else if (num1>11 && num1<=16){
                result="Добрый день!"
               } else if (num1>16 && num1<=21) {
                   result="Добрый вечер!"
               } else{
                   result="Доброй ночи!";
               }   
        } else {
            result="Некорректное число!"
        } 
        }else {
            result="Число не целое"
        } 
    document.getElementById('out9').innerHTML = result;
}

function Result10() {
    let num1 = +document.querySelector("#n101").value;
    let result;

    if (Number.isInteger(num1)){
       if (num1%10==0 ){
            result="Число оканчивается на 0, поэтому оно делится на 5 нацело";
           } else if (num1%10==5 || num1%10==-5){
             result="Число оканчивается на 5, поэтому оно делится на 5 нацело";
           } else {
               result="Число не делится на 5 нацело";
           }

    } else {
        result="Не целое число";
      }   
    document.getElementById('out101').innerHTML = result;
}


function Result12() {
    let num1 = +document.querySelector("#n121").value;
    let num2 = +document.querySelector("#n122").value;
    let result;

    if (num1>0){
       if (num1>=num2){
                result=num1
            } else {
                result=num2
            } 
        } else if (num1<num2){
            result=num1
        } else {
            result=num2
        }  
    document.getElementById('out12').innerHTML = result;
}

function Result13() {
    let num1 = +document.querySelector("#n131").value;
    let num2 = +document.querySelector("#n132").value;
    let result1;
    let result2;

    if (num1>num2){
            result1=num1*num2;
            result2=(num1+num2)/2;
        } else if (num2>num1) {
                result1=(num1+num2)/2;
                result2=num1*num2; 
        } else {
            result1=num1;
            result2=num2;
        }  
    document.getElementById('out131').innerHTML = result1;
    document.getElementById('out132').innerHTML = result2;
}

function Result14() {
    let num1 = +document.querySelector("#n141").value;
    let num2 = +document.querySelector("#n142").value;
    let result;

    if (Number.isInteger(num1)){
    if (num1%2==0){
       if (num1>=num2){
                result=num1
            } else {
                result=num2
            } 
        }  else {
            result=(num1 + num2)/2
        }  
    } else {
        result="Не целое число";
      }   
    document.getElementById('out14').innerHTML = result;
}

function Result15() {
    let num1 = +document.querySelector("#n151").value;
    let num2 = +document.querySelector("#n152").value;
    let result1;
    let result2;

    if (Number.isInteger(num1)){
    if (num1>num2){
            result1=num1%10;
            result2=result1%3;
        } else {
            result1=num2%10;
            result2=result1%3;
        }
    } else {
        result1="Одно или оба числа не целые";
        result2="";
    }     
    document.getElementById('out151').innerHTML = result1;
    document.getElementById('out152').innerHTML = result2;
}
