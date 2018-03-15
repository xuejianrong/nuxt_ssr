const router = require('koa-router')();
const path = require('path');
const fs = require('fs');

const exports = {};
exports.auto = (app) => {
  // const href = path.join(__dirname, 'controllers')
  // let files = fs.readdirSync(href)
  //
  // let jsFiles = files.filter((f) => {
  //   return f.endsWith('.js')
  // }, files)
  //
  // // 控制器文件
  // for (let f of jsFiles) {
  //   console.log(`import controller from file ${f}...`)
  //   let name = f.substring(0, f.length - 3)
  //   exports[name] = require('./controllers/' + f)
  //   router.use('/server/' + name, exports[name].routes(), exports[name].allowedMethods())
  //   app.use(exports[name].routes(), exports[name].allowedMethods())
  // }

  const href = path.join(__dirname, 'controllers');
  const files = fs.readdirSync(href);
  const setControl = f => {
    console.log(`import controller from file ${f}...`);
    const name = f.substring(0, f.length - (f.indexOf('/index.js') > -1 ? 9 : 3));
    exports[name] = require(`./controllers/${f}`);
    console.log(name);
    router.use(`/server/${name}`, exports[name].routes(), exports[name].allowedMethods());
    app.use(exports[name].routes(), exports[name].allowedMethods());
  };

  files.forEach((file) => {
    const stat = fs.statSync(`${href}/${file}`);

    if (stat.isFile() && file.endsWith('.js')) {
      setControl(file);
    } else if (stat.isDirectory()) {
      const href2 = path.join(href, file);
      const files2 = fs.readdirSync(href2);
      files2.forEach((file2) => {
        if (file2.endsWith('.js')) {
          setControl(`${file}/${file2}`);
        }
      });
    }
  });
};
module.exports = exports;

