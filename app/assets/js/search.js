//get search result
$(document).ready(function(){

    $('#button').click(function(){

        rname = document.getElementById("reponame").value;

            $.ajax({
                type: "GET",
                url: "https://api.github.com/search/repositories?q=" + rname,
                dataType: "json",
                success: function (data) {
                    var name = "<ul id='list'>";


                        if (data.total_count !== 0) {

                            for (var j = 0; j < data.items.length; j++) {
                                name += "<li id="+ data.items[j].full_name +"><a id=myLink ><span style='color:#CC6600'>" + data.items[j].name +"</span>&nbsp&nbsp&nbspCreated by:"+ data.items[j].owner.login+"</a></li>";
                            }
                        }
                        else {
                            name = "Sorry, there is no result corresponding to your search";
                        }

                    name += "</ul><hr>";

                    $('#result').append(name);
                }
            });

        return false;


    });


});