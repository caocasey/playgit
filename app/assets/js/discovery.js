/**
 * Created by casey on 14-11-2.
 */
$(document).ready(function(){

    $('#button1').click(function(){

        username = document.getElementById("username").value;

        $.ajax({
            type: "GET",
            url: "https://api.github.com/users/"+username+"/repos",
            dataType: "json",
            success: function (data) {
                var rename = "<ul>";



                    for (var j = 0; j < data.length; j++) {
                        rename += "<li><a href='"+data[j].html_url+"'>"+ data[j].name +"</a>&nbsp&nbspcreated at:&nbsp" +data[j].created_at+"</li>";


                    }

                rename += "</ul>";
                var haha=" ";
                if (data.length<=3) {
                    haha = "Perhaps this guy is a newbie（＃￣▽￣＃）";
                }
                else if(data.length>3 && data.length<=10){
                    haha = "I think this guy is a learner <(￣︶￣)> ";
                }
                else if(data.length>10 && data.length<=50){
                    haha = "This guy is a veteran ○（＊￣︶￣＊）○ ";
                }
                else if(data.length>50){
                    haha ="I believe that this guy is a Github elite ｂ（￣▽￣）ｄ　　";
                }

                haha +="<p> List all his projects:</p>";
                rename +="<hr>";
                $('#result4').append(haha);
                $('#result5').append(rename);
            }
        });

        return false;


    });


});