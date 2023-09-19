window.addEventListener("load", () => {
    let header = document.querySelector("header")
    let footer = document.querySelector("footer")

    header.innerHTML = `
    <div class="logo__division">
    <div class="logo__container">
        <a href="http://www.institutomusicalhz.com.ar/">
            <img src="../public/images/logo-dark.png" alt="logo-instituto">
        </a>
    </div>
    </div>
    <nav id="nav__division">
        <ul>
            <li>
                <a href="./admin_home.html">Inicio</a>
            </li>
            <li>
                <a href="./listado_usuarios.html">Personal</a>
            </li>
            <li>
                <a href="#">Alumnos</a>
            </li>
            <li>
                <a href="#">Cursos</a>
            </li>
            <li>
                <a href="#">Configuraciones</a>
            </li>
        </ul>
    </nav>
    <div class="user__division">
        <div>
            <i class="fa-regular fa-user"></i>
        </div>
        <div>
            <p>Usuario</p>
        </div>
    </div>
    `

    footer.innerHTML = `
    <div>
        <p>Copyright&COPY; Conservatorio Hertz 2023</p>
    </div>
    `

})