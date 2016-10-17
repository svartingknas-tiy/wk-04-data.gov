/* data from Preserving Jobs in Education
https://dev.socrata.com/foundry/open.whitehouse.gov/d8mb-v5jp
*/

var ourData = {};

window.onload = function educationJobs () {

  let url = 'https://open.whitehouse.gov/resource/d8mb-v5jp.json'


  // $.get(url, function(data) {
  //   console.log(data);
  // });

  // we'll do the long version to prevent overload
  $.ajax({
    dataType: "json",
    url: url,
    data: {
      "$limit" : 100
    }
  }).done(function(data) {
    console.log (data);
  })
};
