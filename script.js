let e1= document.getElementById("sel1");
let e2= document.getElementById("sel2");
let e3= document.getElementById("Btech");
let e4= document.getElementById("Mtech");
let e5= document.getElementById("Bpharm");

function cou(answer){
    //console.log(answer.value);
    switch(answer.value){
        case "Btech": document.getElementById('Btech').classList.remove('s3');
                    document.getElementById('Mtech').classList.add('s4');
                    document.getElementById('Bpharm').classList.add('s5');
                    return answer.value;
                    break; 
        case "Mtech": document.getElementById('Mtech').classList.remove('s4');
                    document.getElementById('Btech').classList.add('s3');
                    document.getElementById('Bpharm').classList.add('s5');
                    break;
        case "Bpharm":document.getElementById('Bpharm').classList.remove('s5');
                    document.getElementById('Btech').classList.add('s3');
                    document.getElementById('Mtech').classList.add('s4');
                    break;

    }
}
function result(nam,x,y){
    n = document.getElementById("coursename");
    n.innerHTML = nam;
    u=(y/x)*100; 
    z=Math.round(u);
    res1 = document.getElementById("stu1");
    res1.innerHTML = x;
    res2 = document.getElementById("stu2");
    res2.innerHTML = y;
    res3 = document.getElementById("pie1");
    res3.innerHTML = z+"%";
    ele =document.querySelector(".pie");
    ele.style.setProperty('--p',z);
}
function ValCh(){
    a=e1.value;
    b=e2.value;
    c=e3.value;
    d=e4.value;
    e=e5.value;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    //city btech cse
    if(e1.value=="Hyderabad" && b=="Btech" && c=="CSE"){
        result((b+" "+c),100,50);
    }
    else if(e1.value=="Delhi" && b=="Btech" && c=="CSE"){
        result((b+" "+c),200,50);
    }
    else if(e1.value=="Mumbai" && b=="Btech" && c=="CSE"){
        result((b+" "+c),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Btech" && c=="CSE"){
        result((b+" "+c),400,50);
    }
    else if(e1.value=="Chennai" && b=="Btech" && c=="CSE"){
        result((b+" "+c),500,50);
    }
// city btech ece
    else if(e1.value=="Hyderabad" && b=="Btech" && c=="ECE"){
        result((b+" "+c),100,50);
    }
    else if(e1.value=="Delhi" && b=="Btech" && c=="ECE"){
        result((b+" "+c),200,50); 
    }
    else if(e1.value=="Mumbai" && b=="Btech" && c=="ECE"){
        result((b+" "+c),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Btech" && c=="ECE"){
        result((b+" "+c),400,50);
    }
    else if(e1.value=="Chennai" && b=="Btech" && c=="ECE"){
        result((b+" "+c),500,50);
    }
    //city btech civil
    else if(e1.value=="Hyderabad" && b=="Btech" && c=="CIVIL"){
        result((b+" "+c),100,50);
    }
    else if(e1.value=="Delhi" && b=="Btech" && c=="CIVIL"){
        result((b+" "+c),200,50); 
    }
    else if(e1.value=="Mumbai" && b=="Btech" && c=="CIVIL"){
        result((b+" "+c),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Btech" && c=="CIVIL"){
        result((b+" "+c),400,50);
    }
    else if(e1.value=="Chennai" && b=="Btech" && c=="CIVIL"){
        result((b+" "+c),500,50);
    } 
    //city btech mech
    else if(e1.value=="Hyderabad" && b=="Btech" && c=="MECH"){
        result((b+" "+c),100,50);
    }
    else if(e1.value=="Delhi" && b=="Btech" && c=="MECH"){
       result((b+" "+c),200,50);
    }
    else if(e1.value=="Mumbai" && b=="Btech" && c=="MECH"){
        result((b+" "+c),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Btech" && c=="MECH"){
        result((b+" "+c),400,50);
    }
    else if(e1.value=="Chennai" && b=="Btech" && c=="MECH"){
        result((b+" "+c),500,50);
    }
    //city mtech ai&ml
    else if(e1.value=="Hyderabad" && b=="Mtech" && d=="AI&ML"){
        result((b+" "+d),100,50);
    }
    else if(e1.value=="Delhi" && b=="Mtech" && d=="AI&ML"){
        result((b+" "+d),200,50);
    }
    else if(e1.value=="Mumbai" && b=="Mtech" && d=="AI&ML"){
        result((b+" "+d),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Mtech" && d=="AI&ML"){
        result((b+" "+d),400,50);
    }
    else if(e1.value=="Chennai" && b=="Mtech" && d=="AI&ML"){
       result((b+" "+d),500,50);
    }
    //city mtech cs
    else if(e1.value=="Hyderabad" && b=="Mtech" && d=="CS"){
        result((b+" "+d),100,50);
    }
    else if(e1.value=="Delhi" && b=="Mtech" && d=="CS"){
       result((b+" "+d),200,50);
    }
    else if(e1.value=="Mumbai" && b=="Mtech" && d=="CS"){
        result((b+" "+d),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Mtech" && d=="CS"){
       result((b+" "+d),400,50);
    }
    else if(e1.value=="Chennai" && b=="Mtech" && d=="CS"){
        result((b+" "+d),500,50);
    }
    //city mtech ds
    else if(e1.value=="Hyderabad" && b=="Mtech" && d=="DS"){
        result((b+" "+d),100,50);
    }
    else if(e1.value=="Delhi" && b=="Mtech" && d=="DS"){
       result((b+" "+d),200,50);
    }
    else if(e1.value=="Mumbai" && b=="Mtech" && d=="DS"){
       result((b+" "+d),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Mtech" && d=="DS"){
       result((b+" "+d),400,50);
    }
    else if(e1.value=="Chennai" && b=="Mtech" && d=="DS"){
       result((b+" "+d),500,50);
    }
    //city mtech iot
    else if(e1.value=="Hyderabad" && b=="Mtech" && d=="IOT"){
        result((b+" "+d),100,50);
    }
    else if(e1.value=="Delhi" && b=="Mtech" && d=="IOT"){
       result((b+" "+d),200,50);
    }
    else if(e1.value=="Mumbai" && b=="Mtech" && d=="IOT"){
        result((b+" "+d),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Mtech" && d=="IOT"){
       result((b+" "+d),400,50);
    }
    else if(e1.value=="Chennai" && b=="Mtech" && d=="IOT"){
       result((b+" "+d),500,50);
    }
    //city Bpharm Medical Chemistry
    else if(e1.value=="Hyderabad" && b=="Bpharm" && e=="Medical Chemistry"){
        result((b+" "+e),100,50);
    }
    else if(e1.value=="Delhi" && b=="Bpharm" && e=="Medical Chemistry"){
       result((b+" "+e),200,50);
    }
    else if(e1.value=="Mumbai" && b=="Bpharm" && e=="Medical Chemistry"){
        result((b+" "+e),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Bpharm" && e=="Medical Chemistry"){
       result((b+" "+e),400,50);
    }
    else if(e1.value=="Chennai" && b=="Bpharm" && e=="Medical Chemistry"){
       result((b+" "+e),500,50);
    }
    //city Bphram Pharmaceutical Engineering
    else if(e1.value=="Hyderabad" && b=="Bpharm" && e=="Pharmaceutical Engineering"){
        result((b+" "+e),100,50);
    }
    else if(e1.value=="Delhi" && b=="Bpharm" && e=="Pharmaceutical Engineering"){
       result((b+" "+e),200,50);
    }
    else if(e1.value=="Mumbai" && b=="Bpharm" && e=="Pharmaceutical Engineering"){
        result((b+" "+e),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Bpharm" && e=="Pharmaceutical Engineering"){
       result((b+" "+e),400,50);
    }
    else if(e1.value=="Chennai" && b=="Bpharm" && e=="Pharmaceutical Engineering"){
       result((b+" "+e),500,50);
    }
    //city Bphram Drugs and Medicines
    else if(e1.value=="Hyderabad" && b=="Bpharm" && e=="Drugs and Medicines"){
        result((b+" "+e),100,50);
    }
    else if(e1.value=="Delhi" && b=="Bpharm" && e=="Drugs and Medicines"){
       result((b+" "+e),200,50);
    }
    else if(e1.value=="Mumbai" && b=="Bpharm" && e=="Drugs and Medicines"){
        result((b+" "+e),300,50);
    }
    else if(e1.value=="Bangarole" && b=="Bpharm" && e=="Drugs and Medicines"){
       result((b+" "+e),400,50);
    }
    else if(e1.value=="Chennai" && b=="Bpharm" && e=="Drugs and Medicines"){
       result((b+" "+e),500,50);
    }
}
    




















