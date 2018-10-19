//11-firstLast6
function firstLast6(array){
    var lastNumber = array[array.length-1]
    var firstNumber = array[0];
    if(lastNumber == 6 || firstNumber == 6){
        return true;
    }else{
        return false;
    }
}
//12-has23
function has23(array){
    if(array.includes(3) || array.includes(2)){
        return true;
    }else {
        return false;
    }
}
//13-fix 23
function fix23(array){
    var answer = "";
    if(array[0]==2 && array[1]==3){
        answer = answer + array[0] + "0" + array[2];
    }else if(array[1]==2 && array[2]==3){
        answer = answer + array[0] + array[1] + "0";
    }return answer;

}
//14-count yz
function countYZ(string){
    var count = 0;
    string = string.toLowerCase()
    for(var i =0; i<string.length; i++){
       if(string[i] == " ") {
           if (string[i - 1] == "y" || string[i - 1] == "z") {
               console.log(string[i - 1]);
               count++;
           }
       }
    }
    if(string[string.length-1] == "y" || string[string.length-1]=="z"){
        count = count + 1;
    }

    return count;
}
//15-endother
function endOther (x,y) {
    y = y.toLowerCase()
    x = x.toLowerCase()
    if (y.endsWith(x) || x.endsWith(y)) {
        return true;
    } else {
        return false;
    }
}
//16-starout
function starOut(string){
    var answer = "";
    for(var i = 0; i<string.length; i++){
        if(string[i]!="*" && string[i-1] !="*" && string[i+1] != "*"){
         answer = answer + string[i];
        }
    }
    return answer;
}
//17-getSandwich
function getSandwich(string){
    var answer = "";
    if(string.indexOf("bread") != string.lastIndexOf("bread")){
        answer = answer + string.substring(string.indexOf("bread")+5,string.lastIndexOf("bread"))
    }
    return answer;
}
//18-canBalance
function canBalance(array){
    var answer = false;
    for (var i = 0; i < array.length; i++){
        var counter = 0;
        var a = 0;
        var b = 0;
        for (var j = 0; j <= i; j++){
            a += array[j];
            counter += 1;
        }
        for (var k = counter; k < array.length; k++){
            b += array[k];
        }
        if(a == b){
            answer = true;
        }
    }
    return answer;
}
//19countClumps
function countClumps(array){
    var answer=0;
    for (var i=0;i<array.length;i++){
        if (array[i]==array[i-1] && array[i]!=array[i+1]){
            answer=answer+1;
        }if (array[i] ==array[array.length] && array[i]==array[i-1]){
            answer=answer+1;
        }
    }
    return answer;
}
//20-evenlySpaced
function evenlySpaced(a,b,c){
    var answer = false;
    var max = Math.max(a,b,c);
    var min = Math.min(a,b,c);
    var other = (max + min)/2;
    if(other == a || other == b || other == c){
        answer = true;
    }
    return answer;
}
function tester() {
    document.getElementById("output").innerHTML += getSandwich("breaxbreadybread")
}





























































