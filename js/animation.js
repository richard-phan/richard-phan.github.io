function initText(element, symbols) {
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (symbols) {
        possible += "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
    }
    var elem = document.getElementById(element);
    var len = elem.innerHTML.length;
    elem.innerHTML = "";

    for (var i = 0; i < len; i++) {
        elem.innerHTML += possible.charAt(Math.floor(Math.random() * possible.length));
    }
}

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

function matrixText(txt, element, delay, symbols, callback) {
    if (document.getElementById(element).innerHTML == txt) {
        return;
    }

    setTimeout(function() {
        var text = txt;
        var elem = document.getElementById(element);
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (symbols) {
            possible += "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
        }

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
    }, delay);
}

function onStart() {
    initText("name-banner", false);
    matrixText("Richard Phan", "name-banner", 500, false, function() {
        genText("software engineer and electronics enthusiast", "desc-banner", 500)
    });

    initText("software-header", true);
    document.getElementById("software").addEventListener("mouseover", function() {
        matrixText("Software", "software-header", 0, true, null);
    })

    initText("projects-header", true);
    document.getElementById("projects").addEventListener("mouseover", function() {
        matrixText("Projects", "projects-header", 0, true, null);
    })
}

window.addEventListener("load", function() {
    onStart();
})
