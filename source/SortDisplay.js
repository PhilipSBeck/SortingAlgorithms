const MAX_ELEMENTS = 500

var num_elements = 50
var sorting_array = []

var base_line_color = '#3d0101ff'
var swap_color = '#e69d00ff'
var highlight_color1 = '#1ab61aff'
var highlight_color2 = '#53f553ff'
var background_color = '#f7f7f7ff';
var line_width = 3
var line_spacing = 0
var line_height_multiplier = 3
var sort_delay = 20

var start_x = 0
var start_y = 0

var currently_sorting = false
let interval_varible;

var canvas
var ctx

window.onload = () => {
    canvas = document.getElementById('Canvas');
    ctx = canvas.getContext('2d');

    document.getElementById("QuantityInput").value = num_elements;
    document.getElementById("DelayInput").value = sort_delay;

    ClearCanvas()
    reset()
}

function ClearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = background_color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function calculateDimensions() {
    line_width = Math.max(1, Math.floor(canvas.width / num_elements) - line_spacing)
    line_height_multiplier = Math.max(1, Math.floor(canvas.height / num_elements))
    start_x = Math.round((canvas.width - (num_elements * (line_width + line_spacing)))/2)
}


function drawArray() {
    ClearCanvas()
    for (let i = 0; i < num_elements; i++) {
        drawBaseLine(i, base_line_color)
    }
}

function drawBaseLine(pos) {
    let size = sorting_array[pos]
    color = "#" + Math.round(20 + 180 * (size/num_elements)).toString(16) + "0000"
    draw_line(pos,color)
}

function draw_line(pos, color) {
    let y_start = canvas.height - start_y
    let x_pos = start_x + (pos * (line_width + line_spacing))
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.fillRect(x_pos, y_start, line_width, -sorting_array[pos] * line_height_multiplier)
    ctx.stroke();
}

function reset() {
    stopSorting()

    calculateDimensions();

    sorting_array = [];
    for (let i = 0; i < num_elements; i++) {
        sorting_array.push(i + 1);
    }
    shuffleArray(sorting_array);

    drawArray();
}

function KeepValueWithinBounds(element) {
    let value = parseInt(element.value);
    let max = parseInt(element.max);
    let min = parseInt(element.min);
    if (value > max) {
        value = max;
    }
    else if (value < min) {
        value = min;
    }
}

function onQuantityChanged() {
    var quantityInput = document.getElementById("QuantityInput");
    KeepValueWithinBounds(quantityInput);
    num_elements = quantityInput.value;
    reset()
}

function onDelayChanged() {
    var delayInput = document.getElementById("DelayInput");
    KeepValueWithinBounds(delayInput);
    sort_delay = delayInput.value;
}

function stopSorting() {
    window.clearInterval(interval_varible);
    currently_sorting = false;
    drawArray();
}

function draw_last_swapped() {
    if (lastSwapped1 < 0 || lastSwapped2 < 0) return;
    console.log("Drawing Last Swapped")
    draw_line(lastSwapped1, swap_color)
    draw_line(lastSwapped2, swap_color)
}