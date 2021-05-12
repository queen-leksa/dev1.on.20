window.addEventListener("load", () => {
    
    let content = document.createElement("div");
    content.className = "miniatures";
    document.body.appendChild(content);

    /* БЫЛО РАНЬШЕ! */
    // images.forEach(img => {
    //     let card = document.createElement("div");
    //     card.className = "mini";
    //     card.setAttribute("data-src", img);
    //     card.style.backgroundImage = `url(${img})`;
    // });

    let html = images.map(img => `<div class="mini" data-src=${img} style="background-image: url(${img})"></div>`);
    content.innerHTML = html.join("");

    let pics = document.querySelectorAll(".mini");
    let box = document.querySelector(".lightbox>.box");


    pics.forEach(pic => {
        pic.addEventListener("click", e => {
            document.body.classList.add("show-box");
            box.style.backgroundImage = `url(${pic.getAttribute("data-src")})`;
            box.setAttribute("data-img", pic.getAttribute("data-src"));
        });
    });

    const closeBox = () => {
        document.body.classList.remove("show-box");
    };

    const showNext = () => {
        let src = box.getAttribute("data-img");
        pics.forEach((img, i) => {
            let newPic;
            if (i !== pics.length - 1) {
                newPic = pics[i+1];
            } else {
                newPic = pics[0];
            }
            // let newPic = i !== pics.length - 1 ? pics[i + 1] : pics[0];
            if (src === img.getAttribute("data-src")) {
                box.style.backgroundImage = `url(${newPic.getAttribute("data-src")})`;
                box.setAttribute("data-img", newPic.getAttribute("data-src"));
            }
        });
    }
    const showPrev = () => {
        let src = box.getAttribute("data-img");
        pics.forEach((img, i) => {
            if (src === img.getAttribute("data-src")) {
                box.style.backgroundImage = `url(${pics[i-1].getAttribute("data-src")})`;
                box.setAttribute("data-img", pics[i-1].getAttribute("data-src"));
            }
        });
    }

    document.querySelector(".cross").addEventListener("click", closeBox);
    document.querySelector(".arrow.next").addEventListener("click", showNext);
    document.querySelector(".arrow.prev").addEventListener("click", showPrev);
    document.body.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            e.preventDefault(); // остановить событие по умолчанию
            closeBox();
        }
    });
});