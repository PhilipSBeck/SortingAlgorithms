var currentElement = 0;
var pass = 0;
var total_comparisons = 0;
var total_swaps = 0;
var lastSwapped1 = -1
var lastSwapped2 = -1

var picker_value = "Bubble Sort"

function onAlgorithmChanged()
{
    let picker = document.getElementById("AlgorithmPicker");
    picker_value = picker.value;
    document.getElementById("Title").innerText = picker_value
}

function updateStats() {
    let stats = document.getElementById("Stats");
    stats.innerText = "Pass: " + pass + " Comparisons: " + total_comparisons + " Swaps: " + total_swaps;
}

function run_sort() {
    switch (picker_value) {
        case "Merge Sort":
            mergeSort();
            break;
        case "Bubble Sort":
        default:
            bubbleSort();
            break;
    }
}