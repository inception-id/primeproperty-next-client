const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");
const ts = require("typescript");
const {
  unstable_doesMiddlewareMatch,
} = require("next/experimental/testing/server");

const source = readFileSync(join(__dirname, "middleware.ts"), "utf8");
const output = ts.transpileModule(source, {
  compilerOptions: {
    esModuleInterop: true,
    module: ts.ModuleKind.CommonJS,
    target: ts.ScriptTarget.ES2020,
  },
}).outputText;
const loadedModule = { exports: {} };
const localRequire = (specifier) =>
  specifier === "./lib/api" ? {} : require(specifier);

new Function("require", "module", "exports", output)(
  localRequire,
  loadedModule,
  loadedModule.exports,
);

const { config } = loadedModule.exports;

test("admin middleware matches every nested admin route", () => {
  for (const url of [
    "https://primeproperty.test/admin",
    "https://primeproperty.test/admin/properties",
    "https://primeproperty.test/admin/properties/new",
    "https://primeproperty.test/admin/blog/images",
  ]) {
    assert.equal(unstable_doesMiddlewareMatch({ config, url }), true, url);
  }
});

test("admin middleware ignores public routes", () => {
  for (const url of [
    "https://primeproperty.test/",
    "https://primeproperty.test/blog",
    "https://primeproperty.test/properties",
  ]) {
    assert.equal(unstable_doesMiddlewareMatch({ config, url }), false, url);
  }
});
