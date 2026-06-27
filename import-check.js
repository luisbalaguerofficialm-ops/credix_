const fs = require("fs");
const path = require("path");
const glob = require("glob");

const root = process.cwd();
const files = glob.sync("src/**/*.{js,jsx}", { cwd: root, nodir: true });
const errors = [];

function pathExistsCaseSensitive(filePath) {
  const segments = filePath.split(path.sep).filter(Boolean);
  let current = path.isAbsolute(filePath) ? path.parse(filePath).root : "";
  for (const segment of segments) {
    const entries = fs.readdirSync(current || ".", { withFileTypes: true });
    const found = entries.find((e) => e.name === segment);
    if (!found) {
      return false;
    }
    current = path.join(current, segment);
  }
  return true;
}

for (const relativeFile of files) {
  const absoluteFile = path.join(root, relativeFile);
  const content = fs.readFileSync(absoluteFile, "utf8");
  const regex = /import\s+[^'";]+['"](.+?)['"]/g;
  let match;
  while ((match = regex.exec(content))) {
    const imp = match[1];
    if (!imp.startsWith(".") && !imp.startsWith("/")) continue;
    const dir = path.dirname(absoluteFile);
    const target = path.resolve(dir, imp);
    const candidates = [
      target,
      target + ".js",
      target + ".jsx",
      target + ".ts",
      target + ".tsx",
    ];
    const matchPath = candidates.find((c) => fs.existsSync(c));
    if (!matchPath) {
      errors.push({ file: relativeFile, imp, issue: "missing" });
      continue;
    }
    const caseSensitive = pathExistsCaseSensitive(matchPath);
    if (!caseSensitive) {
      errors.push({
        file: relativeFile,
        imp,
        issue: "case mismatch",
        resolved: matchPath,
      });
    }
  }
}

if (errors.length) {
  console.log("FOUND ISSUES:");
  errors.forEach((e) => {
    console.log(
      `${e.file}: ${e.imp} -> ${e.issue}${e.resolved ? ` (${e.resolved})` : ""}`,
    );
  });
  process.exit(1);
}
console.log("NO CASE-SENSITIVE IMPORT ISSUES");
