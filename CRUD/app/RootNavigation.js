import * as React from 'react';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

// import * as React from 'react';

// export const isMountedRef = React.createRef();

// export const navigationRef = React.createRef();

// export function navigate(name, params) {
//   if (isMountedRef.current && navigationRef.current) {
//     // Perform navigation if the app has mounted
//     navigationRef.current.navigate(name, params);
//   } else {
//     // You can decide what to do if the app hasn't mounted
//     // You can ignore this, or add these actions to a queue you can call later
//   }
// }

// const navigationRef = React.createRef();

// function navigate(name, params) {
//   navigationRef.current && navigationRef.current.navigate(name, params);
// }