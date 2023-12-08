# Recipes

Recipes est une application web qui offre la possibilité d'effectuer des recherches de recettes en utilisant des filtres ou des mots-clés. Cette application repose principalement sur l'API [spoonacular](https://spoonacular.com/food-api), qui regroupe une variété de recettes.

## Installation & lancement
Pour procéder à l'installation du projet, il est nécessaire d'entrer les lignes de code suivantes :

```bash
 git clone https://github.com/Pierre-Richard023/recipes
```
```bash
 cd recipes
```

```bash
 npm install
```

Ensuite, vous devrez obtenir une clé API sur [spoonacular](https://spoonacular.com/food-api). Une fois que vous avez obtenu la clé API, ouvrez le fichier .env.


```javascript
VITE_API_KEY="votre clé api"
```

Ensuite, il vous suffit de saisir la commande suivante.

```bash
 npm run dev
```
