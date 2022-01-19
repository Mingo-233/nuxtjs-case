export const state = () => ({
    counter: 0
  })
  
  export const mutations = {
    increment(state:any) {
      state.counter++
    },
    printName(state:any,payload:number){
      console.log('your name is '+payload);
      
    }
  }
  enum nick{
    slie='slie',
    mike='mike'
  }


  let a:nick=nick.mike
  console.log(a);
  