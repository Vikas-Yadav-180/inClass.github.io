document.getElementById("usd").onfocus = function() {
    document.getElementById("msg").innerHTML = "";
}
document.getElementById("pwd").onfocus = function() {
    document.getElementById("message").innerHTML = "";
}

function fun() {
    document.getElementById("x").style.display = "none";
    document.getElementById("fm").classList.remove("nsh");
}

function showpassword() {
    var x = document.getElementById("pwd");
    if (x.type === "password")
        x.type = "text";
    else {
        x.type = "password";
    }
}

function check() {
    var u = document.getElementById("usd").value;
    var p = document.getElementById("pwd").value;
    var flag = true;
    if ((u.indexOf("@") <= 0)) {
        swal("Invalid User Name!!!!");
        flag = false;
        return false;
    }
    if (u.charAt(u.length - 4) != '.' && u.charAt(u.length - 3) != '.') {
        //document.getElementById("text").innerHTML = ". at wrong Position..Please Fill Correctly!!";
        swal("Invalid User Name!!!!");
        flag = false;
        return false;
    }
    var up = /[A-Z]/g;
    var lp = /[a-z]/g;
    var np = /[0-9]/g;
    if (up.test(p) == false || lp.test(p) == false || np.test(p) == false || p.length < 8) {
        swal("Invalid Password!!!!");
        flag = false;
        return false;
    }
    if (flag == true) {
        store();
        return true;
    }
}

function store() {
    var su = document.getElementById("usd").value;
    var x = su.indexOf("@");
    var y = su.slice(0, x);
    localStorage.setItem("user", y);
}