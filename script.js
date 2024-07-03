
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
            // Afficher les trajets//
            document.querySelector("#windowright").innerHTML += `
            <div>${departure > arrival}</div>
            `
        }
      console.log(data.trips);
    });
       console.log('Click detected!')



//     const textToCompare = document.querySelector('#departureInput').value.toLowerCase();
//     if (document.querySelectorAll('#departureInput').textContent.toLowerCase().includes(textToCompare) === false) {
// }
}
);

// .then(res => res.json())
// .then(reponseDuBAck => {
//     reponseDuBAck.allTrips.length
// })

