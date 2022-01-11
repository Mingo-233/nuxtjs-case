<template>
  <div>
    sss .vue
    {{ msg }}
  </div>
</template>

<script lang="ts">
export default {
  name: "ts",
  data() {
    return {
      msg: "",
    };
  },
  methods: {},
  mounted() {
    (this as any).msg = "dd";
    type TypeA = '123'
type TypeB ={
  a: string
}
type TypeC = {
  c: number
}
type TypeD =TypeB&TypeC
let obj:TypeB={
  a:'22'
}
let nn:TypeA = '123'
// console.log(nn);
// console.log(obj);

let qq:TypeD = {
  a:'pp',
  c:22
}
  },
};

interface People {
  a: string;
  b: string;
}

// 返回 'a' | 'b'
type KeyofPeople = keyof People;
let d:KeyofPeople = 'b'
// type KeyofPeople = 'a' | 'b';

const obj = { a: '123', b: 123 }
type Obj = typeof obj;
let pp:Obj={
  a:'sss',
  b:0
}

enum E1 {
  A,
  B,
  C
}

type TE1 = keyof E1;
/**
拿到的是错误的类型
type TE1 = "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
*/

type TE2 = keyof typeof E1;
let te2:TE2 = 'A'
/**
拿到的是正确的类型
type TE2 = "A" | "B" | "C"
*/

interface Obj1<T> {
  a: T
}
let o1:Obj1<number> = {
  a:312
}
type Fn2 = <T extends number>(...args: any[]) => any;
// 函数泛型
type Fn1 = <T>(...args: any[]) => any;

const ff:Fn2 =function(a,b){
  console.log(a);
  
}
ff('ddd')
</script>

<style scoped></style>
