function sum(from, to){
  const summa = from + to;
  /* console.log(summa); */
  return summa;
}

function sravnenie(a,b,c,d){
  const sum1 = sum(a,b);
  const sum2 = sum(c,d);
  if (sum1 > sum2) {
    console.log (true);
  } else {
    console.log(false);
  }
}

sravnenie(-3333,89,-87777,1);