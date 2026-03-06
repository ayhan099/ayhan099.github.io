document.addEventListener('DOMContentLoaded', function () {
        const nav = `
        <nav>
        <ul class="navbar">
        <li><a href="index.html">Hem</a></li>
        <li><a href="boka.html">Boka</a></li>
        <li><a href="galleri.html">Galleri</a></li>
        <li><a href="priser.html">Priser</a></li>
        <li><a href="about.html">Om oss</a></li>
        <li><a href="recen.html">Recensioner</a></li>
        </ul>
    </nav>
    `;

document.getElementById("navbar").innerHTML = nav;

});