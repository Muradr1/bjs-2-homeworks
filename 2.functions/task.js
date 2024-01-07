function getArrayParams(...arr) {
  let min = 5;
  let max = 0;
  let sum = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] > max) {
      max = arr[i];
    } else if (arr[i] < min) {
      min = arr[i];
    }; 
    sum += arr[i];
  };

  avg = sum / arr.length;
  avg = (avg).toFixed(2);
  avg = (Number(avg)); 
 
  return { min: min, max: max, avg: avg };
};
getArrayParams(-99, 99, 10);
getArrayParams(1, 2, 3, -100, 10);
getArrayParams(5);

function summElementsWorker(...arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};
summElementsWorker();
summElementsWorker(10, 10, 11, 20, 10);
summElementsWorker(0, 0, 0, -1, -100);

function differenceMaxMinWorker(...arr) {
  let min = arr[0];
  let max = arr[0];
  if (arr.length === 0) {  
    return 0;
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
     max = arr[i];
    };
    if (arr[i] < min) {
      min = arr[i];
    }
  };
  let result = max - min;

  return result;
};
differenceMaxMinWorker();
differenceMaxMinWorker(10, 10, 11, 20, 10);
differenceMaxMinWorker(0, 0, 0, -1, -100);

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    };
  };

  return sumEvenElement - sumOddElement;
  
};
differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);
differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17);
differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35);

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;

  if (arr.length === 0) {  
    return 0;
  };

  for (let i = 0; i < arr.length; i++) {
   
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement += 1;
    };
  };
 
  return sumEvenElement / countEvenElement;
 
}
averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9);
averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35);
averageEvenElementsWorker();

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
    func(...arrOfArr[i]);
    const result = func(...arrOfArr[i]);
  
    if (result > maxWorkerResult) {
      maxWorkerResult = result;
    };
  };
  
  return maxWorkerResult;
};
