import React from 'react'
import Styles from "./common.module.css"
import { Image } from 'react-bootstrap'

export const VendorsCard = ({ data, onClick }: { data: any, onClick?: () => void }) => {

    return (
        <>
            {data.map((item, i) => (

                <div className={Styles.VendorsCard} key={i}>
                    <Image src={item?.src} alt="" height={40} width={40} />
                    <div className=''>
                        <p onClick={onClick} className='cursor-pointer'>{item?.text}</p>
                        <div className='d-flex align-items-center gap-2'>
                            <span>CID : {item?.cid}</span>
                            <span>{item?.shipments} Shipments</span>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )

}


export const VendorsCardList = ({ data, onClick }: { data: any, onClick?: () => void }) => {
    return (
        <div className={Styles.VendorsMain}>
            <h1>Popular Vendors</h1>
            <div className={Styles.VendorsCardMain}>
                <VendorsCard data={data} onClick={onClick} />
            </div>
        </div>
    )
}

