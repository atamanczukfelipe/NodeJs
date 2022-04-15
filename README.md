# NodeJs

Simple NodeJs examples that try to cover most of used things and data structures over javascript.

- Modules
- File Manipulation
- HTTP
- events (with EventEmitter)
- NPM Package Manager
- External Package
- Sync/Assync Events
- Typescript Introduction


Obs:

```javascript 
npm init
```
This npm init will create package.json

```javascript 
npm install typescript --D
```
This is for Typescript installation with just Developer Dependency (--D)

```javascript 
npm install ts-node-dev --D
```
For installing typescript node dev dependency package

After this 3 first installations package.json will look like this:

```javascript 
{
  "name": "ts-node",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@types/node": "^17.0.24",
    "ts-node-dev": "^1.1.8",
    "typescript": "^4.6.3"
  }
}
```

```javascript 
 npx tsc app.ts 
```
This is for Ts generate js file, where app.ts is the Ts file that you want

```javascript 
 npx tsc app.ts --target ES6
```
This is for Ts generate js file for ES6 (--target ES6), where app.ts is the Ts file that you want


```javascript 
npm install @types/node
```
This is for node types on ts, install this on the root directory
