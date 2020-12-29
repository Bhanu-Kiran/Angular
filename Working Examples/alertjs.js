function GreetUser()
{
    let Username =  prompt("Please Enter your name:");
    if(Username!== null)
    {
        let Uage =  prompt("Please Enter your age:");
        if(Uage !== null)
        {
            let Ucity = prompt("please Enter your city:");
            if(Ucity === null)
            {
                alert("Please enter a valid city");
            }
            else
            {
                let gid = document.getElementById('greet');
                gid.innerHTML = "Hi " + Username + ". You are " + 
                                Uage + "years old. You are from "
                                + Ucity; 
            }
        }
        else
        {
            alert("Please enter a valid age");
        }
    }
    else
    {
        alert("Please enter a valid name");
    }
}