
var app = new Vue({
    el: '#app',
    data: {
        galeria: [
            {
                id: 01,
                titulo: "Cumulonimbus in a colorful sunset",
                text: "Volcán Santa María about 75km away from my location Sierra de Los Cuchumatanes 3000m above the sea level in Guatemala.",
                link: "img/sample-1.jpg"
            },
            {
                id: 02,
                titulo: "Volcan en erupción",
                text: "Volcan de fuego in Guatemala erupted today and its probably an historical eruption. ",
                link: "img/sample-2.jpg"
            },
            {
                id: 03,
                titulo: "The Last Super Moon of 2017.",
                text: "Taken from Puerto Madryn, Chubut, Argentina. During the Moonrise I was able to see how the atmosphere affected moonlight, the Moon inside the beautiful colors of the earth's shadow. ",
                link: "img/sample-3.jpg"
            },
            {
                id: 04,
                titulo: "Erupción Volcán de Fuego debajo de la Vía Láctea.",
                text: "Mientras todos duermen otros escalan el Acatenando para verle de cerca y yo desde abajo lo capturo en toda su magnificencia.",
                link: "img/sample-4.jpg"
            },
            {
                id: 05,
                titulo: "Planetary Night",
                text: "After 3 days of really bad weather, I was finally able to see the stars.",
                link: "img/sample-5.jpg"
            },
            {
                id: 06,
                titulo: "Mi sitio sagrado",
                text: "Sentado en cedas nocturnas y viento del norte una galaxia que se asoma sobre mi sitio sagrado en donde nace el agua, mi charquito de agua pura en donde las gotas de luz de Júpiter rozan mis ojos a ti mi lago querido, cráter volcánico, mi sitio sagrado. ",
                link: "img/sample-6.jpg"
            },
            {
                id: 07,
                titulo: "Eclipse",
                text: "Una aventura este Eclipse, fueron meses de producción, un material que será usado en el documental El camino eterno y en el domo del Planetario Ciudad de La Plata (primer planetario en producir shows narrativos en latinoamérica y me enorgullezco de ser parte del equipo de producción como astrofotógrafo).",
                link: "img/sample-7.jpg"
            },
            {
                id: 08,
                titulo: 'In the land of fire.',
                text: "Volcán de Fuego, is an active stratovolcano in Guatemala, yesterday Jan 25th 2017 activity was spectacular. Please read more about the volcano ",
                link: 'img/sample-8.jpg'
            },
            {
                id: 09,
                titulo: 'Atmósfera del Edén',
                text: "Volcán de Fuego de Guatemala en fuerte actividad durante la tarde y las primeras horas del anochecer el 25 de Enero 2017.",
                link: 'img/sample-9.jpg'
            },
        ],
        info: {}
    },
    methods: {
        loader () {
            $(".lds-grid").hide(() => {
                $(this).remove();
            });
            $(".card").show();
        },
        detail (r)  {
            this.info = r;
            console.log(r.titulo);
        }
    },
    mounted () {
        $('.modal').modal();
        $('.sidenav').sidenav();
        this.loader();

        $().offsetScroller.defaults.offsetPixels = 92;

        $('#menu a').offsetScroller();

        $('#mobile a').offsetScroller();
      
        $().offsetScroller.scrollToHash(window.location.hash);

        $(document).bind("contextmenu",(e) => {
            return false;
        });
     
    }
  });