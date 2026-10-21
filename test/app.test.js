const test = require("node:test");
const assert = require("node:assert/strict");
const { saluer } = require("../src/app");

test("saluer renvoie un message personnalisé", () => {
  assert.equal(saluer("Ami"), "Bonjour, Ami !");
});

test("saluer supprime les espaces inutiles", () => {
  assert.equal(saluer("  Ami  "), "Bonjour, Ami !");
});

test("saluer refuse un nom vide", () => {
  assert.throws(() => saluer("   "), /chaîne non vide/);
});
