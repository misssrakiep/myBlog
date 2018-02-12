
/*Define handlebars template*/
var blogTemp = document.querySelector(".blogTemp").innerHTML;
var blogText = Handlebars.compile(blogTemp);
    $(document).ready(function(){
        
        /*Making ajax call to personal api to send data to the database */
        $.ajax({
            headers: { "Accept": "application/json"},
            type: "GET",
            url: "https://shameeras-blog.herokuapp.com/api/blog",
            datatype: "json",
            success: function (results) {
                console.log(results);
                results.forEach(function (item, index) {
                    $(".blog-entry").html(
                        blogText({results : results})
                    );
                })
            }
        });


        var blogDate = $('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });

        var blogTitle = $(".blogTitle");
        var blogEntry = $(".blog-text-area");


        $(".postBlog").click(
                function () {
                        $.ajax({
                            headers: { "Accept": "application/json"},
                            type: "POST",
                            url: "https://shameeras-blog.herokuapp.com/api/entry",
                            datatype: "json",
                            data: {
                                blogTitle: blogTitle.val(),
                                date: blogDate.val(),
                                blogText: blogEntry.val()
                            },
                            success: function (data) {
                                console.log(data.date);
                                location.reload();
                            }
                        })
                        location.reload();
                    }
        );
        



      }); /*End of document*/