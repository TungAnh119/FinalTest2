function numberOneTriangle() {
}
let aNumber = prompt('Nhap vao nguyen A tu 1 den 10')
a = Number(aNumber)
for (let i = 0; i < a; i++) {
    for (j = 0; j <= i; j++) {
        document.writeln(" * ")
    }
    document.writeln("<br/>")
}

