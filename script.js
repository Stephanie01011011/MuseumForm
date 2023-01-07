

function validPw(){
    var actBtn = document.getElementById('actBtn');
    var pw = document.getElementById("password").value;
    var cpw = document.getElementById("confirm").value;

    console.log(2+2);
    if(pw!= cpw){
        alert('Password do not match. Try again.');
        return false;
    }
}