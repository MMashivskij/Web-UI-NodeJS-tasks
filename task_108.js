const task_108 = (n) => {
  if(n <= 0) {
    return 1;
  } else {
    let i = 1
    for(i; n >= 2; i++) {
      n /= 2;
    }
    return 2**i;  
  }
}