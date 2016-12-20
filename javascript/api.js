var ourData = {};

window.onload = function educationJobs () {

  let url = 'https://open.whitehouse.gov/resource/d8mb-v5jp.json'

  // over 27,000 hits with the following
  // $.get(url, function(data) {
  //   console.log(data);
  // });

  // we'll do the long version to prevent overload
  var jQueryPromise = $.ajax({
    dataType: "json",
    url: url,
    data: {
      "$limit" : 50
    }
  })

var realPromise = Promise.resolve(jQueryPromise);

realPromise.then(function (response){
  console.log('gotData', response);
  createTable(response);
}, function(err) {
  console.log("err", err);
})
};
