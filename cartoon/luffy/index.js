// Made with Zdog

var illoElem = document.querySelector('.illo');
var illoSize = 72;
var minWindowSize = Math.min(window.innerWidth - 20, window.innerHeight - 60);
var zoom = Math.floor(minWindowSize / illoSize);
illoElem.setAttribute('width', illoSize * zoom);
illoElem.setAttribute('height', illoSize * zoom);

var isSpinning = true;
var TAU = Zdog.TAU;

var illo = new Zdog.Illustration({
    element: illoElem,
    // zoom: zoom,
    dragRotate: false,

    // onDragStart: function () {
    //     isSpinning = false;
    // },
});

// colors
var colors = {
    eye: '#333',
    white: '#FFF',
    hair: '#631',
    overalls: '#24D',
    cloth: '#E11',
    skin: '#FC9',
    leather: '#A63',
    eggplant: 'black',
    red: '#B90909',
    hat: '#DDAE46',
};

// -- illustration shapes --- //

// head
function initHead() {

    var head = new Zdog.Shape({
        addTo: illo,
        color: colors.skin,
        width: 200,
        height: 180,
        stroke: 180,
    });

    return head;
}

function initHat() {
    // var head = getHead();
    var hatGroup = new Zdog.Group({
        addTo: illo,
        translate: {
            y: -60,
        }
    });

    new Zdog.Ellipse({
        addTo: hatGroup,
        stroke: 180,
        color: colors.hat,
    });

    new Zdog.Ellipse({
        addTo: hatGroup,
        width: 200,
        height: 80,
        diameter: 80,
        stroke: 20,
        color: colors.red,
        translate: {
            z: 50,
            y: 10,
        }
    });

    new Zdog.Ellipse({
        addTo: hatGroup,
        width: 160,
        height: 80,
        fill: true,
        color: colors.skin,
        translate: {
            y: 70,
        }
    });

    new Zdog.Ellipse({
        addTo: hatGroup,
        width: 350,
        height: 80,
        fill: true,
        color: colors.hat,
        translate: {
            y: 20,
        }
    });

}

function initEyeGroup(x, y = 0, z = 50) {
    // 保证相对位置不变，整体位置传进来
    // var head = getHead();
    var eyeGroup = new Zdog.Group({
        addTo: illo,
        translate: {
            x,
            y: 20,
            z,
        },
    });

    var iris = new Zdog.Ellipse({
        addTo: eyeGroup,
        width: 40,
        height: 30,
        diameter: 50,
        stroke: 10,
        fill: true,
        color: colors.white,
    });
    // pupil
    iris.copy({
        diameter: 5,
        width: 5,
        height: 5,
        color: colors.eggplant,
        translate: {
            y: -5,
        }
    });
}

function initMouth() {
    // var head = getHead();
    new Zdog.Shape({
        addTo: illo,
        path: [
            { x: -30, y: 60 },   // start
            { x: 30, y: 60},
            { arc: [
              { x:  30, y: 90 }, // corner
              { x:  30, y:  60 }, // end point
            ]}
        ],
        closed: false,
        stroke: 5,
        color: colors.black,
    });
}

initHead();
initHat();
initEyeGroup(-45);
initEyeGroup(45);
initMouth();

// -- animate --- //

function animate() {
    // illo.rotate.y += isSpinning ? -0.05 : 0;
    illo.updateRenderGraph();
    requestAnimationFrame(animate);
}

animate();