//get commit information
$(document).on('click', '#list li a', function (){



    value = $(this).parent().attr('id');

    alert(value);


            $.ajax({
        type: "GET",
        url: "https://api.github.com/repos/" + value + "/commits",
        //url: " https://api.github.com/repos/caocasey/pfe3/commits",
        dataType: "json",
        success: function (data) {
            var committer = "<ul>";
            var myArray = [];


                if (data.length <= 100) {

                    for (var i = 0; i < data.length; i++) {
                        committer += "<li>" + data[i].commit.committer.name + "<br>" + data[i].commit.committer.date + "</li>";
                        myArray.push(data[i].commit.committer.name);

                    }
                }
                else if (data.length > 100) {
                    for (var j = data.length - 100; j < data.length; j++) {
                        committer += "<li>" + data[j].commit.committer.name + "<br>" + data[j].commit.committer.date + "</li>";
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


            var  timeline="<div>";
            for(b= 0; b<data.length; b++) {
                timeline += "<div class='timeline animated'><div class='timeline-row'><div class='timeline-time'><small>"+data[b].commit.committer.date+"</small></div><div class='timeline-icon'><div class='bg-primary'><i class='fa fa-pencil'></i></div></div><div class='panel timeline-content'><div class='panel-body'><h2>"+data[b].commit.committer.name+"</h2></div></div></div></div>";

            }

            $('#result1').append(committer);
            $('#result2').append(output);
            $('#result3').append(timeline);
        }
    });


    return false;


    //});

});

