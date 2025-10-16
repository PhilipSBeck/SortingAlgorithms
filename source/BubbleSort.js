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
    interval_varible = window.setInterval(bubble_nextStep, sort_delay)
}

function bubble_nextStep() {
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
    bubble_compare_and_swap()
    updateStats()
}

function bubble_compare_and_swap(){
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