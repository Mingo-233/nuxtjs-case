// declare var n: number;
// declare let s: string;
// declare function f(s: string): number;
// declare enum dir {
//     top,
//     right,
//     bottom,
//     left
// }
import { NuxtCookies } from 'cookie-universal-nuxt';

interface ExtendTypes {
    // $cookies: NuxtCookies;
    // $cookies: any;
  }
  
declare module 'vue/types/vue' {
    interface Vue extends ExtendTypes {}
  }
  

declare module '@nuxt/types' {
    interface NuxtAppOptions extends ExtendTypes {}
    interface Context extends ExtendTypes {}
  }
  