var fs = require('node:fs');

var bent = require('bent');
var ttf2woff2 = require('ttf2woff2');
const getBuffer = bent('buffer');

var sources = [
    'https://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=pcl/urwfonts/URWClassico-Bold.ttf;h=e2706d8edc7c0f160be22ecc59230754cc0e52ce;hb=6f1da3c990ab7de4c3218bf8beff21f19449b284',
    'https://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=pcl/urwfonts/URWClassico-BoldItalic.ttf;h=8185b087859c664259c250f0412251b973071376;hb=6f1da3c990ab7de4c3218bf8beff21f19449b284',
    'https://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=pcl/urwfonts/URWClassico-Italic.ttf;h=76ac291dc1a4bf4122f40be5371ead294ff2b312;hb=6f1da3c990ab7de4c3218bf8beff21f19449b284',
    'https://git.ghostscript.com/?p=ghostpdl.git;a=blob;f=pcl/urwfonts/URWClassico-Regular.ttf;h=0f87da6a858ed595c7602ebee5a9f7250c564a24;hb=6f1da3c990ab7de4c3218bf8beff21f19449b284'
];

var files = [
    './files/URWClassico-Bold.ttf',
    './files/URWClassico-BoldItalic.ttf',
    './files/URWClassico-Italic.ttf',
    './files/URWClassico-Regular.ttf'
];


(async function main() {
for (let i = 0; i < sources.length; i++) {
    let f = files[i];
    let s = sources[i];
    
    let ttf = await getBuffer(s);

    fs.writeFileSync(f, ttf)
    fs.writeFileSync(f.replace("ttf", "woff2"), ttf2woff2(ttf));
}
})();