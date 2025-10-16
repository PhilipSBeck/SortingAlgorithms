let old_arrays = []
let new_arrays = []
let old_array_1
let old_array_1_pos
let old_array_2
let old_array_2_pos
let new_array

function mergeSort()
{
    if (currently_sorting) return
    currently_sorting = true
    pass = 0
    currentElement = 0
    total_comparisons = 0
    total_swaps = 0
    lastSwapped1 = -1
    lastSwapped2 = -1


    old_arrays = []
    for (element of sorting_array) {
        old_arrays.push([element])
    }
    
    new_arrays = []
    new_arrays.push([])

    old_array_1 = 0
    old_array_1_pos = 0
    old_array_2 = 1
    old_array_2_pos = 0
    new_array = 0

    interval_varible = window.setInterval(merge_nextStep, sort_delay)
}

function merge_nextStep() {
    merge_array()

    fill_sorting_array()
    drawArray()
    draw_last_swapped()
    updateStats()
}

function merge_array() {
    let array_1_empty = old_array_1_pos >= old_arrays[old_array_1].length;
    let array_2_empty = old_array_2_pos >= old_arrays[old_array_2].length;
    if (array_1_empty && array_2_empty) {
        old_array_1 += 2
        old_array_2 += 2
        old_array_1_pos = 0
        old_array_2_pos = 0
        if (old_array_2 >= old_arrays.length) {
            if (old_array_1 < old_arrays.length) {
                new_arrays.push(old_arrays[old_array_1])
            }
            // new pass
            new_pass()
            return
        }
        else {
            new_array += 1
            new_arrays.push([])
        }
    }
    else if (array_1_empty) {
        move_into_new_array(old_array_2, old_array_2_pos)
        old_array_2_pos += 1
    }
    else if (array_2_empty) {
        move_into_new_array(old_array_1, old_array_1_pos)
        old_array_1_pos += 1
    }
    else {
        total_comparisons += 1;
        if (old_arrays[old_array_1][old_array_1_pos] < old_arrays[old_array_2][old_array_2_pos]) {
            move_into_new_array(old_array_1, old_array_1_pos)
            old_array_1_pos += 1
        }
        else {
            move_into_new_array(old_array_2, old_array_2_pos)
            old_array_2_pos += 1
        }
    }
}

function move_into_new_array(old_array, old_array_pos) {
    total_swaps += 1;
    new_arrays[new_array].push(old_arrays[old_array][old_array_pos])
    old_arrays[old_array][old_array_pos] = -1
}

function new_pass() {
    if (new_arrays.length == 1) {
        fill_sorting_array()
        stopSorting()
        return
    }

    pass += 1
    old_arrays = new_arrays
    new_arrays = []
    new_arrays.push([])

    old_array_1 = 0
    old_array_1_pos = 0
    old_array_2 = 1
    old_array_2_pos = 0
    new_array = 0
}

function fill_sorting_array() {
    sorting_array = []
    for (array of new_arrays)
    {
        for (element of array) {
            sorting_array.push(element)
        }
    }
    for (array of old_arrays)
    {
        console.log(array)
        for (element of array) {
            if (element > 0)
            {
                sorting_array.push(element)
            }
        }
    }
}