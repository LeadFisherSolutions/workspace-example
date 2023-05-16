<h1 align="center">Leadfisher workspace</h1>

<h2 align="center">Installation guide</h2>

<p align="center">First, download this workspace</p>

```bash
  git clone https://github.com/LeadFisherSolutions/workspace-example
  rm -rf ./workspace-example/.git ./workspace-example/package-lock.json
  cd ./workspace-example
  ncu -u
  npm i
  nvm install latest
  nvm use latest
```

<p align="center">
Update package json, all with prefix <code>your-</code><br/>
If your nodejs version newer than package.json current add <code>|| your-node-version</code> to it.
</p>

```js
// package.json
{
  "name": "your-package-name",
  "description": "your-package-description",
  "version": "0.0.0",
  "homepage": "https://leadfisher.ru",
  "author": "your-name <your-email>",
  "license": "MIT",
  "packageManager": "npm@9.6.4",
  "type": "commonjs",
  "main": "index.js",
  "types": "index.d.ts",
  "keywords": ["your-package-key-words"],
  "scripts": {
    "test": "node --test && tsc",
    "dev": "node index.js",
    "prettier:fix": "prettier --write \"**/*.{js,ts,json,html,cjs,md,yaml}\"",
    "eslint:fix": "eslint --fix \"**/*.{js,ts}\""
  },
  "files": [
    "/dist",
    "/src",
    "index.d.ts"
  ],
  "browser": {},
  "repository": {
    "type": "git",
    "url": "git+your-package-location"
  },
  "engines": {
    "node": ">= 20"
  },
  "devDependencies": {
    "@types/node": "^18.15.10",
    "eslint": "^8.40.0",
    "eslint-config-leadfisher": "^1.2.0",
    "eslint-config-prettier": "^8.8.0",
    "eslint-plugin-import": "^2.27.5",
    "eslint-plugin-prettier": "^4.2.1",
    "prettier": "^2.8.8",
    "typescript": "^5.0.2"
  }
}
```

<p align="center">At the end of all, add your changes to remote repository</p>

```bash
git init
git remote add origin your-package-location
git branch -M main
git add .
git commit -m "Repository init"
git push origin main
```

<h2 align="center">License & Contributors</h2>

<p align="center">
Copyright © 2023 Leadfisher contributors. workspace-example is MIT licensed.<br/>
Workspace-example is starter-kit for all leadfisher repositories.
</p>
