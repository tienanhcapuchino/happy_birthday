
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