# Les-travaux-d-Hercule

Héraclès doit vaincre le féroce Lion de Némée, connu pour sa peau impénétrable, ce qui le rend très difficile à blesser. Avant de commencer sa quête, notre héros devrait se préparer un peu :

Dans le fichier vide src/Fighter.js crée :

une constante MAX_LIFE = 100: les combattants possèdent 100 points de vie max.

une classe Fighter avec les propriétés :

name: le nom du combattant.

strength: sera utilisé pour calculer les points de dommage durant l'attaque.

dexterity: sera utilisé pour calculer les points de défense qui limiteront les dommages reçus durant l'attaque.

life: initialisés à MAX_LIFE, les combattants commenceront avec 100 points de vie.

Il y aura potentiellement plein d'autres fonctionnalités à ajouter, mais c'est un bon début !

Donc, dans le fichier index.js fourni, créer deux instances de la classe Figther, pour :

🧔 Heracles, strength 20, dexterity 6

🦁 Nemean Lion, strength 11, dexterity 13

Pour donner un meilleur look même si vous travaillez dans la console, vous pouvez ajouter une icône dans la chaîne de caractères (= string) (https://emojipedia.org/). Vous pouvez aussi vous amuser à changer les valeurs des variables, mais celles fournies donneront un combat équilibré.

💡ASTUCE: un constructor sera requis dans votre classe pour initialiser ces propriétés avec différentes valeurs pour Héraclès et le Lion.

💡ASTUCE: n'oubliez pas de require le fichier Fighter.js si vous voulez pouvoir l'utiliser dans votre fichier index.js.

Après que les deux aient été instanciés, affichez le nom et la vie 💙 (vous devriez commencer à 100) pour chacun des combattants afin de vous assurer que tout fonctionne. Pour l'instant, vous utiliserez JS seulement en mode CLI. Pour cela, tapez simplement : node index.js dans votre terminal.

COMBATTEZ !
Héraclès s’échauffe un peu, resserre ses muscles, écrase quelques rochers à mains nues. Il est prêt à se battre !

Créer une méthode fight() qui vous permet d'attaquer l'ennemi. Pour déterminer qui vous attaquez, la méthode fight() prend un objet Fighter comme paramètre ! Dans le corps de la méthode, vous calculerez en premier les points de dommage de l'attaquant :

Le combattant frappera avec plus ou moins de succès, la quantité de dommage infligé par l' attaquant sera aléatoire entre 1 et sa strength (Utilise Math.random()(Documentation Pour d'autres conseils, voir [article] (https://dev.to/rocambille/how-to-roll-a-dice-in-javascript-51j0)).

Mais le défenseur peut se défendre ou esquiver ! Pour cela mitigez les dommages en les soustrayant de la dexterity du défenseur (sans jamais descendre en dessous de zéro).

une fois les dommages calculés, réduisez le nombre de points de vie du défenseur par la valeur précédemment obtenue. Faites attention : les points de vie du défenseur ne peuvent tomber en dessous de zéro, rappelez vous bien de ça.

En résumé :

nouveaux points de vies du défenseur = points de vie actuels du défenseur - (dommages de l'attaquant - dextérité du défenseur)

En sachant que (attacker's dommage - defender's dexterity) ne peut pas être négatif.

C'est parti, votre classe est prête, vous n'avez plus qu'à vous en servir !

🗡️ Il n'en restera qu'un
Héraclès entre dans la grotte, le Lion est là, ses yeux rouges pointés sur vous. Le combat est imminent :

Dans le fichier index.js créer une boucle exécutant un combat à mort ! Tant qu'un des combattants possède des points de vie > 0, le combat continue.

Pour chaque "round" 🕛 Héraclès attaque le Lion, puis le Lion l'attaque en retour. Tu dois afficher le numéro du round, qui attaque qui et les points de vie restants.

Quand l'un des deux est défait, tu dois donc afficher le vainqueur 🏆 et le perdant 💀. La capture d'écran en dessous vous donne un aperçu de nos attentes.

instructions

🎁 BONUS : créer une méthode isAlive() pour optimiser ton code.

Conclusion
Une fois terminé, vous êtes libre de modifier le code et de rajouter de nouvelles fonctionnalités. Nous vous donnerons un code propre pour le début du prochain atelier.
