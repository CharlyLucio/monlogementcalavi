# MonLogementCalavi

La plateforme de référence pour trouver un logement étudiant à Calavi.

Trouvez des chambres, studios et appartements près de l'UAC. Annonces vérifiées, prix en FCFA, quartiers populaires (Zogbadjè, Godomey, Kpota, Tankpè, Zoca, Bidossessi).

## Fonctionnalités

- Recherche par quartier, type de logement et budget
- Filtres rapides (Tout, À louer, Nouveautés, Premium)
- Favoris sauvegardés dans le navigateur
- Formulaire de soumission d'annonce (avec paiement MTN MoMo prévu)
- Design responsive, mobile-first

## Structure

```
index.html       Page principale
css/style.css    Styles (design sombre proptech)
js/main.js       Données des annonces + interactions
netlify.toml     Configuration Netlify
```

## Déploiement

Déployé sur [Netlify](https://www.netlify.com).

[![Netlify Status](https://api.netlify.com/api/v1/badges/42cee872-08fe-430c-b245-5d7901c5cfca/deploy-status)](https://app.netlify.com/projects/monlogementcalavi/deploys)

**Lien en ligne :** https://monlogementcalavi.netlify.app

**Repo GitHub :** https://github.com/CharlyLucio/monlogementcalavi

## Roadmap

- [ ] Paiement MTN MoMo automatisé (Netlify Functions)
- [ ] Soumission d'annonces persistante (base de données)
- [ ] Upload de photos
- [ ] Alerte WhatsApp pour nouveaux logements
- [ ] Extension à d'autres villes