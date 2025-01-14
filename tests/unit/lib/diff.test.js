const mockfs = require("mock-fs");

const path = require("path");
const { promises: fs } = require("fs"); // must be loaded after mock-fs

const { fileExists } = require("../../../src/utils/helpers/fs");

jest.mock("../../../src/lib/graphql");
const graphql = require("../../../src/lib/graphql");

jest.mock("@graphql-inspector/core");
const inspector = require("@graphql-inspector/core");

const {
  checkSchemaChanges,
  saveSchemaHash,
  saveSchemaFile,
  COMPARE_METHOD,
  SCHEMA_HASH_FILE,
  SCHEMA_REF,
} = require("../../../src/lib/diff");

describe("lib", () => {
  const FOLDER = "output";

  beforeEach(() => {
    mockfs({ [FOLDER]: {} });
  });

  afterEach(() => {
    mockfs.restore();
  });

  describe("diff", () => {
    const EXPECT_PATH = path.join(
      __dirname,
      "__expect__",
      __OS__,
      path.basename(__filename),
    );

    describe("checkSchemaChanges()", () => {
      test("returns true if no valid comparison method is selected", async () => {
        expect.hasAssertions();

        jest
          .spyOn(graphql, "printSchema")
          .mockImplementationOnce(() => "schema");

        const check = await checkSchemaChanges("schema", FOLDER, "FOOBAR");

        expect(check).toBeTruthy();
      });

      test("returns true if COMPARE_METHOD.HASH comparison differs", async () => {
        expect.hasAssertions();

        const printSchema = jest.spyOn(graphql, "printSchema");

        printSchema.mockImplementationOnce(() => "schema");
        await saveSchemaHash("SCHEMA", FOLDER);

        printSchema.mockImplementationOnce(() => "schema-new");
        const check = await checkSchemaChanges(
          "schema-new",
          FOLDER,
          COMPARE_METHOD.HASH,
        );

        expect(check).toBeTruthy();
      });

      test("returns false if COMPARE_METHOD.HASH comparison is equals", async () => {
        expect.hasAssertions();

        jest.spyOn(graphql, "printSchema").mockImplementation(() => "schema");

        await saveSchemaHash("SCHEMA", FOLDER);
        const check = await checkSchemaChanges(
          "schema",
          FOLDER,
          COMPARE_METHOD.HASH,
        );

        expect(check).toBeFalsy();
      });

      test("returns true if COMPARE_METHOD.HASH comparison has no reference hash file", async () => {
        expect.hasAssertions();

        jest.spyOn(graphql, "printSchema").mockImplementation(() => "schema");

        const hasHashFile = await fileExists(`${FOLDER}/${SCHEMA_HASH_FILE}`);
        const check = await checkSchemaChanges(
          "schema",
          FOLDER,
          COMPARE_METHOD.HASH,
        );

        expect(hasHashFile).toBeFalsy();
        expect(check).toBeTruthy();
      });

      test("returns true if COMPARE_METHOD.DIFF comparison differs", async () => {
        expect.hasAssertions();

        jest
          .spyOn(graphql, "printSchema")
          .mockImplementationOnce(() => "schema");
        jest.spyOn(graphql, "loadSchema").mockImplementationOnce(() => ({}));
        jest
          .spyOn(graphql, "getDocumentLoaders")
          .mockImplementationOnce(() => ({ loaders: [] }));
        jest
          .spyOn(inspector, "diff")
          .mockImplementationOnce(() => Promise.resolve([1]));

        await saveSchemaFile("SCHEMA", FOLDER);
        const check = await checkSchemaChanges(
          "schema-new",
          FOLDER,
          COMPARE_METHOD.DIFF,
        );

        expect(check).toBeTruthy();
      });

      test("returns false if COMPARE_METHOD.DIFF comparison is equals", async () => {
        expect.hasAssertions();

        jest
          .spyOn(graphql, "printSchema")
          .mockImplementationOnce(() => "schema");
        jest.spyOn(graphql, "loadSchema").mockImplementationOnce(() => ({}));
        jest
          .spyOn(graphql, "getDocumentLoaders")
          .mockImplementationOnce(() => ({ loaders: [] }));
        jest
          .spyOn(inspector, "diff")
          .mockImplementationOnce(() => Promise.resolve([]));

        await saveSchemaFile("SCHEMA", FOLDER);
        const check = await checkSchemaChanges(
          "schema",
          FOLDER,
          COMPARE_METHOD.DIFF,
        );

        expect(check).toBeFalsy();
      });

      test("returns true if COMPARE_METHOD.DIFF no schema introspection file exists", async () => {
        expect.hasAssertions();

        jest
          .spyOn(graphql, "printSchema")
          .mockImplementationOnce(() => "schema");
        jest.spyOn(graphql, "loadSchema").mockImplementationOnce(() => ({}));
        jest
          .spyOn(graphql, "getDocumentLoaders")
          .mockImplementationOnce(() => ({ loaders: [] }));
        jest
          .spyOn(inspector, "diff")
          .mockImplementationOnce(() => Promise.resolve([]));

        const hasSchemaFile = await fileExists(`${FOLDER}/${SCHEMA_REF}`);
        const check = await checkSchemaChanges(
          "schema",
          FOLDER,
          COMPARE_METHOD.DIFF,
        );

        expect(hasSchemaFile).toBeFalsy();
        expect(check).toBeTruthy();
      });
    });

    describe.each([
      [saveSchemaHash, SCHEMA_HASH_FILE, "saveSchemaHash.hash"],
      [saveSchemaFile, SCHEMA_REF, "saveSchemaFile.schema"],
    ])("%p", (method, reference, expected) => {
      test(`saves reference data into file ${reference}`, async () => {
        expect.hasAssertions();

        jest
          .spyOn(graphql, "printSchema")
          .mockImplementationOnce(() => "schema");

        await method("SCHEMA", FOLDER);

        const file = await fs.readFile(`${FOLDER}/${reference}`, "utf8");

        mockfs.restore(); // see https://github.com/tschaub/mock-fs#caveats

        expect(file).toMatchFile(path.join(EXPECT_PATH, expected));
      });
    });
  });
});
