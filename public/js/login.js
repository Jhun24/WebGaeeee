$(function(){
  $(".loginBtn").click(function login(){
    var id = $("#id").val()
    var ps = $("#ps").val();

    $.ajax({
      method:"POST",
      url:"http://localhost:5000/login",
      data:{id:id , ps:ps},
      success:function(data){
        console.log(data)
      },
      error:function(){
        console.log("Server Error 500")
      }
    });
  });
});
