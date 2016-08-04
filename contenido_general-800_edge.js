/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'rec_footer',
                            type: 'image',
                            rect: ['-1px', '443px', '800px', '23px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'imagenes/rec_footer.png','0px','0px']
                        },
                        {
                            id: 'cabezote_illus',
                            type: 'image',
                            rect: ['350px', '0px', '449px', '90px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'imagenes/cabezote_illus.png','0px','0px']
                        },
                        {
                            id: 'Rectangle6',
                            type: 'rect',
                            rect: ['72px', '88px', '141px', '254px', 'auto', 'auto'],
                            fill: ["rgba(211,23,68,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'rec_cabecera1',
                            type: 'image',
                            rect: ['-7px', '0px', '389px', '63px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'imagenes/rec_cabecera1.svg','0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['467px', '170px', '233px', '245px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\"> </span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">​</span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "13px", "", "none"]
                        },
                        {
                            id: 'image1',
                            type: 'image',
                            rect: ['253px', '125px', '192px', '290px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"image1.png",'0px','0px']
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['467px', '125px', '221px', '31px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 0, 0);\">Lorem ipsum</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'plantilla',
                            symbolName: 'plantilla',
                            type: 'rect',
                            rect: ['-6', '0', '806', '466', 'auto', 'auto']
                        },
                        {
                            id: 'rec_menu',
                            type: 'image',
                            rect: ['68px', '58px', '731px', '39px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'imagenes/rec_menu.png','0px','0px']
                        },
                        {
                            id: 'Text15',
                            type: 'text',
                            rect: ['126px', '99px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​INICIO</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text17',
                            type: 'text',
                            rect: ['113px', '131px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​OBJETIVOS</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text18',
                            type: 'text',
                            rect: ['123px', '162px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​TEMA 1</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text14',
                            type: 'text',
                            rect: ['126px', '73px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​MENU</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'ic_menu_copy_2',
                            type: 'image',
                            rect: ['105px', '74px', '14px', '10px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'imagenes/ic_menu%20copy%202.svg','0px','0px']
                        },
                        {
                            id: 'ic_home_black_24px_copy_22',
                            type: 'image',
                            rect: ['106px', '97px', '15px', '12px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",'imagenes/ic_home_black_24px%20copy%202.svg','0px','0px']
                        },
                        {
                            id: 'Text19',
                            type: 'text',
                            rect: ['123px', '194px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​TEMA 2</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text20',
                            type: 'text',
                            rect: ['123px', '226px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​TEMA 3</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text21',
                            type: 'text',
                            rect: ['125px', '258px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​TEMA4</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text22',
                            type: 'text',
                            rect: ['115px', '290px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">ACTIVIDAD</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text23',
                            type: 'text',
                            rect: ['129px', '322px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​TEST</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [10, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text25',
                            type: 'text',
                            rect: ['156px', '23px', 'auto', 'auto', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​​Exportación de Servicios</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [16, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "nowrap"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text26',
                            type: 'text',
                            rect: ['380px', '23px', '402px', '21px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Módulo 1: Nociones básicas de los servicios y su importancia</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text27',
                            type: 'text',
                            rect: ['362px', '67px', '13.9%', '3%', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Introducción</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [14, "px"], "rgba(255,255,255,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'logo_tm',
                            type: 'image',
                            rect: ['-76px', '-17px', '288px', '92px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"logo_tm.svg",'0px','0px'],
                            transform: [[],[],[],['0.33','0.33']]
                        },
                        {
                            id: 'actividad',
                            type: 'rect',
                            rect: ['72px', '280px', '141px', '30px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'test',
                            type: 'rect',
                            rect: ['72px', '311px', '141px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            sizeRange: ['','800px','',''],
                            overflow: 'visible',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: true,
                    labels: {
                        "1": 1250
                    },
                    data: [
                        [
                            "eid1623",
                            "opacity",
                            0,
                            1000,
                            "easeOutBack",
                            "${image1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1624",
                            "left",
                            250,
                            1000,
                            "easeOutBack",
                            "${Text3}",
                            '832px',
                            '467px'
                        ],
                        [
                            "eid1625",
                            "opacity",
                            250,
                            1000,
                            "easeOutBack",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1622",
                            "left",
                            0,
                            1000,
                            "easeOutBack",
                            "${image1}",
                            '808px',
                            '253px'
                        ],
                        [
                            "eid1626",
                            "left",
                            250,
                            1000,
                            "easeOutBack",
                            "${Text}",
                            '832px',
                            '467px'
                        ],
                        [
                            "eid1627",
                            "opacity",
                            250,
                            1000,
                            "easeOutBack",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "plantilla": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['699px', '98px', '85px', '24px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['0.05', '0.78']],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Salir</p>',
                            rect: ['738px', '105px', 'auto', 'auto', 'auto', 'auto'],
                            id: 'Text6',
                            display: 'none',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            textStyle: ['', '', '', '', 'none'],
                            transform: [[], [], [], ['0.05']]
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['699px', '124px', '85px', '24px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['0.05', '0.78']],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            display: 'none',
                            text: '<p style=\"margin: 0px;\">​Biblioteca</p>',
                            rect: ['725px', '130px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['699px', '150px', '85px', '24px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['0.05', '0.78']],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            id: 'Text10',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            display: 'none',
                            text: '<p style=\"margin: 0px;\">​Glosario</p>',
                            rect: ['729px', '156px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            type: 'rect',
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['699px', '176px', '85px', '24px', 'auto', 'auto'],
                            display: 'none',
                            transform: [[], [], [], ['0.05', '0.78']],
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            id: 'Text13',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            display: 'none',
                            text: '<p style=\"margin: 0px;\">​Ayuda</p>',
                            rect: ['734px', '181px', 'auto', 'auto', 'auto', 'auto'],
                            align: 'left'
                        },
                        {
                            rect: ['772px', '84px', '34px', '361px', 'auto', 'auto'],
                            id: 'rec_izq',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'imagenes/rec_izq.png', '0px', '0px']
                        },
                        {
                            rect: ['777px', '174px', '27px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            type: 'image',
                            id: 'icayudaact',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/icayudaact.svg', '0px', '0px']
                        },
                        {
                            rect: ['786px', '179px', '9px', '18px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            type: 'image',
                            id: 'icayuda',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/icayuda.svg', '0px', '0px']
                        },
                        {
                            rect: ['777px', '148px', '27px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            type: 'image',
                            id: 'Group_4',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/Group%204.svg', '0px', '0px']
                        },
                        {
                            rect: ['783px', '154px', '16px', '16px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            type: 'image',
                            id: 'glosario',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/glosario.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['780px', '125px', '21px', '21px', 'auto', 'auto'],
                            display: 'none',
                            id: 'ic-biblioteca-act',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic-biblioteca-act.svg', '0px', '0px']
                        },
                        {
                            rect: ['782px', '128px', '16px', '16px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            type: 'image',
                            id: 'ic_library_books_black_24px2',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_library_books_black_24px.svg', '0px', '0px']
                        },
                        {
                            rect: ['778px', '97px', '25px', '25px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            type: 'image',
                            id: 'ic_salir_copy',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_salir%20copy.svg', '0px', '0px']
                        },
                        {
                            rect: ['786px', '102px', '10px', '13px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            type: 'image',
                            id: 'salir',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/salir.svg', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['352px', '443px', '67px', '23px', 'auto', 'auto'],
                            fill: ['rgba(60,214,225,1)']
                        },
                        {
                            type: 'rect',
                            id: 'Rectangle7Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['420px', '443px', '67px', '23px', 'auto', 'auto'],
                            fill: ['rgba(60,214,225,1)']
                        },
                        {
                            rect: ['370px', '449px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text',
                            text: '<p style=\"margin: 0px;\">​Anterior</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            type: 'image',
                            fi: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'ic_chevron_right_black_48px',
                            filter: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['466px', '445px', '21px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_chevron_right_black_48px.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['-180'], [0, 0, 0], [1, 1, 1]],
                            fi: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            filter: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'ic_chevron_right_black_48pxCopy',
                            rect: ['352px', '445px', '21px', '21px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_chevron_right_black_48px.svg', '0px', '0px']
                        },
                        {
                            rect: ['428px', '449px', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text2',
                            text: '<p style=\"margin: 0px;\">​Siguiente</p>',
                            textStyle: ['', '', '', '', 'none'],
                            type: 'text'
                        },
                        {
                            type: 'rect',
                            rect: ['352px', '443px', '67px', '23px', 'auto', 'auto'],
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(60,214,225,0.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['420px', '443px', '67px', '23px', 'auto', 'auto'],
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(60,214,225,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '806px', '466px']
                        }
                    }
                },
                timeline: {
                    duration: 7368,
                    autoPlay: false,
                    labels: {
                        "0": 0,
                        "salir": 1000,
                        "bibliografia": 2250,
                        "glosario": 3250,
                        "ayuda": 4250,
                        "1": 5250,
                        "2": 5750,
                        "3": 6250,
                        "4": 6750,
                        "5": 7295,
                        "6": 7354
                    },
                    data: [
                        [
                            "eid79",
                            "-webkit-transform-origin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4868",
                            "-moz-transform-origin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4869",
                            "-ms-transform-origin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4870",
                            "msTransformOrigin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4871",
                            "-o-transform-origin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4872",
                            "transform-origin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid37",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${glosario}",
                            'block',
                            'none'
                        ],
                        [
                            "eid38",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${glosario}",
                            'none',
                            'block'
                        ],
                        [
                            "eid56",
                            "display",
                            6250,
                            0,
                            "easeOutBack",
                            "${glosario}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
                            "display",
                            6699,
                            0,
                            "easeOutBack",
                            "${glosario}",
                            'none',
                            'block'
                        ],
                        [
                            "eid11",
                            "scaleX",
                            1039,
                            412,
                            "easeOutBack",
                            "${Text6}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid779",
                            "-webkit-transform-origin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            [135,50],
                            [135,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4873",
                            "-moz-transform-origin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            [135,50],
                            [135,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4874",
                            "-ms-transform-origin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            [135,50],
                            [135,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4875",
                            "msTransformOrigin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            [135,50],
                            [135,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4876",
                            "-o-transform-origin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            [135,50],
                            [135,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4877",
                            "transform-origin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            [135,50],
                            [135,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid14",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${ic-biblioteca-act}",
                            'none',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${ic-biblioteca-act}",
                            'none',
                            'block'
                        ],
                        [
                            "eid23",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${ic-biblioteca-act}",
                            'block',
                            'none'
                        ],
                        [
                            "eid53",
                            "display",
                            5750,
                            0,
                            "easeOutBack",
                            "${ic-biblioteca-act}",
                            'none',
                            'block'
                        ],
                        [
                            "eid54",
                            "display",
                            6205,
                            0,
                            "easeOutBack",
                            "${ic-biblioteca-act}",
                            'block',
                            'none'
                        ],
                        [
                            "eid65",
                            "scaleX",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            '0.05',
                            '0.05'
                        ],
                        [
                            "eid7",
                            "scaleX",
                            1000,
                            500,
                            "easeOutBack",
                            "${Rectangle2}",
                            '0.05',
                            '0.78'
                        ],
                        [
                            "eid123",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid124",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid21",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid67",
                            "scaleX",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            '0.05',
                            '0.05'
                        ],
                        [
                            "eid24",
                            "scaleX",
                            3250,
                            500,
                            "easeOutBack",
                            "${Rectangle4}",
                            '0.05',
                            '0.78'
                        ],
                        [
                            "eid42",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${icayudaact}",
                            'none',
                            'none'
                        ],
                        [
                            "eid43",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${icayudaact}",
                            'none',
                            'block'
                        ],
                        [
                            "eid44",
                            "display",
                            5201,
                            0,
                            "easeOutBack",
                            "${icayudaact}",
                            'block',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            6750,
                            0,
                            "easeOutBack",
                            "${icayudaact}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            7250,
                            0,
                            "easeOutBack",
                            "${icayudaact}",
                            'block',
                            'none'
                        ],
                        [
                            "eid68",
                            "scaleX",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            '0.05',
                            '0.05'
                        ],
                        [
                            "eid40",
                            "scaleX",
                            4250,
                            500,
                            "easeOutBack",
                            "${Rectangle5}",
                            '0.05',
                            '0.78'
                        ],
                        [
                            "eid28",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Group_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid29",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${Group_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid30",
                            "display",
                            4192,
                            0,
                            "easeOutBack",
                            "${Group_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid57",
                            "display",
                            6250,
                            0,
                            "easeOutBack",
                            "${Group_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid59",
                            "display",
                            6699,
                            0,
                            "easeOutBack",
                            "${Group_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${ic_library_books_black_24px2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid36",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${ic_library_books_black_24px2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            5750,
                            0,
                            "easeOutBack",
                            "${ic_library_books_black_24px2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid55",
                            "display",
                            6205,
                            0,
                            "easeOutBack",
                            "${ic_library_books_black_24px2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid25",
                            "scaleX",
                            3290,
                            412,
                            "easeOutBack",
                            "${Text10}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid125",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid126",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "display",
                            4192,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid41",
                            "scaleX",
                            4295,
                            412,
                            "easeOutBack",
                            "${Text13}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid456",
                            "background-color",
                            7354,
                            14,
                            "easeOutBack",
                            "${Rectangle7Copy}",
                            'rgba(60,214,225,1)',
                            'rgba(23,119,124,1.00)'
                        ],
                        [
                            "eid121",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid122",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${icayuda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid45",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${icayuda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid61",
                            "display",
                            6750,
                            0,
                            "easeOutBack",
                            "${icayuda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid64",
                            "display",
                            7250,
                            0,
                            "easeOutBack",
                            "${icayuda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid33",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${salir}",
                            'block',
                            'none'
                        ],
                        [
                            "eid34",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${salir}",
                            'none',
                            'block'
                        ],
                        [
                            "eid47",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${salir}",
                            'block',
                            'none'
                        ],
                        [
                            "eid48",
                            "display",
                            5699,
                            0,
                            "easeOutBack",
                            "${salir}",
                            'none',
                            'block'
                        ],
                        [
                            "eid775",
                            "-webkit-transform-origin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            [169,50],
                            [169,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4878",
                            "-moz-transform-origin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            [169,50],
                            [169,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4879",
                            "-ms-transform-origin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            [169,50],
                            [169,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4880",
                            "msTransformOrigin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            [169,50],
                            [169,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4881",
                            "-o-transform-origin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            [169,50],
                            [169,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4882",
                            "transform-origin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            [169,50],
                            [169,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid452",
                            "background-color",
                            7295,
                            10,
                            "easeOutBack",
                            "${Rectangle7}",
                            'rgba(60,214,225,1)',
                            'rgba(23,119,124,1.00)'
                        ],
                        [
                            "eid454",
                            "background-color",
                            7305,
                            25,
                            "easeOutBack",
                            "${Rectangle7}",
                            'rgba(23,119,124,1)',
                            'rgba(60,214,225,1.00)'
                        ],
                        [
                            "eid12",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${ic_salir_copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${ic_salir_copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid20",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${ic_salir_copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid46",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${ic_salir_copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid49",
                            "display",
                            5699,
                            0,
                            "easeOutBack",
                            "${ic_salir_copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid75",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid76",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid51",
                            "display",
                            5201,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid66",
                            "scaleX",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            '0.05',
                            '0.05'
                        ],
                        [
                            "eid16",
                            "scaleX",
                            2250,
                            500,
                            "easeOutBack",
                            "${Rectangle3}",
                            '0.05',
                            '0.78'
                        ],
                        [
                            "eid777",
                            "-webkit-transform-origin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            [149,50],
                            [149,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4883",
                            "-moz-transform-origin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            [149,50],
                            [149,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4884",
                            "-ms-transform-origin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            [149,50],
                            [149,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4885",
                            "msTransformOrigin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            [149,50],
                            [149,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4886",
                            "-o-transform-origin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            [149,50],
                            [149,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4887",
                            "transform-origin",
                            3250,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            [149,50],
                            [149,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid127",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid128",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid50",
                            "display",
                            5201,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "scaleX",
                            2299,
                            412,
                            "easeOutBack",
                            "${Text9}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid78",
                            "-webkit-transform-origin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4888",
                            "-moz-transform-origin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4889",
                            "-ms-transform-origin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4890",
                            "msTransformOrigin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4891",
                            "-o-transform-origin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4892",
                            "transform-origin",
                            2250,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid781",
                            "-webkit-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            [246,50],
                            [246,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4893",
                            "-moz-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            [246,50],
                            [246,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4894",
                            "-ms-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            [246,50],
                            [246,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4895",
                            "msTransformOrigin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            [246,50],
                            [246,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4896",
                            "-o-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            [246,50],
                            [246,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4897",
                            "transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            [246,50],
                            [246,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid69",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid70",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid19",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid80",
                            "-webkit-transform-origin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4898",
                            "-moz-transform-origin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4899",
                            "-ms-transform-origin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4900",
                            "msTransformOrigin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4901",
                            "-o-transform-origin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4902",
                            "transform-origin",
                            4250,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid77",
                            "-webkit-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4903",
                            "-moz-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4904",
                            "-ms-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4905",
                            "msTransformOrigin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4906",
                            "-o-transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid4907",
                            "transform-origin",
                            1000,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            [100,50],
                            [100,50],
                            {valueTemplate: '@@0@@% @@1@@%'}
                        ],
                        [
                            "eid73",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid74",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid32",
                            "display",
                            4192,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid71",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid72",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid22",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("contenido_general-800_edgeActions.js");
})("EDGE-772579");
