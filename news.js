// VARS ############################################################

let stage = document.querySelector(".news_wrapper");
let main_div = document.getElementById("main");

let distanceToCenter = 0;
let static_w = main_div.offsetWidth; // Ancho estatico
let dinamic_w = stage.offsetWidth; // Ancho dinamico

let windowWidth = window.innerWidth; // Ancho de la ventana del navegador
let centerX = windowWidth / 2; // Posición horizontal del centro de la pantalla

class news_tag {
    constructor (img, text, date, sel) {
        this.dom = '';
        this.img = img;
        this.text = text;
        this.date = date;
        this.sel = sel; // selector
    }
    deploy (S) {
        let n = document.createElement("div");
        this.dom = n;
        n.classList.toggle ("test");
        n.classList.toggle (this.sel);

        let img_w = document.createElement("div");
        img_w.classList.toggle("img_wrapper");

            let img_tag = document.createElement("img");
            img_tag.setAttribute("src", this.img);
            img_w.appendChild (img_tag);

        let txt_w = document.createElement("div");
        txt_w.classList.toggle("text_wrapper");

            let rsm = document.createElement("p");
            rsm.classList.toggle("resumen");
            rsm.innerText = this.text;
            txt_w.appendChild (rsm);

            let dte = document.createElement("p");
            dte.classList.toggle("fecha");
            dte.innerText = this.date;
            txt_w.appendChild(dte);
        
        n.appendChild(img_w);
        n.appendChild(txt_w);

        S.appendChild(n);

        console.log ("deploy");
    }
}

let noticias_2 = [
    {
      "texto": "La maquina hotpress es vista en operaciones... por ultima vez. Nada hacia presagiar que aquella noche de septiembre seria la ultima en que el regulador de fuerza seria confiable para experimentacion de presicion. Un alumno de pregrado tuvo que migrar a la Universidad del BioBio y luego Valparaiso para no pagar un semestre extra...",
      "fecha": "Algun dia del 2023",
      "imagen": "./noticias_img/cermet.jpg",
      "selector": "n0"
    },
    {
      "texto": "La maquina hotpress es vista en operaciones... por ultima vez. Nada hacia presagiar que aquella noche de septiembre seria la ultima en que el regulador de fuerza seria confiable para experimentacion de presicion. Un alumno de pregrado tuvo que migrar a la Universidad del BioBio y luego Valparaiso para no pagar un semestre extra...",
      "fecha": "Algun dia del 2023",
      "imagen": "./noticias_img/cobre_bolas.jpg",
      "selector": "n1"
    },
    {
      "texto": "La maquina hotpress es vista en operaciones... por ultima vez. Nada hacia presagiar que aquella noche de septiembre seria la ultima en que el regulador de fuerza seria confiable para experimentacion de presicion. Un alumno de pregrado tuvo que migrar a la Universidad del BioBio y luego Valparaiso para no pagar un semestre extra...",
      "fecha": "Algun dia del 2023",
      "imagen": "./noticias_img/hotpress_2.jpg",
      "selector": "n2"
    },
    {
      "texto": "La maquina hotpress es vista en operaciones... por ultima vez. Nada hacia presagiar que aquella noche de septiembre seria la ultima en que el regulador de fuerza seria confiable para experimentacion de presicion. Un alumno de pregrado tuvo que migrar a la Universidad del BioBio y luego Valparaiso para no pagar un semestre extra...",
      "fecha": "Algun dia del 2023",
      "imagen": "./noticias_img/supercobre_3.jpg",
      "selector": "n3"
    },
    {
      "texto": "La maquina hotpress es vista en operaciones... por ultima vez. Nada hacia presagiar que aquella noche de septiembre seria la ultima en que el regulador de fuerza seria confiable para experimentacion de presicion. Un alumno de pregrado tuvo que migrar a la Universidad del BioBio y luego Valparaiso para no pagar un semestre extra...",
      "fecha": "Algun dia del 2023",
      "imagen": "./noticias_img/fin_escoria.jpg",
      "selector": "n4"
    }
];

let news_list = [];

let hover_index = 0;
// let some_hover = false;

// FUNCTS ############################################################

// acceder a los atributos de las noticias
noticias_2.forEach ( noticia => {
    news_list.push (new news_tag (noticia.imagen, noticia.texto, noticia.fecha, noticia.selector))
}); 

// desplegar cada div de noticia
news_list.forEach (n => {
    n.deploy (stage);
})

// acceder al indice del div en hover
news_list.forEach (d => {
    d.dom.addEventListener ('mouseover', () => {
        hover_index = parseInt(d.sel.slice(1));
        // console.log (hover_index);



        for (let i = 0; i<news_list.length; i++) {

            if (i < hover_index -1 && hover_index - 2 >= 0) { // muy izquierda
                news_list[i].dom.style.transform = "perspective(800px) rotatey(55deg)";
                news_list[i].dom.style.width = "14vw";
                news_list[i].dom.style.height = "80%";
                news_list[i].dom.style.fontSize = "0.5vw";

            }
            if (i == hover_index - 1 && hover_index - 1 >= 0) { // izquierda
                news_list[i].dom.style.transform = "perspective(800px) rotatey(30deg)";
                news_list[i].dom.style.width = "17vw";
                news_list[i].dom.style.height = "90%";
                news_list[i].dom.style.fontSize = "0.6vw";

            }
            if (i == hover_index) { // hover
                news_list[i].dom.style.transform = "perspective(800px) rotatey(0deg)";
                news_list[i].dom.style.width = "20vw";
                news_list[i].dom.style.height = "100%";
                news_list[i].dom.style.fontSize = "0.7vw";

            }
            if (i == hover_index + 1 && hover_index + 1 <= news_list.length) { // derecha
                news_list[i].dom.style.transform = "perspective(800px) rotatey(-30deg)";
                news_list[i].dom.style.width = "17vw";
                news_list[i].dom.style.height = "90%";
                news_list[i].dom.style.fontSize = "0.6vw";

            }
            if (i > hover_index + 1 && hover_index + 2 <= news_list.length) { // muy derecha
                news_list[i].dom.style.transform = "perspective(800px) rotatey(-55deg)";
                news_list[i].dom.style.width = "14vw";
                news_list[i].dom.style.height = "80%";
                news_list[i].dom.style.fontSize = "0.5vw";

            }
        }
    })
})


// acceder a la distancia relativa del mouse al centro del stage

stage.addEventListener ('mouseover', (e) => {
    // let divX = stage.offsetLeft; // Posición horizontal del borde izquierdo del div

    
    let mouseX = e.clientX; // Posición horizontal del mouse en el viewport
    

    // Calculamos la distancia relativa en x del mouse al centro de la pantalla
    distanceToCenter = mouseX - centerX;

    console.log('Distancia en x al centro del div:', distanceToCenter);
    console.log('Ancho estatico:', static_w);
    console.log('Ancho dinamico:', dinamic_w);
})



// ################## DEBUG ##################
setInterval(() => {
    static_w = main_div.offsetWidth; // Ancho estatico
    dinamic_w = stage.offsetWidth; // Ancho dinamico

    centerX = windowWidth / 2; // Posición horizontal del centro de la pantalla
    windowWidth = window.innerWidth; // Ancho de la ventana del navegador


    // ajuste div dinamico
    dx = distanceToCenter; // mouse a centro d + i -
    a_ = static_w/2;
    b_ = (dinamic_w - static_w)/2; // stage vs main
    dx2 = (b_ * dx) / a_; 

    stage.setAttribute('style', `margin-left: ${-dx2 * 1.5}px;`);

    
    


})
