// Bubble Sort
var bubbleSort = function(arr) {
  if (arr.length === 0) return arr;

  var comparison = swap = 0;
  var outerIterationLoopCount = arr.length - 1;

  var innerIterationLoopCount;
  var current, next;
  var i;

  while (outerIterationLoopCount > 0) {
    innerIterationLoopCount = arr.length - 1;

    for (i = 0; i < innerIterationLoopCount; i++) {
      current = arr[i];
      next = arr[i + 1]; 

      comparison++;

      if (current > next) {
        arr[i] = next;
        arr[i + 1] = current;
        swap++;
      }
    }

    outerIterationLoopCount--;
  }

  console.log('Bubble Sort comparisons: ', comparison);
  console.log('Bubble Sort swaps: ', swap);

  return arr;
};


// Merge Sort
var split = function(arr) {
  var middle = Math.floor(arr.length / 2);
  var splitArr = [];

  splitArr.push(arr.slice(0, middle));
  splitArr.push(arr.slice(middle));

  return splitArr;
};

var merge = function(arrA, arrB) {
  var mergedArr = [];
  var iterationCount = arrA.length + arrB.length;
  var i;

  for (i = 0; i < iterationCount; i++) {
    if (typeof arrB[0] == 'undefined' || arrA[0] < arrB[0]) {
      mergedArr.push(arrA.shift());
    } else {
      mergedArr.push(arrB.shift());
    }
  }

  return mergedArr;
};

var mergeSort = function(arr) {
  if (arr.length <= 1) return arr;

  var splittedArr = split(arr);
  var arrLeft = splittedArr[0];
  var arrRight = splittedArr[1];

  return merge(mergeSort(arrLeft), mergeSort(arrRight));
};


// =====Performance Test DON'T DELETE THIS CODE=====
// type `performanceTest()` in your browser after you finished 
// all the code above
var performanceTest = function() {
  for (var i = 10; i < 20; i++) {
    var num_items = Math.pow(2, i),
        native_test_array = [],
        b_test_array = [],
        m_test_array = [];

    for (var j = 0; j < num_items; j++) {
      var rand = Math.floor(Math.random() * num_items);

      native_test_array.push(rand);
      b_test_array.push(rand);
      m_test_array.push(rand);
    }

    console.time(num_items + "Native Sort");
    native_test_array.sort();
    console.timeEnd(num_items + "Native Sort");

    console.time(num_items + "Bubble Sort");
    bubbleSort(b_test_array);
    console.timeEnd(num_items + "Bubble Sort");

    console.time(num_items + "Merge Sort");
    mergeSort(m_test_array);
    console.timeEnd(num_items + "Merge Sort");
    console.log('\n');
  }
};
