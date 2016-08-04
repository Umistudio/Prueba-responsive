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
                            id: 'Text',
                            type: 'text',
                            rect: ['474px', '179px', '215px', '255px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\"> </span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">​</span></p><p style=\"margin: 0px;\"><span style=\"color: rgb(0, 0, 0);\">​</span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. <span style=\"color: rgb(0, 0, 0);\"></span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text3',
                            type: 'text',
                            rect: ['473px', '148px', '221px', '31px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​<span style=\"color: rgb(0, 0, 0);\">Lorem ipsum</span></p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1.00)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['213px', '444px', '478px', '53px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.&nbsp;</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1.00)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'image22',
                            type: 'image',
                            rect: ['213px', '148px', '245px', '281px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"image2.jpg",'0px','0px']
                        },
                        {
                            id: 'plantilla',
                            symbolName: 'plantilla',
                            type: 'rect',
                            rect: ['-1px', '-3px', '905', '564', 'auto', 'auto']
                        },
                        {
                            id: 'test',
                            type: 'rect',
                            rect: ['41px', '344px', '156px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"]
                        },
                        {
                            id: 'actividad',
                            type: 'rect',
                            rect: ['41px', '311px', '156px', '31px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(192,192,192,0)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '100%', 'auto', 'auto'],
                            sizeRange: ['','768px','',''],
                            overflow: 'hidden',
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
                            "eid1210",
                            "opacity",
                            250,
                            1000,
                            "easeOutBack",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1213",
                            "left",
                            250,
                            1000,
                            "easeOutBack",
                            "${Text}",
                            '1045px',
                            '474px'
                        ],
                        [
                            "eid1211",
                            "left",
                            250,
                            1000,
                            "easeOutBack",
                            "${Text3}",
                            '1044px',
                            '473px'
                        ],
                        [
                            "eid1208",
                            "opacity",
                            0,
                            1000,
                            "easeOutBack",
                            "${image22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1207",
                            "left",
                            0,
                            1000,
                            "easeOutBack",
                            "${image22}",
                            '774px',
                            '213px'
                        ],
                        [
                            "eid1209",
                            "left",
                            250,
                            1000,
                            "easeOutBack",
                            "${Text2}",
                            '784px',
                            '213px'
                        ],
                        [
                            "eid1212",
                            "opacity",
                            250,
                            1000,
                            "easeOutBack",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1214",
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
                            rect: ['42px', '95px', '156px', '295px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(211,23,68,1.00)']
                        },
                        {
                            rect: ['358px', '1px', '547px', '109px', 'auto', 'auto'],
                            id: 'cabezote_illus',
                            opacity: '1',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'imagenes/cabezote_illus.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rec_menu',
                            rect: ['38px', '72px', '732px', '46px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/rec_menu.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rec_cabecera1',
                            rect: ['0px', '4px', '426px', '76px', 'auto', 'auto'],
                            transform: [[], [], [], ['1', '1.1']],
                            fill: ['rgba(0,0,0,0)', 'imagenes/rec_cabecera1.svg', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.05', '0.9']],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'Rectangle5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['652px', '195px', '85px', '24px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            id: 'Text13',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['687px', '201px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Ayuda</p>'
                        },
                        {
                            transform: [[], [], [], ['0.05', '0.9']],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'Rectangle4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['652px', '169px', '85px', '24px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            id: 'Text10',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['682px', '175px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Glosario</p>'
                        },
                        {
                            transform: [[], [], [], ['0.05', '0.9']],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['651px', '144px', '85px', '24px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            id: 'Text9',
                            textStyle: ['', '', '', '', 'none'],
                            rect: ['677px', '150px', 'auto', 'auto', 'auto', 'auto'],
                            display: 'none',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            text: '<p style=\"margin: 0px;\">​Biblioteca</p>'
                        },
                        {
                            transform: [[], [], [], ['0.05', '0.9']],
                            borderRadius: ['2px', '2px', '2px', '2px 2px'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['652px', '116px', '85px', '24px', 'auto', 'auto'],
                            display: 'none',
                            type: 'rect',
                            fill: ['rgba(192,192,192,1)']
                        },
                        {
                            type: 'text',
                            align: 'left',
                            text: '<p style=\"margin: 0px;\">​Salir</p>',
                            rect: ['691px', '123px', 'auto', 'auto', 'auto', 'auto'],
                            transform: [[], [], [], ['0.05']],
                            display: 'none',
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text6'
                        },
                        {
                            type: 'image',
                            id: 'rec_izq',
                            rect: ['729px', '109px', '41px', '433px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/rec_izq.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'rec_footer',
                            rect: ['1px', '536px', '768px', '27px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/rec_footer.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'logo_tm',
                            rect: ['23px', '19px', '113px', '36px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logo_tm.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['102px', '133px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​INICIO</p>',
                            id: 'Text15',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['89px', '165px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​OBJETIVOS</p>',
                            id: 'Text17',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['99px', '196px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​TEMA 1</p>',
                            id: 'Text18',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['103px', '91px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​MENU</p>',
                            id: 'Text14',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            id: 'ic_menu_copy_2',
                            rect: ['82px', '92px', '14px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_menu%20copy%202.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'ic_home_black_24px_copy_22',
                            rect: ['82px', '131px', '15px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_home_black_24px%20copy%202.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['737px', '193px', '27px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            id: 'icayudaact',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/icayudaact.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['746px', '197px', '9px', '18px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            id: 'icayuda',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/icayuda.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['737px', '167px', '27px', '27px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            id: 'Group_4',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/Group%204.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['743px', '172px', '16px', '16px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            id: 'glosario',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/glosario.svg', '0px', '0px']
                        },
                        {
                            rect: ['740px', '145px', '21px', '21px', 'auto', 'auto'],
                            type: 'image',
                            id: 'ic-biblioteca-act',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic-biblioteca-act.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['742px', '146px', '16px', '16px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            id: 'ic_library_books_black_24px2',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_library_books_black_24px.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['738px', '115px', '25px', '25px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            id: 'ic_salir_copy',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_salir%20copy.svg', '0px', '0px']
                        },
                        {
                            type: 'image',
                            rect: ['746px', '120px', '10px', '13px', 'auto', 'auto'],
                            transform: [[], [], [], ['0.78', '0.78']],
                            id: 'salir',
                            display: 'block',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'imagenes/salir.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['99px', '228px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​TEMA 2</p>',
                            id: 'Text19',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['99px', '260px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​TEMA 3</p>',
                            id: 'Text20',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['101px', '292px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​TEMA4</p>',
                            id: 'Text21',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['91px', '324px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">ACTIVIDAD</p>',
                            id: 'Text22',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['105px', '356px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​TEST</p>',
                            id: 'Text23',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['167px', '32px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​​Exportación de Servicios</p>',
                            id: 'Text25',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['424px', '37px', '333px', '13px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Módulo 1: Nociones básicas de los servicios y su importancia</p>',
                            id: 'Text26',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            type: 'text',
                            rect: ['420px', '85px', '111px', '14px', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Introducción</p>',
                            id: 'Text27',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal']
                        },
                        {
                            rect: ['323px', '536px', '67px', '28px', 'auto', 'auto'],
                            id: 'Rectangle7Copy',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(60,214,225,1)']
                        },
                        {
                            rect: ['391px', '536px', '67px', '28px', 'auto', 'auto'],
                            id: 'Rectangle7',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(60,214,225,1)']
                        },
                        {
                            type: 'text',
                            rect: ['341px', '543px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Anterior</p>',
                            id: 'Text',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            type: 'image',
                            fi: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'ic_chevron_right_black_48pxCopy',
                            filter: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            rect: ['437px', '539px', '21px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_chevron_right_black_48px.svg', '0px', '0px']
                        },
                        {
                            transform: [[], ['-180'], [0, 0, 0], [1, 1, 1]],
                            filter: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fi: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'ic_chevron_right_black_48px',
                            type: 'image',
                            rect: ['323px', '539px', '21px', '21px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_chevron_right_black_48px.svg', '0px', '0px']
                        },
                        {
                            type: 'text',
                            rect: ['399px', '543px', 'auto', 'auto', 'auto', 'auto'],
                            text: '<p style=\"margin: 0px;\">​Siguiente</p>',
                            id: 'Text2',
                            textStyle: ['', '', '', '', 'none'],
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['323px', '536px', '67px', '28px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(60,214,225,0.00)']
                        },
                        {
                            rect: ['391px', '536px', '67px', '28px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(60,214,225,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '905px', '564px']
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
                        "5": 7295,
                        "6": 7354
                    },
                    data: [
                        [
                            "eid24",
                            "left",
                            7368,
                            0,
                            "easeOutBack",
                            "${glosario}",
                            '743px',
                            '743px'
                        ],
                        [
                            "eid99",
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
                            "eid2535",
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
                            "eid2536",
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
                            "eid2537",
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
                            "eid2538",
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
                            "eid2539",
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
                            "eid12",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${glosario}",
                            'block',
                            'none'
                        ],
                        [
                            "eid13",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${glosario}",
                            'none',
                            'block'
                        ],
                        [
                            "eid14",
                            "display",
                            6250,
                            0,
                            "easeOutBack",
                            "${glosario}",
                            'block',
                            'none'
                        ],
                        [
                            "eid15",
                            "display",
                            6699,
                            0,
                            "easeOutBack",
                            "${glosario}",
                            'none',
                            'block'
                        ],
                        [
                            "eid41",
                            "scaleX",
                            1039,
                            412,
                            "easeOutBack",
                            "${Text6}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid200",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Text13}",
                            '201px',
                            '201px'
                        ],
                        [
                            "eid56",
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
                            "eid2540",
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
                            "eid2541",
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
                            "eid2542",
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
                            "eid2543",
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
                            "eid2544",
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
                            "eid48",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${ic-biblioteca-act}",
                            'none',
                            'none'
                        ],
                        [
                            "eid49",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${ic-biblioteca-act}",
                            'none',
                            'block'
                        ],
                        [
                            "eid50",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${ic-biblioteca-act}",
                            'block',
                            'none'
                        ],
                        [
                            "eid51",
                            "display",
                            5750,
                            0,
                            "easeOutBack",
                            "${ic-biblioteca-act}",
                            'none',
                            'block'
                        ],
                        [
                            "eid52",
                            "display",
                            6205,
                            0,
                            "easeOutBack",
                            "${ic-biblioteca-act}",
                            'block',
                            'none'
                        ],
                        [
                            "eid46",
                            "scaleX",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            '0.05',
                            '0.05'
                        ],
                        [
                            "eid47",
                            "scaleX",
                            1000,
                            500,
                            "easeOutBack",
                            "${Rectangle2}",
                            '0.05',
                            '0.78'
                        ],
                        [
                            "eid53",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            'none',
                            'none'
                        ],
                        [
                            "eid54",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            'none',
                            'block'
                        ],
                        [
                            "eid55",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${Text9}",
                            'block',
                            'none'
                        ],
                        [
                            "eid94",
                            "scaleX",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            '0.05',
                            '0.05'
                        ],
                        [
                            "eid95",
                            "scaleX",
                            3250,
                            500,
                            "easeOutBack",
                            "${Rectangle4}",
                            '0.05',
                            '0.78'
                        ],
                        [
                            "eid190",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${icayudaact}",
                            'none',
                            'none'
                        ],
                        [
                            "eid191",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${icayudaact}",
                            'none',
                            'block'
                        ],
                        [
                            "eid192",
                            "display",
                            5201,
                            0,
                            "easeOutBack",
                            "${icayudaact}",
                            'block',
                            'none'
                        ],
                        [
                            "eid193",
                            "display",
                            6750,
                            0,
                            "easeOutBack",
                            "${icayudaact}",
                            'none',
                            'block'
                        ],
                        [
                            "eid194",
                            "display",
                            7250,
                            0,
                            "easeOutBack",
                            "${icayudaact}",
                            'block',
                            'none'
                        ],
                        [
                            "eid205",
                            "scaleX",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            '0.05',
                            '0.05'
                        ],
                        [
                            "eid206",
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
                            "left",
                            7368,
                            0,
                            "easeOutBack",
                            "${icayuda}",
                            '746px',
                            '746px'
                        ],
                        [
                            "eid84",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Group_4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid85",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${Group_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid86",
                            "display",
                            4192,
                            0,
                            "easeOutBack",
                            "${Group_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid87",
                            "display",
                            6250,
                            0,
                            "easeOutBack",
                            "${Group_4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid88",
                            "display",
                            6699,
                            0,
                            "easeOutBack",
                            "${Group_4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid8",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${ic_library_books_black_24px2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid9",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${ic_library_books_black_24px2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid10",
                            "display",
                            5750,
                            0,
                            "easeOutBack",
                            "${ic_library_books_black_24px2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid11",
                            "display",
                            6205,
                            0,
                            "easeOutBack",
                            "${ic_library_books_black_24px2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid31",
                            "top",
                            7368,
                            0,
                            "easeOutBack",
                            "${ic_library_books_black_24px2}",
                            '146px',
                            '146px'
                        ],
                        [
                            "eid57",
                            "scaleX",
                            2299,
                            412,
                            "easeOutBack",
                            "${Text9}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid89",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            'none',
                            'none'
                        ],
                        [
                            "eid90",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            'none',
                            'block'
                        ],
                        [
                            "eid91",
                            "display",
                            4192,
                            0,
                            "easeOutBack",
                            "${Text10}",
                            'block',
                            'none'
                        ],
                        [
                            "eid199",
                            "scaleX",
                            4295,
                            412,
                            "easeOutBack",
                            "${Text13}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid29",
                            "top",
                            7368,
                            0,
                            "easeOutBack",
                            "${icayuda}",
                            '197px',
                            '197px'
                        ],
                        [
                            "eid2",
                            "background-color",
                            7295,
                            10,
                            "easeOutBack",
                            "${Rectangle7Copy}",
                            'rgba(60,214,225,1)',
                            'rgba(23,119,124,1.00)'
                        ],
                        [
                            "eid3",
                            "background-color",
                            7305,
                            25,
                            "easeOutBack",
                            "${Rectangle7Copy}",
                            'rgba(23,119,124,1)',
                            'rgba(60,214,225,1.00)'
                        ],
                        [
                            "eid38",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            'none',
                            'none'
                        ],
                        [
                            "eid39",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            'none',
                            'block'
                        ],
                        [
                            "eid40",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${Text6}",
                            'block',
                            'none'
                        ],
                        [
                            "eid201",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            'none',
                            'none'
                        ],
                        [
                            "eid202",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            'none',
                            'block'
                        ],
                        [
                            "eid203",
                            "display",
                            5201,
                            0,
                            "easeOutBack",
                            "${Rectangle5}",
                            'block',
                            'none'
                        ],
                        [
                            "eid195",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            'none',
                            'none'
                        ],
                        [
                            "eid196",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            'none',
                            'block'
                        ],
                        [
                            "eid197",
                            "display",
                            5201,
                            0,
                            "easeOutBack",
                            "${Text13}",
                            'block',
                            'none'
                        ],
                        [
                            "eid16",
                            "display",
                            4250,
                            0,
                            "easeOutBack",
                            "${icayuda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid17",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${icayuda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid18",
                            "display",
                            6750,
                            0,
                            "easeOutBack",
                            "${icayuda}",
                            'block',
                            'none'
                        ],
                        [
                            "eid19",
                            "display",
                            7250,
                            0,
                            "easeOutBack",
                            "${icayuda}",
                            'none',
                            'block'
                        ],
                        [
                            "eid4",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${salir}",
                            'block',
                            'none'
                        ],
                        [
                            "eid5",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${salir}",
                            'none',
                            'block'
                        ],
                        [
                            "eid6",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${salir}",
                            'block',
                            'none'
                        ],
                        [
                            "eid7",
                            "display",
                            5699,
                            0,
                            "easeOutBack",
                            "${salir}",
                            'none',
                            'block'
                        ],
                        [
                            "eid42",
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
                            "eid2545",
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
                            "eid2546",
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
                            "eid2547",
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
                            "eid2548",
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
                            "eid2549",
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
                            "eid198",
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
                            "eid2550",
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
                            "eid2551",
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
                            "eid2552",
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
                            "eid2553",
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
                            "eid2554",
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
                            "eid1",
                            "background-color",
                            7354,
                            14,
                            "easeOutBack",
                            "${Rectangle7}",
                            'rgba(60,214,225,1)',
                            'rgba(23,119,124,1.00)'
                        ],
                        [
                            "eid32",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${ic_salir_copy}",
                            'none',
                            'none'
                        ],
                        [
                            "eid33",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${ic_salir_copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid34",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${ic_salir_copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid35",
                            "display",
                            5250,
                            0,
                            "easeOutBack",
                            "${ic_salir_copy}",
                            'none',
                            'block'
                        ],
                        [
                            "eid36",
                            "display",
                            5699,
                            0,
                            "easeOutBack",
                            "${ic_salir_copy}",
                            'block',
                            'none'
                        ],
                        [
                            "eid60",
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
                            "eid2555",
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
                            "eid2556",
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
                            "eid2557",
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
                            "eid2558",
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
                            "eid2559",
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
                            "eid58",
                            "scaleX",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            '0.05',
                            '0.05'
                        ],
                        [
                            "eid59",
                            "scaleX",
                            2250,
                            500,
                            "easeOutBack",
                            "${Rectangle3}",
                            '0.05',
                            '0.78'
                        ],
                        [
                            "eid25",
                            "top",
                            7368,
                            0,
                            "easeOutBack",
                            "${glosario}",
                            '172px',
                            '172px'
                        ],
                        [
                            "eid93",
                            "scaleX",
                            3290,
                            412,
                            "easeOutBack",
                            "${Text10}",
                            '0.05',
                            '1'
                        ],
                        [
                            "eid204",
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
                            "eid2560",
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
                            "eid2561",
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
                            "eid2562",
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
                            "eid2563",
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
                            "eid2564",
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
                            "eid61",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            'none',
                            'none'
                        ],
                        [
                            "eid62",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            'none',
                            'block'
                        ],
                        [
                            "eid63",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${Rectangle3}",
                            'block',
                            'none'
                        ],
                        [
                            "eid30",
                            "left",
                            7368,
                            0,
                            "easeOutBack",
                            "${ic_library_books_black_24px2}",
                            '742px',
                            '742px'
                        ],
                        [
                            "eid23",
                            "top",
                            7368,
                            0,
                            "easeOutBack",
                            "${salir}",
                            '120px',
                            '120px'
                        ],
                        [
                            "eid43",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid44",
                            "display",
                            1000,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            'none',
                            'block'
                        ],
                        [
                            "eid45",
                            "display",
                            2250,
                            0,
                            "easeOutBack",
                            "${Rectangle2}",
                            'block',
                            'none'
                        ],
                        [
                            "eid92",
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
                            "eid2565",
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
                            "eid2566",
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
                            "eid2567",
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
                            "eid2568",
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
                            "eid2569",
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
                            "eid37",
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
                            "eid2570",
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
                            "eid2571",
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
                            "eid2572",
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
                            "eid2573",
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
                            "eid2574",
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
                            "eid96",
                            "display",
                            0,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            'none',
                            'none'
                        ],
                        [
                            "eid97",
                            "display",
                            3250,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            'none',
                            'block'
                        ],
                        [
                            "eid98",
                            "display",
                            4192,
                            0,
                            "easeOutBack",
                            "${Rectangle4}",
                            'block',
                            'none'
                        ],
                        [
                            "eid22",
                            "left",
                            7368,
                            0,
                            "easeOutBack",
                            "${salir}",
                            '746px',
                            '746px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("contenido-general-tablet_edgeActions.js");
})("EDGE-4408442");
