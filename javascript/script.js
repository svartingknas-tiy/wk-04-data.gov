"use strict"

function createTable (data){
  data.map (function (section){
    const msg = "<tr><td>" + section.state
              +"</td><td>" + section.education_jobs_funded_estimate
              +"</td><td>\n"
    document.querySelector("#table").innerHTML += msg;
  })
}
