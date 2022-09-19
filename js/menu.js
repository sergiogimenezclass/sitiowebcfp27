let miMenu = function() {
    let template = /*html*/`
    <header class="navigation fixed-top sticky-header">
    <div class="container">
      <!-- main nav -->
      <nav class="navbar navbar-expand-lg navbar-light px-0">
        <!-- logo -->
        <a class="navbar-brand logo" href="index.html">
            <span class="logo-default">CFP 27</span>
            <span class="logo-white">CFP 27</span> 
          <!-- <img loading="lazy" class="logo-default" src="images/logo.png" alt="logo" /> -->
          <!-- <img loading="lazy" class="logo-white" src="images/logo-white.png" alt="logo" /> -->
        </a>
        <!-- /logo -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation"
          aria-controls="navigation" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navigation">
          <ul class="navbar-nav ml-auto text-center">
            <li class="nav-item">
              <a class="nav-link dropdown-toggle" href="index.html" aria-haspopup="true" aria-expanded="false">
                Inicio 
              </a>
              
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="service.html">Propuesta formativa</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="biblioteca.html">Biblioteca</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="about.html">Presentación</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="galeria.html">Galería</a>
            </li>
  
            <li class="nav-item ">
              <a class="nav-link" target="_blank" href="http://campus.centro27.edu.ar/">Campus Virtual</a>
            </li>
            <li class="nav-item ">
              <a class="nav-link" href="contact.html">Contacto</a>
            </li>
            
          </ul>
        </div>
      </nav>
      <!-- /main nav -->
    </div>
  </header>
    `
    document.querySelector('header').innerHTML = template
}

miMenu()