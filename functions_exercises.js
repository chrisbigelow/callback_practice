class Clock {

  constructor() {
    const date = new Date();
    this.hours = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    this.seconds++;
    this.printTime();
  }


}

// const clock = new Clock();


const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




const addNumbers = function (sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {

    reader.question('Enter a number:', (num) => {
      sumCode(sum, parseInt(num));
    });
    const sumCode = function(x, y){
      x += y;
      console.log(x);
      addNumbers(x, numsLeft - 1, completionCallback);
    };

   }
   else {
     completionCallback(sum);
   }

};

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));



const test = function(bool) {
  console.log(bool);
};


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}? `, (res) => {
    if (res === 'yes'){
      callback(true);
    }
    else {
      callback(false);
    }
  });
}



// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {

  if (i === (arr.length - 1)){
    outerBubbleSortLoop(madeAnySwaps);
    return;
  }

    askIfGreaterThan(arr[i],arr[i+1], function (isGreaterThan) {
      if (isGreaterThan){
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        madeAnySwaps = true;
      }
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });


}

// askIfGreaterinnerBubbleSortLoop([8,4,5,9,3,2,7,8], 0, false, test);


// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

const absurdBubbleSort = function (arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps){
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    }
    else {
      sortCompletionCallback(arr);
    }
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  outerBubbleSortLoop(true);
};



absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});











//
