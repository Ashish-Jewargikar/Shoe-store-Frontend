import React from 'react'

const Wrapper = ({children,className}) => {
  return (
    <div className={`w-full max-w-[1200px] px-2 md:px-0 mx-auto ${className} || "" `}>
      {children}
    </div>
  )
}  

export default Wrapper

