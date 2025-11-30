function workWithParam(a: string | undefined, b: number, c: boolean) {
  console.log(a);
  console.log(b);
  console.log(c);
}
workWithParam("test", 12, true);

workWithParam(undefined, 12, true);

function workWithParam2(data: { a?: string; b?: number; c?: boolean }) {
  console.log(data.a);
  console.log(data.b);
  console.log(data.c);
}
workWithParam2({ c: true });
