let cannon = document.getElementById("cannon");
let bullet = document.getElementById("bullet");
let target = document.getElementById("target");
let isFlying = false;

document.addEventListener("keydown", function(event) {
    if (event.code === "Space" && !isFlying) {
        isFlying = true;
        bullet.style.display = "block";
        bullet.style.left = cannon.offsetLeft + cannon.offsetWidth + "px";
        bullet.style.top = cannon.offsetTop + cannon.offsetHeight / 2 - bullet.offsetHeight / 2 + "px";

        let bulletInterval = setInterval(function() {
            bullet.style.left = parseInt(bullet.style.left) + 5 + "px";

            if (parseInt(bullet.style.left) + bullet.offsetWidth >= target.offsetLeft &&
                parseInt(bullet.style.top) + bullet.offsetHeight >= target.offsetTop &&
                parseInt(bullet.style.top) <= target.offsetTop + target.offsetHeight) {
                clearInterval(bulletInterval);
                bullet.style.display = "none";
                isFlying = false;
                alert("Попал!");
            } else if (parseInt(bullet.style.left) > window.innerWidth) {
                clearInterval(bulletInterval);
                bullet.style.display = "none";
                isFlying = false;
            }
        }, 16);
    }
});