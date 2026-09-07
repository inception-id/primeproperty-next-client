const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");
const ts = require("typescript");

const modulePath = join(__dirname, "validate-blog-image.ts");
let getBlogImageValidationError = () => undefined;

try {
  const source = readFileSync(modulePath, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  const loadedModule = { exports: {} };

  new Function("module", "exports", output)(loadedModule, loadedModule.exports);
  getBlogImageValidationError =
    loadedModule.exports.getBlogImageValidationError;
} catch (error) {
  if (error.code !== "ENOENT") {
    throw error;
  }
}

test("blog image validation accepts supported extensions with matching MIME types", () => {
  for (const file of [
    { name: "article.PNG", type: "image/png" },
    { name: "article.jpg", type: "image/jpeg" },
    { name: "article.jpeg", type: "image/jpg" },
    { name: "article.webp", type: "image/webp" },
    { name: "article.webp", type: "" },
  ]) {
    assert.equal(getBlogImageValidationError(file), null, file.name);
  }
});

test("blog image validation rejects unsupported extensions and MIME types", () => {
  for (const file of [
    { name: "article.exe", type: "image/png" },
    { name: "article.png", type: "text/plain" },
    { name: "article.png", type: "image/jpeg" },
    { name: "article", type: "image/png" },
  ]) {
    assert.equal(
      getBlogImageValidationError(file),
      "Choose a PNG, JPEG/JPG, or WebP image.",
      file.name,
    );
  }
});
