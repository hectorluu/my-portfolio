import { forwardRef } from 'react'
import {Spinner} from "@nextui-org/react";

export const MiniRoomSpinner = () => (
  <Spinner
    size="lg"
    className='absolute left-[50% top-[50%] ml-[calc(0px - var(--spinner-size) / 2)] mt-[calc(0px - var(--spinner-size))]'
  />
)

export const MiniRoomContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
    className="mini-room"
    m="auto"
    mt={['-20px', '-60px', '-120px']}
    mb={['-40px', '-140px', '-200px']}
    w={[280, 480, 640]}
    h={[280, 480, 640]}
    position="relative"
  >
    {children}
  </div>
))

MiniRoomContainer.displayName = "Mini Room"; // Add a displayName

const Loader = () => {
  return (
    <MiniRoomContainer>
      <MiniRoomSpinner />
    </MiniRoomContainer>
  )
}

export default Loader
