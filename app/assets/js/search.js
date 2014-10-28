//get search result
$(document).ready(function(){

    $('#button').click(function(){

        rname = document.getElementById("reponame").value;

            $.ajax({
                type: "GET",
                url: "https://api.github.com/search/repositories?q=" + rname,
                dataType: "json",
                success: function (data) {
                    var name = "<ul id='list' action='/analytics.scale.html'>";

                        //  $.each(data,function(index,n){
                        if (data.total_count !== 0) {

                            for (var j = 0; j < data.items.length; j++) {
                                name += "<li id="+ data.items[j].full_name +"><a id=myLink href='/analytics' >" + data.items[j].name + "</a></li>";
                            }
                        }
                        else {
                            name = "Sorry, there is no result corresponding to your search";
                        }

                    name += "</ul>";

                    $('#result').append(name);
                }
            });

        return false;
    });


});