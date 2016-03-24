// =====Performance Test DON'T DELETE THIS CODE=====
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
    b_test_array.sort();
    console.timeEnd(num_items + "Bubble Sort");

    console.time(num_items + "Merge Sort");
    m_test_array.sort();
    console.timeEnd(num_items + "Merge Sort");
    console.log('\n');
  }
};
