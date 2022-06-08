var numfield1 = document.getElementById('numfield1');
var numfield2 = document.getElementById('numfield2');

var resultfield = document.getElementById('resultfield');

var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event) {
    
    if (!numfield1.value || !numfield2.value)
        {
            alert("Enter Values");
        }
    else {
            alert("Hello");
            var x = parseFloat(numfield1.value);
            var y = parseFloat(numfield2.value);
            var result = x / y;
            var percent = result * 100;
            
            
            
            resultfield.innerText = "Answer: " + percent + "%";
            event.preventDefault();
        }
    
    });

