import { forwardRef } from "react";
import { Box, Spinner } from "@chakra-ui/react";

export const MiniRoomSpinner = () => (
  <Spinner
    size="xl"
    position="absolute"
    left="50%"
    top="50%"
    ml="calc(0px - var(--spinner-size) / 2)"
    mt="calc(0px - var(--spinner-size))"
  />
);

export const MiniRoomContainer = forwardRef(({ children }, ref) => (
  <Box
    ref={ref}
    className="mini-room"
    m="auto"
    mt={["-50px", "-50px", "-50px"]}
    mb={["-40px", "-140px", "-100px"]}
    w={["20rem", "30rem", "40rem"]}
    h={["20rem", "30rem", "40rem"]}
    position="relative"
  >
    {children}
  </Box>
));

MiniRoomContainer.displayName = "MiniRoomContainer"; // Add a displayName

const Loader = () => {
  return (
    <MiniRoomContainer>
      <MiniRoomSpinner />
    </MiniRoomContainer>
  );
};

export default Loader;
