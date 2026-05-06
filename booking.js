function showRooms() {
    const rooms = document.getElementById('rooms');

    rooms.innerHTML = `
    <div class="col-md-4">
        <div class="card">
            <img src="room1.jpg" class="card-img-top" alt="Business Classic">
            <div class="card-body">
                <h5>Business Classic</h5>
                <p>Från 1 895 kr</p>
                <p class="text-success">✔ Frukost ingår vid bokning här</p>

                <!-- ÄNDRAT: knapp → radio -->
                <div class="form-check mt-3">
                    <input class="form-check-input room-select" type="radio" name="room">
                    <label class="form-check-label">
                        Välj detta rum
                    </label>
                </div>

            </div>
        </div>
    </div>

    <div class="col-md-4">
        <div class="card">
            <img src="room2.jpg" class="card-img-top" alt="Premium Dubbelrum">
            <div class="card-body">
                <h5>Premium Dubbelrum</h5>
                <p>Från 2 650 kr</p>

                <!-- ÄNDRAT -->
                <div class="form-check mt-3">
                    <input class="form-check-input room-select" type="radio" name="room">
                    <label class="form-check-label">
                        Välj detta rum
                    </label>
                </div>

            </div>
        </div>
    </div>

    <div class="col-md-6 col-lg-3">
        <div class="card">
            <img src="klass3.jpg" class="card-img-top" alt="Premium med sjöutsikt">
            <div class="card-body">
                <h5>Premium med sjöutsikt</h5>
                <p class="text-muted">Vakna upp till utsikt över Stockholms inlopp.</p>
                <p>Från 3 400 kr</p>

                <!-- ÄNDRAT -->
                <div class="form-check mt-3">
                    <input class="form-check-input room-select" type="radio" name="room">
                    <label class="form-check-label">
                        Välj detta rum
                    </label>
                </div>

            </div>
        </div>
    </div>

    <div class="col-md-6 col-lg-3">
        <div class="card border-warning">
            <img src="klass4.jpg" class="card-img-top" alt="Pärson Suite">
            <div class="card-body">
                <h5>Pärson Suite</h5>
                <p class="text-muted">55 kvm lyx med vardagsrum och badkar i guld.</p>
                <p>5 900 kr/natt</p>

                <!-- ÄNDRAT -->
                <div class="form-check mt-3">
                    <input class="form-check-input room-select" type="radio" name="room">
                    <label class="form-check-label">
                        Välj detta rum
                    </label>
                </div>

            </div>
        </div>
    </div>
    `;
}

/* NY LOGIK (ersätter selectRoom) */
document.addEventListener("change", function(e){
    if(e.target.classList.contains("room-select")){
        document.getElementById("extras").classList.remove("d-none");
        document.getElementById("form").classList.remove("d-none");
    }
});

function confirmBooking(){
    document.getElementById("confirmation").classList.remove("d-none");
    alert("Tack för din bokning! Vi ser fram emot att välkomna dig till Mrs Pärson Hotel.");
}