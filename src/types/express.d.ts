
// import * as express from "express";


// declare global {
//     namespace Express {
//       interface Request {
//         user?: any; // You can replace `any` with a more specific type for `payload` if you know its structure
//       }
//     }
//   }

import 'express';

declare module 'express' {
    interface Request {
        user?: any;
    }
}