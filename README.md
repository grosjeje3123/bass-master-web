# Bass Master — version web

Méthode de basse interactive : l'appli écoute la basse, vérifie les notes et le rythme, et fait progresser leçon après leçon.

- Appli : https://grosjeje3123.github.io/bass-master-web/
- Page d'essai de détection (diagnostic brut : entrée audio, notes reconnues, latence) : `essai/`

Version d'essai. Ce qu'elle contient :

- un Parcours en neuf étapes (découvrir la basse, main droite, main gauche, silences et contretemps, premiers grooves, syncopes et doubles croches, gammes et arpèges, les styles, construire une ligne), 50 leçons, la théorie étant répartie au fil des leçons ;
- 97 exercices et lignes en pratique libre, validés sur trois niveaux (acquis, maîtrisé, autonome) ;
- un atelier libre : une grille, la batterie, le piano, et l'élève invente sa ligne ;
- la partition en clé de fa au-dessus de la tablature (ou l'une des deux), les accords, les doigtés, le manche ;
- l'accompagnement : clic, batterie (dont swing, ride et cross-stick), accords au piano, écoute du modèle ;
- « Ma basse » : entrée audio (câble ou micro), seuil, calibrage du retard de l'appareil ;
- un accordeur.

La basse arrive par une interface audio USB (câble) ou par le micro : Chrome, Edge ou Samsung Internet. Tout le calcul se fait sur l'appareil ; aucun son n'est envoyé.
Toute l'appli est gardée sur l'appareil dès la première visite, pour jouer hors connexion. La progression et les réglages restent sur l'appareil.

Elle n'a encore jamais été essayée avec une vraie basse : les vérifications utilisent des sons fabriqués.

Ce dépôt ne contient que l'appli construite ; la source est tenue à part.

Notes de basse : collection Tonejs-Instruments (Nicholaus Brosowsky), enregistrements Karoryfer Samples, licence CC-BY 3.0.
Notes de piano : collection Tonejs-Instruments, enregistrements VSCO 2 CE (Versilian Studios), licence CC-BY 3.0.
Cross-stick : Virtuosity Drums (Versilian Studios), licence CC0.
Sons de batterie : kit Gretsch enregistré par bigjoedrummer et shpira, licence CC0 (voir `sons/CREDITS.txt`).
Police : Montserrat, licence SIL OFL (voir `fonts/OFL-Montserrat.txt`).
