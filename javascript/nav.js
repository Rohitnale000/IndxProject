const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `<nav class="navbar">
    <div class="topnav">
    <a class="active" href="/main.html">Home</a>
    <a href="#news">Login</a>
    <a href="/about.html">About</a>
</div>
</nav>
    `;
}

createNav();