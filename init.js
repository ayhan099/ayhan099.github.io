document.addEventListener("DOMContentLoaded", function () {
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

    const navbarDiv = document.getElementById("navbar");
    if (navbarDiv) {
        navbarDiv.innerHTML = nav;
    }

    const footer = `
    <footer class="footer">

    <div class="footer-top">
        <h2>Mrs Pärson Hotel</h2>
    </div>

    <div class="footer-bottom">
        <p>© 2026 Mrs Pärson Hotel</p>
        <div class="footer-links">
            <p>📍 Strandvägen 12, Stockholm | 📞08-123 45 67 | ✉ info@parsonhotel.se</p>
        </div>
    </div>

    </footer>
    `;

    const footerDiv = document.getElementById("footer");
    if (footerDiv) {
        footerDiv.innerHTML = footer;
    }

});

function openImage(img){
    const modalImg = document.getElementById("modalImage");
    modalImg.src = img.src;

    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
}