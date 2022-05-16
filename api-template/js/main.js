//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)


// document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const isbn = document.querySelector('input').value

  

  const url = `https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        console.log(data[`ISBN:${isbn}`].title)
        
        const author = data[`ISBN:${isbn}`].authors[0].name
        document.querySelector('h3').innerText = author

        const cover = data[`ISBN:${isbn}`].cover.large
        
        document.querySelector('img').src = cover
       


        if(!isbn) {
          document.querySelector('h2').innerText = localStorage.getItem('books')
        } else if (!localStorage.getItem('books')) {
          localStorage.setItem('books', data[`ISBN:${isbn}`].title)
          document.querySelector('h2').innerText = localStorage.getItem('books')
        } else {
          let books = localStorage.getItem('books') + ';' + data[`ISBN:${isbn}`].title
          localStorage.setItem('books', books)
          document.querySelector('h2').innerText = localStorage.getItem('books')
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
      

978-1690412359
978-1847808905
978-0-399-16524-5
978-1847941831
        
        
      
        
        
        
