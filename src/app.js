function saluer(nom) {
  if (typeof nom !== "string" || nom.trim() === "") {
    throw new Error("Le nom doit être une chaîne non vide.");
  }
  return `Bonjour, ${nom.trim()} !`;
}

module.exports = { saluer };
