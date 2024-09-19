
document.getElementById("login_btn").addEventListener("click",function(event){
    event.preventDefault();
    const pin = parseInt(document.getElementById("pin").value);
    const number = parseInt(document.getElementById("number").value);
    
    if(pin === 1234 && number === 5){
        window.location.href = "./home.html";
    }else{
        alert("Invalid PIN or Number");
    }
})