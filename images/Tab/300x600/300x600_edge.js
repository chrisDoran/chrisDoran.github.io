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
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Background',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"Background.jpg",'0px','0px']
                        },
                        {
                            id: 'BackgroundColour',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"BackgroundColour.jpg",'0px','0px']
                        },
                        {
                            id: 'Player',
                            type: 'image',
                            rect: ['-432px', 'auto', '680px', '600px', 'auto', '-166px'],
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            fill: ["rgba(0,0,0,0)",im+"Player.png",'0px','0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, "rgba(0,0,0,0)", 0, 0, 0]
                        },
                        {
                            id: 'Lakers2',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Lakers.png",'0px','0px'],
                            transform: [[],[],[],['1.2','1.2']]
                        },
                        {
                            id: 'vs2',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vs.png",'0px','0px']
                        },
                        {
                            id: 'bulls2',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"bulls.png",'0px','0px']
                        },
                        {
                            id: 'vs22',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"vs2.png",'0px','0px']
                        },
                        {
                            id: 'you4',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0)",im+"you.png",'0px','0px']
                        },
                        {
                            id: 'Frame1_Line',
                            type: 'image',
                            rect: ['0px', '-46px', '300px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Frame1_Line.png",'0px','0px'],
                            transform: [[],[],[],['0.71','0.71']]
                        },
                        {
                            id: 'Frame1_Tonight',
                            type: 'image',
                            rect: ['-1px', '42px', '300px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Frame1_Tonight.png",'0px','0px'],
                            transform: [[],[],[],['1.27','1.27']]
                        },
                        {
                            id: 'Frame2_Copy',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Frame2_Copy.png",'0px','0px'],
                            transform: [[],[],[],['1.44','1.44']]
                        },
                        {
                            id: 'Logo',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Logo.png",'0px','0px']
                        },
                        {
                            id: 'Frame2_CopyNow',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Frame2_CopyNow.png",'0px','0px'],
                            transform: [[],[],[],['1','1.5']]
                        },
                        {
                            id: 'Button',
                            type: 'image',
                            rect: ['0px', '0px', '300px', '600px', 'auto', 'auto'],
                            opacity: '0',
                            fill: ["rgba(0,0,0,0)",im+"Button.png",'0px','0px'],
                            transform: [[],[],[],['1.32','1.32']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: [undefined, undefined, '300px', '600px'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    data: [
                        [
                            "eid117",
                            "scaleX",
                            1500,
                            250,
                            "linear",
                            "${bulls2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid49",
                            "scaleX",
                            1000,
                            1630,
                            "linear",
                            "${Frame1_Line}",
                            '0.71',
                            '1'
                        ],
                        [
                            "eid17",
                            "height",
                            0,
                            9000,
                            "linear",
                            "${Player}",
                            '680px',
                            '600px'
                        ],
                        [
                            "eid121",
                            "opacity",
                            1750,
                            250,
                            "linear",
                            "${vs22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid128",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${vs22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid115",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${vs2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid130",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${vs2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid34",
                            "top",
                            500,
                            250,
                            "linear",
                            "${Frame1_Tonight}",
                            '42px',
                            '0px'
                        ],
                        [
                            "eid114",
                            "scaleX",
                            1250,
                            250,
                            "linear",
                            "${vs2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid122",
                            "scaleY",
                            1750,
                            250,
                            "linear",
                            "${vs22}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid111",
                            "opacity",
                            1000,
                            250,
                            "linear",
                            "${Lakers2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid131",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${Lakers2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid93",
                            "scaleY",
                            5500,
                            250,
                            "easeOutQuad",
                            "${Button}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid104",
                            "filter.invert",
                            5940,
                            0,
                            "easeOutQuad",
                            "${Player}",
                            '0',
                            '0'
                        ],
                        [
                            "eid83",
                            "scaleX",
                            4750,
                            250,
                            "easeOutQuad",
                            "${Frame2_Copy}",
                            '1.44',
                            '1'
                        ],
                        [
                            "eid55",
                            "top",
                            1000,
                            1630,
                            "linear",
                            "${Frame1_Line}",
                            '-46px',
                            '0px'
                        ],
                        [
                            "eid144",
                            "scaleY",
                            2000,
                            250,
                            "linear",
                            "${you4}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            5500,
                            250,
                            "easeOutQuad",
                            "${Button}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid74",
                            "scaleX",
                            4000,
                            250,
                            "easeOutQuad",
                            "${Frame2_CopyNow}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid141",
                            "scaleX",
                            2000,
                            250,
                            "linear",
                            "${you4}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid119",
                            "scaleY",
                            1500,
                            250,
                            "linear",
                            "${bulls2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid113",
                            "scaleY",
                            1000,
                            250,
                            "linear",
                            "${Lakers2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid6",
                            "rotateZ",
                            0,
                            9000,
                            "linear",
                            "${Player}",
                            '0deg',
                            '10deg'
                        ],
                        [
                            "eid19",
                            "bottom",
                            0,
                            9000,
                            "linear",
                            "${Player}",
                            '-166px',
                            '25px'
                        ],
                        [
                            "eid120",
                            "scaleX",
                            1750,
                            250,
                            "linear",
                            "${vs22}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid3",
                            "left",
                            0,
                            9000,
                            "linear",
                            "${Player}",
                            '-370px',
                            '-432px'
                        ],
                        [
                            "eid142",
                            "opacity",
                            2000,
                            250,
                            "linear",
                            "${you4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${you4}",
                            '1',
                            '0'
                        ],
                        [
                            "eid118",
                            "opacity",
                            1500,
                            250,
                            "linear",
                            "${bulls2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid129",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${bulls2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid139",
                            "width",
                            0,
                            0,
                            "linear",
                            "${Player}",
                            '680px',
                            '680px'
                        ],
                        [
                            "eid15",
                            "top",
                            0,
                            8000,
                            "linear",
                            "${Player}",
                            '148px',
                            'auto'
                        ],
                        [
                            "eid98",
                            "top",
                            9000,
                            0,
                            "linear",
                            "${Player}",
                            'auto',
                            'auto'
                        ],
                        [
                            "eid28",
                            "scaleY",
                            500,
                            250,
                            "linear",
                            "${Frame1_Tonight}",
                            '1.27',
                            '1'
                        ],
                        [
                            "eid112",
                            "scaleX",
                            1000,
                            250,
                            "linear",
                            "${Lakers2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid51",
                            "left",
                            1000,
                            0,
                            "linear",
                            "${Frame1_Line}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid116",
                            "scaleY",
                            1250,
                            250,
                            "linear",
                            "${vs2}",
                            '1.2',
                            '1'
                        ],
                        [
                            "eid33",
                            "left",
                            500,
                            250,
                            "linear",
                            "${Frame1_Tonight}",
                            '-1px',
                            '0px'
                        ],
                        [
                            "eid92",
                            "scaleX",
                            5500,
                            250,
                            "easeOutQuad",
                            "${Button}",
                            '1.32',
                            '1'
                        ],
                        [
                            "eid44",
                            "opacity",
                            1000,
                            1630,
                            "linear",
                            "${Frame1_Line}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid60",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${Frame1_Line}",
                            '1',
                            '0'
                        ],
                        [
                            "eid84",
                            "scaleY",
                            4750,
                            250,
                            "easeOutQuad",
                            "${Frame2_Copy}",
                            '1.44',
                            '1'
                        ],
                        [
                            "eid69",
                            "opacity",
                            4000,
                            250,
                            "easeOutQuad",
                            "${Frame2_CopyNow}",
                            '0',
                            '1'
                        ],
                        [
                            "eid75",
                            "scaleY",
                            4000,
                            250,
                            "easeOutQuad",
                            "${Frame2_CopyNow}",
                            '1.5',
                            '1'
                        ],
                        [
                            "eid78",
                            "opacity",
                            4750,
                            250,
                            "easeOutQuad",
                            "${Frame2_Copy}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid22",
                            "opacity",
                            500,
                            250,
                            "linear",
                            "${Frame1_Tonight}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid62",
                            "opacity",
                            3500,
                            250,
                            "linear",
                            "${Frame1_Tonight}",
                            '1',
                            '0'
                        ],
                        [
                            "eid27",
                            "scaleX",
                            500,
                            250,
                            "linear",
                            "${Frame1_Tonight}",
                            '1.27',
                            '1'
                        ],
                        [
                            "eid50",
                            "scaleY",
                            1000,
                            1630,
                            "linear",
                            "${Frame1_Line}",
                            '0.71',
                            '1'
                        ],
                        [
                            "eid96",
                            "opacity",
                            6000,
                            750,
                            "easeOutQuad",
                            "${Logo}",
                            '0.000000',
                            '1'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("300x600_edgeActions.js");
})("EDGE-411651457");
