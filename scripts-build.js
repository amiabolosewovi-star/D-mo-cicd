const fs = require("node:fs");
const path = require("node:path");

const dist = path.join(__dirname, "dist");
fs.mkdirSync(dist, { recursive: true });

const html = `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Démo CI/CD</title>
</head>
<body>
  <h1>Bonjour depuis le mini-projet CI/CD !</h1>
  <p>Si ce fichier se trouve dans dist/, la construction a réussi.</p>
</body>
</html>
`;

fs.writeFileSync(path.join(dist, "index.html"), html, "utf8");
console.log("Construction terminée : dist/index.html a été créé.");
