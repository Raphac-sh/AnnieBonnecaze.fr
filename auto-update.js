document.write(`
<header>
    <h1 class="big-title">Annie Bonnecaze,</h1><h3 class="small-title">Artiste Peintre</h3>
    <img src="assets/banner.png">
</header>

<nav>
    <ul>                  
      <li><a href="index.html">Accueil</a></li>

      <li class="deroulant"><a href="#">Pastels</a>
        <ul class="sous">
          <li><a href="pastels.html">Prix et Divers</a></li>
          <li><a href="Pastel_personnages.html">Portraits et Animaux</a></li>
          <li><a href="Pastel_Paysage.html">Paysages</a></li>
        </ul>
      </li>
      <li class="deroulant"><a href="#">Huiles</a>
        <ul class="sous">
          <li><a href="huiles.html">Prix et Divers</a></li>
          <li><a href="huiles_Paysages.html">Paysages</a></li>
          <li><a href="huiles_fleurs.html">Fleurs</a></li>
        </ul>
      </li>

      <li><a href="#footer">Me contacter</a></li>
    </ul>
</nav>`);