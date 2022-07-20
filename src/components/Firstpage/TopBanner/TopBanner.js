import React, {useState} from "react";
import "./TopBanner.css";

const TopBanner = () => {
    return (
        <div className='fp_top_banner_box'>
            <div className={'f_r_b fp_top_banner'}>
                <div className={'f_r_l banner_left'}>
                    <div className={'tb_icon'}></div>
                    <div className={'tb_title_box'}>
                        <div className={'tb_title'}>Sperax DAO is calling all veSPA stakers!</div>
                        <div className={'tb_sub_title'}>
                            <p>Participate in governance discussion on <a className={'link'}
                                                                          href={'https://forum.sperax.io/'}
                                                                          target={'_blank'}>Forum</a></p>
                            <p>Cast your veSPA votes on <a className={'link'}
                                                           href={'https://snapshot.org/#/speraxdao.eth'}
                                                           target={'_blank'}>Snapshot</a></p>
                        </div>
                    </div>
                </div>
                <a className={'learn_more_btn'} href={'https://docs.sperax.io/governance'} target={'_blank'}></a>
            </div>
        </div>
    )
}

export default TopBanner