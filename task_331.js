const task_331 = (n) => {

  let resulCollection = [];

  for (let i = 1; i < n; i++)
  {
    for (let j = 1; j < n - i * i; j++)
    {
      for (let k = 1; k < n - i * i - j * j; k++)
      {
        if (n == i * i + j * j + k * k) {
          resulCollection.push([i, j, k])
        }
      }
    }
  }

  return resulCollection.length ? resulCollection : `The number ${n} is incorrect`;
}