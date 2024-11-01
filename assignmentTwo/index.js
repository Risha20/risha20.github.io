function reverseString(){
    var word = document.getElementById("reverse").value;
    newWord = "";
    for(var i=word.length-1; i>=0; i--){
        newWord = newWord + word[i];
    }
    return document.getElementById("reversed").textContent = "Your reversed word is: " + newWord;
}

function isPalindrome() {
    var numSeries = document.getElementById("palindrome").value;
    var first = 0; 
    var last = numSeries.length - 1;
    console.log("right value: "  + first)

    if (numSeries[0] === '-') {
        document.getElementById("palindromeResult").textContent = "No, it's not a palindrome";
        return;
    }
    
    while (first <= last) {
        console.log("into the loop");
        if (numSeries[first] !== numSeries[last]) {
            document.getElementById("palindromeResult").textContent = "No, it's not a palindrome"; 
            return;
        }
        first++; 
        last--;
    }
    return document.getElementById("palindromeResult").textContent = "Yes, it's a palindrome";
}

function totalBill() {
    var total = Number(document.getElementById("total").value);
    var tip = Number(document.getElementById("tip").value);
    var calcTip = tip/100;
    var newTotal = total + (total * calcTip);
    return document.getElementById("bill").textContent  = "Total amount you have to pay: $" + newTotal;
}

