import { TabPanel, TabPanels, VStack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { FriendContext } from "./Home";

const Chat = () => {
  const { friendList } = useContext(FriendContext);
  return friendList.length > 0 ? (
    <VStack>
      <TabPanels>
        <TabPanel>Friend One</TabPanel>
        <TabPanel>Friend Two</TabPanel>
      </TabPanels>
    </VStack>
  ) : (
    <VStack
      justify="center"
      pt="5rem"
      w="100%"
      textAlign="center"
      fontSize="lg"
    >
      <TabPanels>
        <TabPanel>No friends. Click add friend to start chatting</TabPanel>
      </TabPanels>
    </VStack>
  );
};

export default Chat;
