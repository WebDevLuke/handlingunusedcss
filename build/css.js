//------------------------------------------------------------------------------------------------
// CSS BUILD SCRIPT
//------------------------------------------------------------------------------------------------

/*
Compiles SASS into CSS
*/

const fs = require('fs');
const glob = require('glob');
const path = require('path');
const sass = require('node-sass');

glob('src/scss/*.scss', {}, function(er, files) {
	for(let file in files) {
		const fileName = path.basename(files[file], path.extname(files[file]));
		sass.render({
			file: files[file],
			outputStyle: 'nested',
			precision: 8
		}, function(err, result) {
			if(!err) {
				fs.writeFile(`dist/static/${fileName}.min.css`, result.css, function(err){
					if(err) {
						console.log(err);
						return false;
					}
				});
			}
			else {
				console.log(err)
				return false;
			}
		});
	}
	console.log('\x1b[32m', '💅 Compiled CSS', '\x1b[37m');
});