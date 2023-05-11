class Statistics {
  constructor(numbers) {
    this.numbers = numbers;
  }
  count() {
    return this.numbers.length;
  }
  sum() {
    return this.numbers.reduce((a, b) => a + b);
  }
  min() {
    let min = this.numbers[0];
    for (let i = 0; i < this.numbers.length; i++) {
      if (min > this.numbers[i]) {
        min = this.numbers[i]
      }
    }
    return min;
  }
  max() {
    let max = this.numbers[0];
    for (let i = 0; i < this.numbers.length; i++) {
      if (max < this.numbers[i]) {
        max = this.numbers[i]
      }
    }
    return max;
  }
  range() {
    return this.max() - this.min();;
  }
  mean() {
    return Math.round(this.sum() / this.count())
  }
  median() {
    return this.numbers.sort()[Math.floor(this.count() / 2)];
  }
  mode() {
    let mode = []
    let max = 0
    let maxIdx = 0
    this.numbers.forEach((item) => {
      if (mode[item] === undefined) {
        mode[item] = 1;
      } else {
        mode[item] += 1;
      }
      if (max < mode[item]) {
        max = mode[item]
        maxIdx = item
      }
    })
    return { 'mode': maxIdx, 'count': max }
  }
  var() {
    let mean = this.mean();
    let variance = 0
    this.numbers.forEach((item) => {
      variance += Math.pow(item - mean, 2)
    })
    return variance / this.count()
  }
  std() {
    return Math.sqrt(this.var());
  }
  freqDist() {
    let freqDist = {};
    this.numbers.forEach((item) => {
      if (freqDist[item] === undefined) {
        freqDist[item] = 1;
      } else {
        freqDist[item] += 1;
      }
    })
    return freqDist;
  }
  describe() {
    console.log('Count:', this.count())
    console.log('Sum: ', this.sum())
    console.log('Min: ', this.min())
    console.log('Max: ', this.max())
    console.log('Range: ', this.range())
    console.log('Mean: ', this.mean())
    console.log('Median: ', this.median())
    console.log(`Mode: (${this.mode().mode}, ${this.mode().count})`)
    console.log('Variance: ', this.var())
    console.log('Standard Deviation: ', this.std())
    console.log('Frequency Distribution: ', this.freqDist())
  }
}

ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
let statistics = new Statistics(ages)

// console.log('Count:', statistics.count()) // 25
// console.log('Sum: ', statistics.sum()) // 744
// console.log('Min: ', statistics.min()) // 24
// console.log('Max: ', statistics.max()) // 38
// console.log('Range: ', statistics.range()) // 14
// console.log('Mean: ', statistics.mean()) // 30
// console.log('Median: ', statistics.median()) // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
// console.log('Variance: ', statistics.var()) // 17.5
// console.log('Standard Deviation: ', statistics.std()) // 4.2
// console.log('Frequency Distribution: ', statistics.freqDist()) // [(20.0, 26), (16.0, 27), (12.0, 32), (8.0, 37), (8.0, 34), (8.0, 33), (8.0, 31), (8.0, 24), (4.0, 38), (4.0, 29), (4.0, 25)]

statistics.describe()

