//get commit information
$(document).on('click', '#list li a', function (){
    //$('#myLink').click(function(){
    //$('#myLink').click(function(event){


    value = $(this).parent().attr('id');
    // or you could use the closest('li') function too.
   // $('#test').append(value);
    alert(value);
    $.ajax({
        type: "GET",
        url: "https://api.github.com/repos/" + value + "/commits",
        //url: " https://api.github.com/repos/caocasey/pfe3/commits",
        dataType: "json",
        success: function (data) {
            var committer = "<ul>";
            var myArray = [];
            if(data.length<=100) {

                for (var i = 0; i < data.length; i++) {
                    committer += "<li>" + data[i].commit.committer.name +"<br>"+ data[i].commit.committer.date + "</li>";
                    myArray.push(data[i].commit.committer.name);
                }
            }
            else if(data.length>100){
                for (var j = data.length - 100; j < data.length ; j++) {
                    committer += "<li>" + data[j].commit.committer.name +"<br>"+ data[j].commit.committer.date + "</li>";
                    myArray.push(data[j].commit.committer.name);
                }

            }

            //count commit number
           var map={};

           for(var a=0;a<myArray.length;a++){
                if(map[myArray[a]]!==undefined){
                    map[myArray[a]] +=1;
                }
                else {
                    map[myArray[a]]=1;
                }
            }
            var output = '';
            for (var property in map) {
                output += property + ': ' + map[property]+'; ';
            }




            console.log(map);

            $('#result1').append(committer);
            $('#result2').append(output);
        }
    });


    return false;


    //});

});