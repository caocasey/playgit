$ ->
  $.get "/repos" , (repos) ->
    $.each repos, (index, repo) ->
      $('#repos').append $("<li>").text repo.name