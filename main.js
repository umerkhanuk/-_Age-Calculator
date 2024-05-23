function marksheet() {
    let dob =  parseInt(document.getElementById("date").value);
    let cdate = parseInt(document.getElementById("cdate").value);

    if(dob < cdate && dob && cdate){
        let age = cdate - dob;
        document.getElementById("result").innerHTML=(`(${age})`);
    }
    else{
        document.getElementById("error").innerHTML=("Enter Empty Fields");
    }
}

