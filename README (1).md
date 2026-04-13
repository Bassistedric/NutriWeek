# 🍊 NutriWeek — Guide de déploiement

Application web progressive (PWA) pour le suivi du régime hyperprotéiné et la gestion des courses familiales.

---

## 📁 Fichiers à uploader sur GitHub

| Fichier | Description |
|---|---|
| `index.html` | L'application complète |
| `sw.js` | Service worker (mode hors-ligne) |
| `manifest.webmanifest` | Config PWA (icône, nom, couleurs) |
| `.nojekyll` | Empêche GitHub de modifier les fichiers |
| `favicon.ico` | Icône onglet navigateur |
| `icon-16.png` | Icône 16×16 |
| `icon-32.png` | Icône 32×32 |
| `icon-48.png` | Icône 48×48 |
| `icon-96.png` | Icône header app |
| `icon-180.png` | Apple Touch Icon (iOS) |
| `icon-192.png` | Icône Android / PWA |
| `icon-512.png` | Icône splash screen |
| `icon-1024.png` | Icône haute résolution |

---

## 🚀 Déploiement pas à pas

### Étape 1 — Créer le repository GitHub

1. Va sur **github.com** et connecte-toi
2. Clique sur **"New repository"** (bouton vert en haut à droite)
3. Nom du repo : `nutriweek` (tout en minuscules, sans espace)
4. Laisse en **Public** (nécessaire pour GitHub Pages gratuit)
5. Ne coche rien d'autre → clique **"Create repository"**

---

### Étape 2 — Uploader les fichiers

1. Sur la page du repo vide, clique **"uploading an existing file"**
2. Glisse-dépose **tous les fichiers** en même temps dans la zone
3. En bas de la page, dans "Commit changes" : laisse le message par défaut
4. Clique **"Commit changes"**

> ⚠️ Le fichier `.nojekyll` est invisible sur Windows. Assure-toi qu'il est bien uploadé (il doit apparaître dans la liste des fichiers sur GitHub).

---

### Étape 3 — Activer GitHub Pages

1. Dans le repo, clique sur **"Settings"** (onglet en haut)
2. Dans le menu gauche, clique **"Pages"**
3. Sous **"Source"**, sélectionne **"Deploy from a branch"**
4. Branch : **`main`** — Dossier : **`/ (root)`**
5. Clique **"Save"**
6. Attends 1-2 minutes ⏳

---

### Étape 4 — Accéder à l'app

Ton app sera disponible à l'adresse :

```
https://TON-PSEUDO-GITHUB.github.io/nutriweek/
```

Remplace `TON-PSEUDO-GITHUB` par ton nom d'utilisateur GitHub.

Cette URL apparaît aussi dans Settings → Pages une fois déployé.

---

## 📲 Installer l'app sur téléphone

### Sur Android (Chrome)
1. Ouvre l'URL dans Chrome
2. Un bandeau "Installer NutriWeek" apparaît → appuie dessus
3. Ou : menu ⋮ → "Ajouter à l'écran d'accueil"

### Sur iPhone (Safari)
1. Ouvre l'URL dans **Safari** (pas Chrome)
2. Appuie sur l'icône de partage 📤 en bas
3. Sélectionne **"Sur l'écran d'accueil"**
4. Appuie sur **"Ajouter"**

---

## 🔗 Partager avec ta conjointe

Envoie simplement l'URL par SMS ou WhatsApp. Elle peut également l'installer sur son téléphone via la même procédure.

L'inventaire familial se synchronise automatiquement entre les appareils via le navigateur.

---

## 🔄 Mise à jour chaque semaine

Chaque semaine, donne ton nouvel Excel à Claude → il génère un nouveau `index.html`.

Pour mettre à jour sur GitHub :
1. Va dans le repo `nutriweek`
2. Clique sur `index.html`
3. Clique l'icône ✏️ (Edit)
4. Sélectionne tout le contenu et colle le nouveau fichier
5. Clique **"Commit changes"**

L'app se met à jour automatiquement sur tous les appareils dans la minute.

---

## ✨ Fonctionnalités

| Onglet | Fonction |
|---|---|
| 🛒 Courses | Liste hebdomadaire avec cases à cocher (persistées) |
| 🍽 Menu | Menu du jour avec navigation par jour |
| 👨‍🍳 Prépa | Tâches de préparation par jour |
| 📦 Inventaire | Liste permanente familiale → génère la liste de courses |
