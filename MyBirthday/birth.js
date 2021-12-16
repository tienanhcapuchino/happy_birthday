
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
    if (k % 2 == 1) {
        document.getElementById('qua1').innerHTML = 'Bấm vào đây dể lấy quà tiếp nào!';  
        document.getElementById('v1').style.display = 'none';
        k++;
    } else { 
        document.getElementById('qua1').innerHTML = 'Bấm vào dể ẩn đi nhé!';
        document.getElementById('v1').style.display = 'block';
        k++;
    }
}
function showQua2() {
    if (k % 2 == 1) {
        document.getElementById('qua2').innerHTML = 'Ơ vẫn còn nè, bấm tiếp đi!';  
        document.getElementById('v2').style.display = 'none';
        k++;
    } else { 
        document.getElementById('qua2').innerHTML = 'Bấm vào dể ẩn đi nhé!';
        document.getElementById('v2').style.display = 'block';
        k++;
    }
}
