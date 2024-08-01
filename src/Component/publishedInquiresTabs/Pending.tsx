"use client"
import React, { useState } from 'react'
import Styles from "./publishedInquiresTabs.module.css"
import ButtonComp from '../Button'
import CommonTable from '../CommonTable';
import { Col, Row } from 'react-bootstrap';

const Pending = () => {
    const [listView, setListView] = useState(false);

    return (
        <div className={Styles.totalTabMain}>
            <div className={`d-flex w-100 justify-content-between align-items-center mb-4 ${Styles.tblHeader}`}>
                <div className={`d-flex gap-2 ${Styles.SearchInputMain}`}>
                    <input className={Styles.SearchInput} placeholder="Search product by name, id, category" />
                    <div className={Styles.filterButton}>
                        <p>Filter</p>
                        <i className="bi bi-filter"></i>
                    </div>
                </div>
                <div className='d-flex gap-2'>
                    <ButtonComp text='List View' className={listView === false ? 'darkButton' : "outlineButton"} onClick={() => setListView(false)} />
                    <ButtonComp text='Card view' className={listView === true ? 'darkButton' : "outlineButton"} onClick={() => setListView(true)} />
                </div>
            </div>

        </div>
    )
}

export default Pending