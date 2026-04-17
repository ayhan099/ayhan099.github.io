function showRooms() {
    const rooms = document.getElementById('rooms');

    rooms.innerHTML = `
    <div class ="col-md-4">
        <div class ="card">
            <img src="room1.jpg" class="card-img-top">
            <div class="card-body">
                <h5>Business Classic</h5>
                <p>Från 1 895 kr</p>
                <p class="text-success">✔ Frukost ingår vid bokning här</p>
                <button class="btn btn-dark" onclick="selectRoom()">Välj</button>
            </div>
        </div>
    </div>

    <div class ="col-md-4">
        <div class ="card">
            <img src="room2.jpg" class="card-img-top">
            <div class="card-body">
                <h5>Premium Dubbelrum</h5>
                <p>Från 2 650 kr</p>
                <button class="btn btn-dark" onclick="selectRoom()">Välj</button>
            </div>
        </div>
    </div>
    
    <div class="col-md-6 col-lg-3">
            <div class="card">
                <img src="klass3.jpg" class="card-img-top">
                <div class="card-body">
                    <h5>The Strandvägen Experience - Premium Dubbelrum</h5>
                    <p class="text-muted">Vakna upp till utsikt över Stockholms inlopp.</p>
                    <p>Från 3 400 kr</p>
                    <button class="btn btn-dark" onclick="selectRoom()">Välj</button>
                </div>
            </div>
    </div>

    <div class="col-md-6 col-lg-3">
            <div class="card h-100 border-warning">
                <img src="klass4.jpg" class="card-img-top" onclick="openImage(this)">
                <div class="card-body">
                    <p class="card-title">Pärson Suite</p>
                    <p class="text-muted">55 kvm lyx med vardagsrum och badkar i guld.</p>
                    <h4>5 900 SEK/natt</h4>
                    <p class="small text-success">✔ Inklusive moms</p>
                    <button class="btn btn-dark" onclick="selectRoom()">Välj</button>
                </div>
            </div>
    </div>








    
    `    
    ;

}

function selectRoom(){
    document.getElementById("extras").classList.remove("d-none");
    document.getElementById("form").classList.remove("d-none");

}

function confirmBooking(){
    document.getElementById("confirmation").classList.remove("d-none");
    alert("Tack för din bokning! Vi ser fram emot att välkomna dig till Mrs Pärson Hotel.");
}