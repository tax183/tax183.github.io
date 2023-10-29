function validateForm(){

    var r=true;
    var x=document.getElementById("fname").value;
    var y=document.getElementById("uname").value;
    var z=document.getElementById("pass").value;
    var q=document.getElementById("Cp").value;
    var regEx=/^[A-Za-z]+$/;
    var regEx2=  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/;
    // user name constrain
    if(!(x.match(regEx)))
       {document.getElementById('m1').innerHTML="* only letter is allowed";
        document.getElementById('fname').style.borderColor="red";
        r= false;}
        else 
        {document.getElementById('m1').innerHTML=" ";
        document.getElementById('fname').style.borderColor="black"; }
    
        if((y == " ")|| (y == ""))
        { document.getElementById('m2').innerHTML="* username must be filled out";
        document.getElementById('uname').style.borderColor="red";
        r=false;}
        else{document.getElementById('m2').innerHTML=" ";
        document.getElementById('uname').style.borderColor="black"; }
        //password constrain
        if(z=="")
        { document.getElementById('m3').innerHTML="* password must be filled out";
        document.getElementById('pass').style.borderColor="red"; 
        r=false;}
        else if (y==z)
        {
            { document.getElementById('m3').innerHTML="* your password must be not the same of your username";
            document.getElementById('pass').style.borderColor="red";
            r=false;}
        }
        else if (!((z.length>=6) && (z.length<=10)))
        {
            { document.getElementById('m3').innerHTML="* password should be 6-10 length";
            document.getElementById('pass').style.borderColor="red";
            r=false;}
        }
        else if (!(z.match(regEx2)))
        {
            { document.getElementById('m3').innerHTML="* your password should At least one small letter and one capital letter and one digit";
            document.getElementById('pass').style.borderColor="red";
            r=false;}
        }
        else
            { document.getElementById('m3').innerHTML=" ";
            document.getElementById('pass').style.borderColor="black";
            }
        if(q!=z)
        {
            document.getElementById('m4').innerHTML="* your password does not match";
            document.getElementById('Cp').style.borderColor="red";
            r=false;
        }
        else {
            document.getElementById('m4').innerHTML=" ";
            document.getElementById('Cp').style.borderColor="black";
        }
    return r;
    
    }