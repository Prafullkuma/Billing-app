import React  from 'react'

import ContentOfTable from './TabsTwo/ContentOfTable'
import TransactionDetails from './Details/TransactionDetails'
import Graph from './Graph/Graph'

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
                            <TransactionDetails 
                                allCustomers={allCustomers}
                                allBills={allBills}
                                allProducts={allProducts}    
                            />
                        </TabPanel>
                        <TabPanel>
                                <ContentOfTable allCustomers={allCustomers} allBills={allBills} allProducts={allProducts} />
                        </TabPanel>

                        <TabPanel>
                            <Graph allBills={allBills}/>
                        </TabPanel>
                    </Tabs>

            </div>
            
        </>
    )
}

export default TabsComponent