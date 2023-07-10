function getSum() {
    const A = document.getElementById("soA").value;
    const B = document.getElementById("soB").value;
    let sum = 0;
  
    for (let i = A; i <= B; i++) {
      let flag = true;
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          flag = false;
          break;
        }
      }
      if (i > 1 && flag === true) {
        console.log(i);
        sum += i;
      }
    }
  
    document.getElementById("result").textContent = "Ket qua la:" + sum;
  }
  
  document.getElementById("button").addEventListener("click", () => {
    getSum();
  });