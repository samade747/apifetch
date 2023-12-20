const response = fetch('https://maroon-shorts.cyclic.cloud/api/jobAds/all?limit=10&pageNo=1&keyWord=frontend&category=').then((response)=>{
    console.log(response)
    return response.json()
}).then((samad) => {

    // console.log(samad.data[1])
    declare(samad.data)
})

const declare = (paramtr) => {
  console.log(paramtr)
   paramtr.forEach(element => {
    const dhsdh = document.getElementById("dhsdh")
    dhsdh.innerHTML+= `<div class="card text-center">
  <div class="card-header">
    ${element.companyName}
  </div>
  <div class="card-body">
    <h5 class="card-title">${element.designation}</h5>
    <p class="card-text">${element.desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
  <div class="card-footer text-body-secondary">
    2 days ago
  </div>
</div>`
// document.body.innerHTML += ui;
   });
  

  
}