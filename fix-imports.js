const fs = require("fs")
const path = require("path")

const directory = path.resolve(__dirname, "src")

function replaceImports (dir)
{
  const files = fs.readdirSync(dir)

  files.forEach((file) =>
  {
    const fullPath = path.join(dir, file)
    if (fs.statSync(fullPath).isDirectory())
    {
      replaceImports(fullPath)
    } else if (file.endsWith(".ts") || file.endsWith(".tsx"))
    {
      let content = fs.readFileSync(fullPath, "utf8")
      const updatedContent = content.replace(/from "s\//g, 'from "@/')
      if (content !== updatedContent)
      {
        fs.writeFileSync(fullPath, updatedContent, "utf8")
        console.log(`Updated imports in: ${ fullPath }`)
      }
    }
  })
}

replaceImports(directory)
