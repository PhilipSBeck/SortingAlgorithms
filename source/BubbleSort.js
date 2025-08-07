let pass = 0;
let currentElement = 0;
let lastSwapped1 = -1
let lastSwapped2 = -1
let total_comparisons = 0;
let total_swaps = 0;
let swapped_this_pass = false;

function bubbleSort() {
    if (currently_sorting) return
    currently_sorting = true
    pass = 0
    currentElement = 0
    lastSwapped1 = -1
    lastSwapped2 = -1
    total_comparisons = 0
    total_swaps = 0
    interval_varible = window.setInterval(nextStep, sort_delay)
}

function nextStep() {
    if (currentElement == sorting_array.length - 1 - pass) {
        pass++;
        currentElement = 0;
        if (pass == sorting_array.length - 1 || swapped_this_pass == false) {
            stopSorting()
            return
        }
        swapped_this_pass = false;
    }
    drawArray()
    draw_last_swapped()
    compare_and_swap()
    updateStats()
}

function compare_and_swap(){
    total_comparisons++;
    draw_line(currentElement, highlight_color1);
    draw_line(currentElement + 1, highlight_color2);
    if (sorting_array[currentElement] > sorting_array[currentElement + 1]) {
        lastSwapped1 = currentElement;
        lastSwapped2 = currentElement + 1;
        let temp = sorting_array[currentElement];
        sorting_array[currentElement] = sorting_array[currentElement + 1];
        sorting_array[currentElement + 1] = temp;
        
        total_swaps++;

        swapped_this_pass = true;
    }
    currentElement += 1
}

function draw_last_swapped() {
    if (lastSwapped1 < 0 || lastSwapped2 < 0) return;
    draw_line(lastSwapped1, swap_color)
    draw_line(lastSwapped2, swap_color)
}

function updateStats() {
    let stats = document.getElementById("Stats");
    stats.innerText = "Pass: " + pass + " Comparisons: " + total_comparisons + " Swaps: " + total_swaps;
}