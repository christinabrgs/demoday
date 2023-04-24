function makeReq(){
    let food = document.querySelector('input').value
    console.log (food)
  
    fetch(`/api/${food}`)
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        document.querySelector('#result').innerText = `${food} ${data.icon}`
        document.querySelector('img').src = data.image
        document.querySelector('a').href = data.recipe
      })
  }
  
  
  document.querySelector('#submit').addEventListener('click', makeReq)