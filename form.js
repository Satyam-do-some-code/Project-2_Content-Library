
        let Fname,Lname,Email;
        function run(){

        let username = document.getElementById("name").value;
        let lastname = document.getElementById("lastname").value;
        let email = document.getElementById("email").value;
        
        localStorage.setItem('userName',username);
        localStorage.setItem('lastName',lastname);
        localStorage.setItem('userEmail',email);
        
        Fname =  localStorage.getItem('userName');
        Lname =  localStorage.getItem('lastName');
        Email =  localStorage.getItem('userEmail');

        alert(`Registration Done ✅`);
        
    }
    Fname =  localStorage.getItem('userName');
    Lname =  localStorage.getItem('lastName');
    Email =  localStorage.getItem('userEmail');



     function verify(){


        const nameCheck = document.getElementById("name_check").value;

        const lastNameCheck = document.getElementById("last_check").value;

        if((Fname === nameCheck || Email === nameCheck)&& Lname === lastNameCheck){
            document.location = "main.html";
            alert(`Welcome 🤝${Fname}`);

        }else{
            document.location = "index.html";
           alert(`Wrong ❌ Username or Password  `);
        }
     }

     function out(){
        localStorage.clear();

        Fname = null;
        Lname = null;
     }


   //   User Account Details

     document.getElementById("User_name").innerHTML = Fname;
     document.getElementById("User_email").innerHTML = Email;
     document.getElementById("User_password").innerHTML = Lname;





     


     
    