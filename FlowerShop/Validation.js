function CheckCardNumber()
        {
   

            if (/^\d{16}$/.test(Cardnumber))
            {
             
              console.log(/^\d{16}$/.test(Cardnumber))
              return (true)
            }
        
            card.innerHTML = "please enter card number";
              //alert("You have entered an invalid email address!")
              //document.getElementById('EmailAddress').style.borderColor="red";
              return false
            
    
        }

        function CheckData()
        {

             if(document.getElementById('Please Select').value == "")
             {
                // alert('please enter date');
                 //document.getElementById('Please Select').style.borderColor="red";
                 time.innerHTML = "please enter expire date";
                 return false;
             }
             else
             {
                time.innerHTML = "";
             }
       }
             //if(document.getElementById('Please Selects').value == "")
             //{
                 //alert('please enter year');
                 //document.getElementById('Please Selects').style.borderColor="red";
                /* card.innerHTML = "please enter cardNumber";
                 return false;
             }*/
             
             function CheckSecurityCode()
             {
             if(document.getElementById('Security').value == "")
             {
                 //alert('please enter your security code ');
                 //document.getElementById('Security').style.borderColor="red";
                 security.innerHTML = "please enter security code";

                 return false;
             }
             else{
                security.innerHTML = "";
             }
            }
            function CheckName()
            {
             if(document.getElementById('CardHolder').value == "")
             {
                // alert('please enter your cardholder name ');
                 //document.getElementById('CardHolder').style.borderColor="red";
                 holderName.innerHTML = "please enter cardholderName";
                 return false;
             }
             else{
                holderName.innerHTML = "";
             }
             
            }
            function CheckAddress()
            {
             if(document.getElementById('Address').value == "")
             {
                 //alert('please enter your Address1 ');
                 //document.getElementById('Address').style.borderColor="red";
                 location1.innerHTML = "please enter Address1";
                 return false;
             }
             else{
                location1.innerHTML = "";
             }
             
            }
function CheckLocation()
{
             if(document.getElementById('Address2').value == "")
             {
                 //alert('please enter your Address2 ');
                 //document.getElementById('Address2').style.borderColor="red";
                 location2.innerHTML = "please enter Address2";
                 return false;
             }
             else{
                location2.innerHTML = "";
             }
            }
            function CheckPlace()
            {
             if(document.getElementById('Address3').value == "")
             {
                 //alert('please enter your Address3 ');
                 //document.getElementById('Address3').style.borderColor="red";
                 location3.innerHTML = "please enter Address3";
                 return false;
             }
             else{
                location3.innerHTML = "";
             }
             
            }
            function CheckTown()
            {
             if(document.getElementById('Town').value == "")
             {
                // alert('please enter your Town/City ');
                 //document.getElementById('Town').style.borderColor="red";
                 townId.innerHTML = "please enter Town/City";
                 return false;
             }
             else{
                townId.innerHTML = "";
             }
             
            }
            function CheckRegion()
            {
             if(document.getElementById('Region').value == "")
             {
                 //alert('please enter your Region ');
                 //document.getElementById('Region').style.borderColor="red";
                 region.innerHTML = "please enter region";
                 return false;
             
                }
                else{
                    region.innerHTML = "";
                 }
                 
            }
            function CheckTelephone()
            {
             if(document.getElementById('Telephones').value == "")
             {
                 //alert('please enter your number');
                 //document.getElementById('Telephones').style.borderColor="red";
                 telephone.innerHTML = "please enter Telephone number";
                 return false;
             }
             else{
                telephone.innerHTML = "";
             }
             
            }
            function CheckZipCode()
            {
             if(document.getElementById('PostalCode').value == "")
             {
                 //alert('please enter your postalcode ');
                 //document.getElementById('PostalCode').style.borderColor="red";
                 postCode.innerHTML = "please enter PostalCode";
                 return false;
             }
             else{
                postCode.innerHTML = "";
             }
             
            }
         function CheckCountry()
         {
             if(document.getElementById('country select').value == "")
             {
                 //alert('please choose your country ');
                // document.getElementById('country select').style.borderColor="red";
                country.innerHTML = "please enter country";
                 return false;
             }
             else{
                country.innerHTML = "";
             }
             
            }
            function CheckFax()
            {
             if(document.getElementById('Fax').value == "")
             {
                 //alert('please enter your Fax ');
                 //document.getElementById('Fax').style.borderColor="red";
                 fax.innerHTML = "please enter Fax";
                 return false;
             }
             else{
                fax.innerHTML = "";
             }
             
            }
            function CheckEmailId()
            {
             if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(Form.EmailAddress.value))
  {
    return (true)
  }
  emailId.innerHTML = "please enter EmailId";
    //alert("You have entered an invalid email address!")
    //document.getElementById('EmailAddress').style.borderColor="red";
    return (false)
}

        



