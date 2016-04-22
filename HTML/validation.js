$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    }); 
    return o;
};


$(document).ready(function(){
   $("#submit").on('click',function(){
        $("#validation").html("");
        var name = $("#name").val();
        var email = $("#email").val();
        var website = $("#website").val();
        var messsage = $("#message").val();
       
        if(validateName(name) == true){
            $("#name").css("border-color","green");
            console.log("OK!");
        }
        else {
             $("#name").css("border-color","red");
             $("#validation").append("*Invalid name");
        }
       
        if(validateEmail(email) == true){
            $("#email").css("border-color","green");
            console.log("OK!");
        }
        else{
            $("#email").css("border-color","red");
            $("#validation").append("<br />*Invalid email");
        }
        if(validateWebsite(website) == true){
            $("#website").css("border-color","green");
            console.log("OK!");
        }
        else{
            $("#website").css("border-color","red");
             $("#validation").append("<br />*Invalid website");
        }
       
       if(validateMessage(messsage) == true){
            $("#message").css("border-color","green");
            console.log("OK!");
        }
        else{
            $("#message").css("border-color","red");
             $("#validation").append("<br />*Message cannot be empty");
        }
       
       

       function validateName(formname){
           var pattern = /^[A-Za-z\s]+$/;
           return pattern.test(formname);
       }
       
        function validateEmail(mail){
           var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
           return pattern.test(mail);
       }
       
        function validateWebsite(website){
           var pattern = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
           return pattern.test(website);
       }
       
        function validateMessage(message){
           var pattern = /.+/;
           return pattern.test(message);
       }
   });
    
  
});