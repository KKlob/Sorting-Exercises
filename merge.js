function merge(aArray, bArray) {
    const out = [];
    let aPoint = 0;
    let bPoint = 0;
    let val;
    while (aPoint < aArray.length && bPoint < bArray.length) {
        if (aArray[aPoint] <= bArray[bPoint]) {
            out.push(aArray[aPoint]);
            aPoint++;
        } else {
            out.push(bArray[bPoint]);
            bPoint++;
        }
    }

    if (aPoint === aArray.length) {
        for (bPoint; bPoint < bArray.length; bPoint++) {
            out.push(bArray[bPoint]);
        }
    } else {
        for (aPoint; aPoint < aArray.length; aPoint++) {
            out.push(aArray[aPoint]);
        }
    }
    return out;
}

function mergeSort(array) {
    //base case
    if (array.length <= 1) return array;
    const mid = Math.floor(array.length / 2);
    const left = mergeSort(array.slice(0, mid));
    const right = mergeSort(array.slice(mid));
    return merge(left, right);
}

module.exports = { merge, mergeSort };