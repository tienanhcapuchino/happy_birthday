
var k = 0;
function showbutton() {
    if (k % 2 == 0) {
        document.getElementById('anhchinhhap').style.display = 'block';
        k++;
    } else {
        document.getElementById('anhchinhhap').style.display = 'none';
        k++;
    }
}
function showQua() {
    if (k % 2 == 0) {
        document.getElementById('v1').style.display = 'block';
        k++;
    } else {
        document.getElementById('v1').style.display = 'none';
        k++;
    }
}
function showQua2() {
    if (k % 2 == 0) {
        document.getElementById('v2').style.display = 'block';
        k++;
    } else {
        document.getElementById('v2').style.display = 'none';
        k++;
    }
}
