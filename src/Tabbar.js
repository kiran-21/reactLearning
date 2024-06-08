
import { useLayoutEffect } from 'react';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

function Tabbar(){
    
return(
    <div>
        <Tabs>
            <TabList>
                <Tab>One</Tab>
                <Tab>Two</Tab>
                <Tab>Three</Tab>
            </TabList>
            <TabPanels>
                    <TabPanel> <p>one!</p> </TabPanel>
                    <TabPanel><p>two!</p></TabPanel>
                    <TabPanel><p>three!</p></TabPanel>
            </TabPanels>
        </Tabs>
        <h1>This is tab bar</h1>
    </div>
)
}
export default Tabbar;