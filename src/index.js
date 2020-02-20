
exports.min = function min (array) {
  if (!array || array.length === 0) {
      return 0;
  } else {
    let min = 1000;
    for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        } else {
            min = min
        }
    }
    return min;
  }
}

exports.max = function max (array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let max = -1000;
        for (let i = 0; i < array.length; i++) {
            if (array[i] > max) {
                max = array[i];
            } else {
                max = max
            }
        }
        return max;
    }
}

exports.avg = function avg (array) {
    if (!array || array.length === 0) {
        return 0;
    } else {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        return sum / array.length;
    }
}
