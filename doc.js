const x = require('pdf-officegen');
const fs = require('fs');
const p = new x.Word();
try {
    p.convertFromPdf(['/pdf/0.pdf'], {}, (err, result) => {
        fs.writeFileSync('all.doc', result);
    })
}
catch (e) {
    consoloe.log(e)
}

