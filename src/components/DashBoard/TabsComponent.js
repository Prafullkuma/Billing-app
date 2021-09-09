import React  from 'react'

import ContentOfTable from './TabsTwo/ContentOfTable'
import { Typography } from '@material-ui/core';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabsComponent=({allCustomers,allBills,allProducts})=>{
    const style={
        marginTop:'40px'
    }
    return(
        <>
            <div style={style}>
                    <Typography variant="h4" component="h2">    
                        Dashboard Details
                    </Typography>
            <br/>
                <Tabs>
                        <TabList>
                                <Tab> <h3 style={{color:'dodgerblue'}}>Details</h3></Tab>
                                <Tab> <h3 style={{color:'dodgerblue'}}>Contents</h3></Tab>
                                <Tab><h3 style={{color:'dodgerblue'}}>Graph</h3></Tab>
                        </TabList>
                        <TabPanel>
                            <h2>Transaction  Details</h2>
                        </TabPanel>
                        <TabPanel>
                                <ContentOfTable allCustomers={allCustomers} allBills={allBills} allProducts={allProducts} />
                        </TabPanel>

                        <TabPanel>
                            <h2>Graph</h2>
                        </TabPanel>
                    </Tabs>

            </div>
            
        </>
    )
}

export default TabsComponent