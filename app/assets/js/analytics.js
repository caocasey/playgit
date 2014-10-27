//get commit information
$(document).ready(function(){
        //$('#myLink').click(function(){
        //$('#myLink').click(function(event){



         $.ajax({
            type: "GET",
            //url: "https://api.github.com/repos/" + data.items[j].full_name + "/commits",
            url: " https://api.github.com/repos/caocasey/pfe3/commits",
            dataType: "json",
            success: function (data) {
            var committer = "<ul>";

                if(data.length<=100) {

                    for (var i = 0; i < data.length; i++) {
                        committer += "<li>" + data[i].commit.committer.name +"<br>"+ data[i].commit.committer.date + "</li>";

                    }
                }
                else if(data.length>100){
                    for (var j = data.length - 100; j < data.length ; j++) {
                        committer += "<li>" + data[j].commit.committer.name +"<br>"+ data[j].commit.committer.date + "</li>";
                    }

                }


          //  committer += "</ul>";

            $('#committer').append(committer);
            }
         });


        return false;


   //});

});