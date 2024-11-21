import React from 'react'

// USING FUNCTION'S PARAMETER INSTEAD OF PROPS
//also giving default cases inside parameter i.e name hoga to ayega warna default wala use hojayega
const Card = ({url=`https://picsum.photos/200/300?random` , name="Unknown", desc="Dont know anything about him/her"}) => {
  return (
    <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 m-4">
          <img
            src={url}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
          />
          <div className="flex flex-col justify-between p-6 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
              <p className="text-gray-400">
                {desc}
              </p>
            </div>
            <button
              type="button"
              className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
            >
              Read more
            </button>
          </div>
        </div>
  )
}

export default Card



// USING PROPS

// import React from 'react'

// const Card = (props) => {
//     console.log(props);
//   return (
//     <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 m-4">
//           <img
//             src={props.url}
//             alt=""
//             className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
//           />
//           <div className="flex flex-col justify-between p-6 space-y-8">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-semibold tracking-wide">{props.name}</h2>
//               <p className="text-gray-400">
//                 {props.desc}
//               </p>
//             </div>
//             <button
//               type="button"
//               className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
//             >
//               Read more
//             </button>
//           </div>
//         </div>
//   )
// }

// export default Card
