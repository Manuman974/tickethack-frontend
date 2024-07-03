
// CLique bouton search "
document.querySelector('#searchButton').addEventListener('click', function () {
    const Trip = {
    departure: document.querySelector('#departureInput').value,
    arrival: document.querySelector('#arrivalInput').value,
    date: document.querySelector('#dateInput').value,
    };

    fetch('http://localhost:3000/trips', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(Trip)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
        const Blankwindowright = document.querySelector("#windowright")
        Blankwindowright.innerHTML = ""
    
    }

        if (data.result) {
            // Afficher les trajets//

                for (let i=0; i<data.trips.length; i++) { 
                    const departure = data.trips[i].departure
                    const arrival = data.trips[i].arrival
                    const hour = new Date(data.trips[i].date).getHours()
                    const minute = new Date(data.trips[i].date).getMinutes()
                    const price = data.trips[i].price
               
            document.querySelector("#windowright").innerHTML += `
               <div id="triplist"> ${departure} > ${arrival} ${hour}:${minute} ${price}€
                <button class="bookButton">Book</button>
            </div>`
        }
    }
    })
    //   console.log(data.trips);
    });
       console.log('Click detected!')



//     const textToCompare = document.querySelector('#departureInput').value.toLowerCase();
//     if (document.querySelectorAll('#departureInput').textContent.toLowerCase().includes(textToCompare) === false) {
// }


// .then(res => res.json())
// .then(reponseDuBAck => {
//     reponseDuBAck.allTrips.length
// })

