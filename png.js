require('pdf-to-png')({
    input: '/pdf/0.pdf',
    output: '/png/0.png'
}, function() {
    console.log(1);
})
