describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('handles an array with one item', function() {
    expect(bubbleSort([3])).toEqual([3]);
  });
  it('handles an aray with multiple items', function() {
    expect(bubbleSort([3, 2, 6, 8, 4])).toEqual([2, 3, 4, 6, 8]);
    expect(bubbleSort([3, 2, 6, 5, 1, 7])).toEqual([1, 2, 3, 5, 6, 7]);
  });
});

describe('Merge Sort', function() {
  it('is uses a helper function to split an array into two halves', function() {
    expect(split([1, 3, 5, 6, 7, 3, 4])).toEqual([[1, 3, 5], [6, 7, 3, 4]]);
    expect(split([5, 4, 5, 6, 9, 3])).toEqual([[5, 4, 5], [6, 9, 3]]);
  });
  it('is uses a helper function to merge the two arrays', function() {
    expect(merge([1], [6])).toEqual([1, 6]);
    expect(merge([8], [2])).toEqual([2, 8]);
    expect(merge([1, 1, 2, 4, 5], [1, 3, 5, 6])).toEqual([1, 1, 1, 2, 3, 4, 5, 5, 6]);
  });
  it('handles an empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });
  it('handles an array with one item', function() {
    expect(mergeSort([3])).toEqual([3]);
  });
  it('handles an aray with multiple items', function() {
    expect(mergeSort([3, 2, 6, 8, 4])).toEqual([2, 3, 4, 6, 8]);
    expect(mergeSort([3, 2, 6, 5, 1, 7])).toEqual([1, 2, 3, 5, 6, 7]);
  });
});
