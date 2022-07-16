  let url="https://api.openbrewerydb.org/breweries"
  

  
  let searchUrl="https://api.openbrewerydb.org/breweries/search?query={}"

async function getOpenBrewery() {
        try {
            let data = await fetch(url)
            // console.log(data)
            let res = await data.json()
            console.log(res)
            showOpenBrewery(res)
        }
        catch(err){
            console.log(`error found ${err}`)

        }

    }
    getOpenBrewery()

    var mainOpenBrewery=document.getElementById('mainOpenBrewery')

   function showOpenBrewery(brewery){
         mainOpenBrewery.innerHTML=""
         brewery.map((element)=>{
            var OpenBrewery=document.createElement('div')
            OpenBrewery.classList.add('col','movie')
            console.log(element)

           OpenBrewery.innerHTML=` 
           <div class="card h-100">
           <img src="https://www.programmableweb.com/sites/default/files/Open%20Brewery%20DB.png" class="card-img-top" alt="...">
           <div class="card-body">
           
             <h5 class="card-title">Name :- ${element.name}</h5>
             <h5 class="card-title">Brewery Type :-${element.brewery_type}</h5>
             <h5 class="card-title">Address :-${element.address_3}</h5>
             <h5 class="card-title">Website URL :-${element.website_url}</h5>
             <h5 class="card-title">Phone No. :-${element.phone}</h5>
             
             </div>
             </div>`
             mainOpenBrewery.append(OpenBrewery)
                  
         })
   }

   const form=document.getElementById(`form`)
   const search=document.getElementById(`search`)

   form.addEventListener('submit',(e)=>{
      e.preventDefault()
      searchTerm=search.value
      console.log(searchTerm)
      console.log(searchUrl+searchTerm)
      if(searchTerm && searchTerm.value!==""){
      getOpenBrewery(searchUrl+searchTerm)
      }
      else{
        window.location.reload()
      }
   })