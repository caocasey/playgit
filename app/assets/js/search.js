$(document).ready(function(){
    $('#button').click(function(){
        rname = document.getElementById("reponame").value;

        $.ajax({
            type:"GET",
            url:"https://api.github.com/search/repositories?q="+rname,
            dataType:"json",
            success:function(data){
                var name="<ul>";

                //  $.each(data,function(index,n){

                name += "<li>" + data.items[0].name + "</li>";
                for(var j =1;j < data.items.length-1;j++) {
                    name += "<li>" + data.items[j].name + "</li>";
                }
                //  });
                name+="</ul>";
                $('#result').append(name);
            }
        });
        return false;
    });


});