document.write(`
<header>
    <h1 class="big-title">Annie Bonnecaze,</h1><h3 class="small-title">Artiste Peintre</h3>
    <img src="assets/banner.png">
</header>

<nav>
    <ul>                  
      <li><a href="index.html">Accueil</a></li>

      <li><a href="Pastel.html">Pastel</a></li>
      <li class="deroulant"><a href="#">Huiles </a>
        <ul class="sous">
          <li><a href="huiles.html">Divers</a></li>
          <li><a href="huiles_Paysages.html">Paysages</a></li>
          <li><a href="huiles_fleurs.html">Fleurs</a></li>
        </ul>
      </li>

      <li><a href="#footer">Me contacter</a></li>
    </ul>
</nav>`);