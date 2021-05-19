function countingSort(data, dataMax) {
    let box = [];

    for(let i = 0; i <= dataMax; i++){
        box[i] = 0;
    }

    for(let i = 0; i < data.length; i++){
        box[data[i]]++;
    }
    for(let i = 0; i < dataMax; i++){
        box[i + 1] += box[i];
    }

    let result = [];
    for(let i = data.length - 1; i >= 0; i--){
        box[data[i]]--;
        result[box[data[i]]] = data[i];
    }
    return result;
}

console.log('count', countingSort([5, 4, 1, 1, 2, 0, 2], 5));