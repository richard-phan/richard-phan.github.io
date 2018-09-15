
function genText(text, element, delay, callback) {
    var i = 0;
    var txt = text;
    var speed = 50;

    setTimeout(typeAnimation, delay);

    document.getElementById(element).innerHTML = "";

    function typeAnimation() {
        if (i < txt.length) {
            document.getElementById(element).innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeAnimation, speed);
        }
        else {
            if (callback != null) {
                callback();
            }
        }
    }
}

function matrixText(txt, element, callback) {
    setTimeout(function() {
        var text = txt;
        var elem = document.getElementById(element);
        //var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
        //var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}"
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        var final = "";

        function generate(i, final) {
            setTimeout(function() {
                elem.innerHTML = final;
                if (callback != null && final == text) {
                    callback();
                }
            }, i * 70);
        }

        for (var i = final.length; i < text.length + 1; i++) {
            final = text.substring(0, i);
            for (var j = i; j < text.length; j++) {
                final += possible.charAt(Math.floor(Math.random() * possible.length));
            }
            generate(i, final);
            final = "";
        }
    }, 500);
}

function onStart() {
    matrixText("Richard Phan", "name-banner", function() {
        genText("software engineer and electronics enthusiast", "desc-banner", 500)
    });
}

window.addEventListener('load', function() {
    onStart();
})
