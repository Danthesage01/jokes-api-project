  // Grab the button elements
document.querySelector(".get-joke").addEventListener("click", getAJoke)
document.querySelector(".get-jokes").addEventListener("click", getJokes)

// Create function
function getAJoke(e) {
  // Create an XHR Object
  const xhr = new XMLHttpRequest()

  // xhr Open function to create GET and API
  xhr.open("GET", `https://v2.jokeapi.dev/joke/Programming?type=single`, true)

  // setting an onload method on xhr
  xhr.onload = function () {
      // check if status is successful
    if (this.status === 200) {
      const response = JSON.parse(this.responseText)

      const output = `<li>${response.joke}</li>`
      console.log(response)

      document.querySelector(".joke").innerHTML = output
    }
  }

  // xhr send() function
  xhr.send()

  // stop default function
  e.preventDefault()
}

// Create function
function getJokes(e) {
  // Grab input's value
  const number = document.querySelector('input[type="number"]').value

    // Create an XHR Object
  const xhr = new XMLHttpRequest()

    // xhr Open function to create GET and API
  xhr.open("GET", `https://v2.jokeapi.dev/joke/Programming?type=single&amount=${number}`, true)

  // setting an onload method on xhr
  xhr.onload = function () {
    // VALIDATION
    if (number === "") {
      alert("Kindly insert the number of jokes")
    } else {
      if (this.status === 200) {
        let output = " "
        const response = JSON.parse(this.responseText)


        if (response.error === false) {
          response.jokes.forEach(joke => {
            output += `<li>${joke.joke}</li>`
          });
        } else {
          output += `<li>Something went wrong</li>`
        }
        document.querySelector(".jokes").innerHTML = output
      }
    }
  }

  xhr.send()

  e.preventDefault()
}