// import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
// export default (phase, { defaultConfig }) => {
//   /**
//    * @type {import('next').NextConfig}
//    */
//
//   if (phase === 'PHASE_DEVELOPMENT_SERVER') {
//     return {
//       /* development only config options here */
//       env: {
//         testKey: 'prodcution test key'
//       }
//     }
//   }
//
//   return  {
//     /* config options local here */
//     env: {
//       testKey: 'local test key'
//     },
//   }
// }



const { PHASE_PRODUCTION_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_PRODUCTION_SERVER) {
    return {
      /* development only config options here */
      env: {
        testKey: 'production test key'
      },
    }
  }

  return {
    /* config options for all phases except development here */
    env: {
      testKey: 'development test key'
    },
  }
}

