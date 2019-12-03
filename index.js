function submitData(UserName,UserEmail){
    return fetch('http://localhost:3000/users',{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body:JSON.stringify(
            {
                name:name,
                email:email
            }
        )
    })
    .then(function(response) {
    return response.json();
  })
    .then((res)=>document.body.innerHTML = res.id)
   .catch(function(error) {
    alert("Bad things! Ragnarők!");
    console.log(error.message);
    
  });
}

submitData('Hanaa','hanaa.eskander95@gmail.com');