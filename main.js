$(function(){
    
    //以下、当日演習の内容
        //もとから隠れている
        $('#ex').hide();
            //4秒かけて表す
            
        $('#ex').show(4000);

    
       $('#ex').css("color","#fff");
    $('#ex').css("background-color","#000");
     
    $('#ex').html('<p>かきくけこ</p>');
    $('#ex>p').css("background-color","#fff");
    
    
            
         $('#ex').prepend('<p>あいうえお</p>');   
        $('#ex').append('<p>さしすせそ</p>');  
 

    
    //    $('#ex').after('<p>かきくけこ</p>');
    //上の書き方だと、黒の範囲外（さしすせそ）の下に表示される

});


       

        
        
  
    
