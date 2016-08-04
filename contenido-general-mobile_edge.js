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
                            id: 'image3',
                            type: 'image',
                            rect: ['0', '185px', '320px', '309px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"image3.jpg",'0px','0px']
                        },
                        {
                            id: 'image4',
                            type: 'image',
                            rect: ['0px', '184px', '320px', '309px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"image4.jpg",'0px','0px']
                        },
                        {
                            id: 'Text',
                            type: 'text',
                            rect: ['11px', '504px', '178px', '18px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Lorem Ipsum</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [13, "px"], "rgba(0,0,0,1)", "700", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'Text2',
                            type: 'text',
                            rect: ['12px', '530px', '296px', '176px', 'auto', 'auto'],
                            text: "<p style=\"margin: 0px;\">​Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p><p style=\"margin: 0px;\">​</p><p style=\"margin: 0px;\">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [12, "px"], "rgba(0,0,0,1)", "400", "none", "normal", "break-word", "normal"],
                            textStyle: ["", "", "", "", "none"]
                        },
                        {
                            id: 'plantilla',
                            symbolName: 'plantilla',
                            type: 'rect',
                            rect: ['-4', '-1', '410', '1027', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '100%', '1249px', 'auto', 'auto'],
                            sizeRange: ['','320px','',''],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

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
                            rect: ['3px', '1035px', '322px', '190px', 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.75)']
                        },
                        {
                            rect: ['4px', '716px', '320px', '280px', 'auto', 'auto'],
                            id: 'Rectangle',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            type: 'rect',
                            fill: ['rgba(211,23,68,1.00)']
                        },
                        {
                            id: 'cabezote_illus',
                            type: 'image',
                            rect: ['72px', '0px', '255px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cabezote_illus.png', '0px', '0px']
                        },
                        {
                            id: 'Rectangle_35',
                            type: 'image',
                            rect: ['0px', '1px', '194px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Rectangle%2035.png', '0px', '0px']
                        },
                        {
                            id: 'rec_menu',
                            type: 'image',
                            rect: ['0px', '149px', '324px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rec_menu.png', '0px', '0px']
                        },
                        {
                            id: 'logo_tm',
                            type: 'image',
                            rect: ['19px', '15px', '63px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/logo_tm.svg', '0px', '0px']
                        },
                        {
                            rect: ['145px', '161px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text15',
                            text: '<p style=\"margin: 0px;\">​INICIO</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['131px', '739px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text17',
                            text: '<p style=\"margin: 0px;\">​OBJETIVOS</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['143px', '771px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text18',
                            text: '<p style=\"margin: 0px;\">​TEMA 1</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['145px', '126px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text14',
                            text: '<p style=\"margin: 0px;\">​MENU</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            id: 'ic_menu_copy_2',
                            type: 'image',
                            rect: ['121px', '127px', '14px', '10px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_menu%20copy%202.svg', '0px', '0px']
                        },
                        {
                            id: 'ic_home_black_24px_copy_22',
                            type: 'image',
                            rect: ['125px', '160px', '15px', '12px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_home_black_24px%20copy%202.svg', '0px', '0px']
                        },
                        {
                            rect: ['143px', '807px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text19',
                            text: '<p style=\"margin: 0px;\">​TEMA 2</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['143px', '841px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text20',
                            text: '<p style=\"margin: 0px;\">​TEMA 3</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['144px', '877px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text21',
                            text: '<p style=\"margin: 0px;\">​TEMA4</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['132px', '909px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text22',
                            text: '<p style=\"margin: 0px;\">​ACTIVIDAD</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['149px', '944px', 'auto', 'auto', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(255,255,255,1.00)', '500', 'none', 'normal', 'break-word', 'nowrap'],
                            id: 'Text23',
                            text: '<p style=\"margin: 0px;\">​TEST</p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['139px', '856px', '50px', '328px', 'auto', 'auto'],
                            id: 'rec_izq',
                            transform: [[], ['90'], [], ['1.03']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/rec_izq.png', '0px', '0px']
                        },
                        {
                            id: 'rec_footer',
                            type: 'image',
                            rect: ['3px', '1216px', '324px', '33px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/rec_footer.png', '0px', '0px']
                        },
                        {
                            rect: ['4px', '1216px', '66px', '32px', 'auto', 'auto'],
                            id: 'Rectangle7Copy5',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(60,214,225,1)']
                        },
                        {
                            rect: ['258px', '1216px', '66px', '32px', 'auto', 'auto'],
                            id: 'Rectangle7Copy4',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(60,214,225,1)']
                        },
                        {
                            rect: ['278px', '1219px', '26px', '26px', 'auto', 'auto'],
                            filter: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'ic_chevron_right_black_48pxCopy',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_chevron_right_black_48px.svg', '0px', '0px']
                        },
                        {
                            rect: ['24px', '1219px', '26px', '26px', 'auto', 'auto'],
                            filter: [1, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'ic_chevron_right_black_48px',
                            transform: [[], ['-180']],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'imagenes/ic_chevron_right_black_48px.svg', '0px', '0px']
                        },
                        {
                            rect: ['4px', '1216px', '66px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle8',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(60,214,225,0.00)']
                        },
                        {
                            rect: ['258px', '1216px', '66px', '32px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle9',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(60,214,225,0)']
                        },
                        {
                            rect: ['93px', '9px', '93px', '38px', 'auto', 'auto'],
                            textStyle: ['', '', '15px', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', ''],
                            id: 'Text25',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 12px;\">​</span><span style=\"font-size: 14px;\">Exportación de Servicios</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['191px', '16px', '133px', '23px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text26',
                            text: '<p style=\"margin: 0px;\">​<span style=\"font-size: 9px;\">Módulo 1: Nociones básicas de los servicios y su importancia</span></p>',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: ['102px', '87px', '111px', '14px', 'auto', 'auto'],
                            textStyle: ['', '', '', '', 'none'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(0,0,0,1.00)', '500', 'none', 'normal', 'break-word', 'normal'],
                            id: 'Text27',
                            text: '<p style=\"margin: 0px;\">​Introducción</p>',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            id: 'cierre-mobile1',
                            type: 'image',
                            rect: ['286px', '185px', '42px', '42px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/cierre-mobile1.png', '0px', '0px']
                        },
                        {
                            id: 'salir2',
                            type: 'image',
                            rect: ['303px', '193px', '13px', '15px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'imagenes/salir.svg', '0px', '0px']
                        },
                        {
                            rect: ['294px', '185px', '30px', '30px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'Rectangle3',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(193,193,193,0.00)']
                        },
                        {
                            rect: ['5px', '902px', '320px', '31px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'actividad',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        },
                        {
                            rect: ['5px', '936px', '320px', '31px', 'auto', 'auto'],
                            type: 'rect',
                            id: 'test',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(192,192,192,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '443px', '1369px']
                        }
                    }
                },
                timeline: {
                    duration: 87,
                    autoPlay: false,
                    labels: {
                        "5": 14,
                        "6": 73
                    },
                    data: [
                        [
                            "eid15",
                            "background-color",
                            73,
                            14,
                            "easeOutBack",
                            "${Rectangle7Copy4}",
                            'rgba(60,214,225,1)',
                            'rgba(23,119,124,1.00)'
                        ],
                        [
                            "eid72",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle7Copy5}",
                            '1216px',
                            '1216px'
                        ],
                        [
                            "eid73",
                            "top",
                            0,
                            0,
                            "linear",
                            "${Rectangle7Copy4}",
                            '1216px',
                            '1216px'
                        ],
                        [
                            "eid16",
                            "background-color",
                            14,
                            10,
                            "easeOutBack",
                            "${Rectangle7Copy5}",
                            'rgba(60,214,225,1)',
                            'rgba(23,119,124,1.00)'
                        ],
                        [
                            "eid17",
                            "background-color",
                            24,
                            25,
                            "easeOutBack",
                            "${Rectangle7Copy5}",
                            'rgba(23,119,124,1)',
                            'rgba(60,214,225,1.00)'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("contenido-general-mobile_edgeActions.js");
})("EDGE-4303127");
