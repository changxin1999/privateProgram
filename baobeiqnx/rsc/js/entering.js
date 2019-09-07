$(function () {
    function showImg(input) {
        console.log(input);
        var file = input.files[0];
        var reader = new FileReader()
        // 图片读取成功回调函数
        reader.onload = function (e) {
            document.getElementById('upload').src = e.target.result
        }
        reader.readAsDataURL(file)
    }

    let uploadInputList = document.querySelector('.upload-input')

    // console.log(uploadInputList);


    function ProcessFile(e) {
        console.log(e);
        var file = document.getElementById('file').files[0];
        if (file) {
            var reader = new FileReader();
            reader.onload = function (event) {
                var txt = event.target.result;

                var img = document.createElement("img");
                img.src = txt;//将图片base64字符串赋值给img的src
                // console.log(txt);
                document.getElementById("result").appendChild(img);
            };
        }
        reader.readAsDataURL(file);
    }
    function contentLoaded() {
        console.log(111);
        document.querySelector('upload-input').addEventListener('change',
            ProcessFile, false);
    }
    window.addEventListener("DOMContentLoaded", contentLoaded, false);
});
