const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const test = require("node:test");
const ts = require("typescript");

const modulePath = join(__dirname, "get-uploaded-image-path.ts");
let getUploadedImagePath = () => undefined;

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
  getUploadedImagePath = loadedModule.exports.getUploadedImagePath;
} catch (error) {
  if (error.code !== "ENOENT") {
    throw error;
  }
}

test("getUploadedImagePath returns the single path from a successful upload", () => {
  assert.equal(
    getUploadedImagePath({
      status: 201,
      data: [
        {
          is_cover: false,
          path: "/blog/example.webp",
          english_label: "",
          indonesian_label: "",
          endpoint: null,
        },
      ],
      message: "Uploaded",
    }),
    "/blog/example.webp",
  );
});

test("getUploadedImagePath rejects unsuccessful upload responses", () => {
  assert.equal(
    getUploadedImagePath({
      status: 500,
      data: [
        {
          is_cover: false,
          path: "/blog/example.webp",
          english_label: "",
          indonesian_label: "",
          endpoint: null,
        },
      ],
      message: "Upload failed",
    }),
    null,
  );
});

test("getUploadedImagePath rejects missing, multiple, and blank paths", () => {
  assert.equal(
    getUploadedImagePath({ status: 200, data: null, message: "No data" }),
    null,
  );
  assert.equal(
    getUploadedImagePath({
      status: 200,
      data: [
        {
          is_cover: false,
          path: "/blog/first.webp",
          english_label: "",
          indonesian_label: "",
          endpoint: null,
        },
        {
          is_cover: false,
          path: "/blog/second.webp",
          english_label: "",
          indonesian_label: "",
          endpoint: null,
        },
      ],
      message: "Uploaded",
    }),
    null,
  );
  assert.equal(
    getUploadedImagePath({
      status: 200,
      data: [
        {
          is_cover: false,
          path: "   ",
          english_label: "",
          indonesian_label: "",
          endpoint: null,
        },
      ],
      message: "Uploaded",
    }),
    null,
  );
});

test("getUploadedImagePath rejects malformed runtime status values", () => {
  const data = [
    {
      is_cover: false,
      path: "/blog/example.webp",
      english_label: "",
      indonesian_label: "",
      endpoint: null,
    },
  ];

  assert.equal(getUploadedImagePath({ data, message: "Missing status" }), null);
  assert.equal(
    getUploadedImagePath({ status: "200", data, message: "String status" }),
    null,
  );
  assert.equal(
    getUploadedImagePath({ status: 200.5, data, message: "Decimal status" }),
    null,
  );
});
