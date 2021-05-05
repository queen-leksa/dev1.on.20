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

});