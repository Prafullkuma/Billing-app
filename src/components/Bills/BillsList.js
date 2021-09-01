import React from 'react'
import BillsListItems from './BillsListItem'
import {getAllBillsAction} from '../../actions/billsAction'

const BillsList=()=>{

    return(
        <div>
            <h1>Bills List</h1>
            <BillsListItems/>
        </div>
    )
}
export default BillsList