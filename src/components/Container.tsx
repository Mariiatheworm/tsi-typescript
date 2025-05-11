import { ReactNode } from "react"

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className='py-4 bg-amber-300 lg:px-[300px] flex-1 max-w-full px-8'>
      {children}
    </div>
  )
}

export default Container
