import { Grid, GridItem, Tabs } from "@chakra-ui/react";
import React, { createContext, useState } from "react";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

export const FriendContext = createContext();

const Home = () => {
  const [friendList, setFriendList] = useState([
    { username: "John Doe", connected: false },
    { username: "Chang Min", connected: true },
    { username: "Kevin", connected: true },
  ]);
  return (
    <FriendContext.Provider value={{ friendList, setFriendList }}>
      <Grid templateColumns="repeat(10, 1fr)" h="100vh" as={Tabs}>
        <GridItem colSpan="3" borderRight="1px solid gray">
          <Sidebar />
        </GridItem>
        <GridItem colSpan="7">
          <Chat />
        </GridItem>
      </Grid>
    </FriendContext.Provider>
  );
};

export default Home;
