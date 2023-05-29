let input = document.getElementById("vow-inp")
let btn = document.getElementById('btn')
var _set = new Set()
    _set.add('a')
    _set.add('e')
    _set.add('i')
    _set.add('o')
    _set.add('u')

btn.addEventListener('click', function(){
    let v = input.value.toLowerCase();
    let count = 0;
    for(var i = 0; i < v.length; i++){
        if(_set.has(v.charAt(i))){
            count += 1;
        }
    }
    alert("Your string has " + count + " vowels")
});