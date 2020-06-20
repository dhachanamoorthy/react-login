$("#register").on("submit", function() {
    var f_name=$("#first_name").val();
    var l_name=$("#last_name").val();
    var e_mail=$("#email").val();
    var pass=$("#pass").val();
    var c_pass=$("#c_pass").val();
    alert(f_name+" "+l_name);
 });