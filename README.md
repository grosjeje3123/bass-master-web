# Bass Master — essai de détection

Page web d'essai pour le projet Bass Master : elle vérifie qu'une tablette ou un téléphone entend une basse (au micro ou par câble / interface audio USB), reconnaît les notes jouées et mesure le placement rythmique.

- `index.html` : la page, en un seul fichier, sans dépendance. Tout le calcul se fait sur l'appareil ; aucun son n'est envoyé.
- À ouvrir en https (GitHub Pages), l'accès au micro étant refusé sinon.

Contenu : choix de l'entrée audio, accordeur, test de reconnaissance des notes, mesure de la latence et du rythme, bilan comparé aux seuils du cahier des charges (95 % de notes reconnues, stabilité à 10 ms).
