/////// Code it yourself :)
$(document).ready(function(){
 
          $("#btnAdd").click(function()
          {
           let inputdata= $("#taskInput").val() ; 
           let par = $("<p></p>") 
           let btn1 =$("<button class ='b' 'b1'></button>") ;
           let btn2 =$("<button class ='b' 'b2'></button>") ;
           let dv = $("<div></div>") ;

            $(par).text(inputdata)
            $(btn1).text("Done") ;
            $(btn2).text("Delete") ;
            $(dv).append(par );
            $(dv).append(btn1 , btn2) ;
            $(".tasksBox").append(dv) ;
           $(btn1).click(function(){
           $(par).css("backgroundColor" , "gray") ;
           })
           $(btn2).click(function(){
            $(dv).hide() ;            
           })


          })
      

}) ;