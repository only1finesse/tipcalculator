import React from 'react';
import { useState } from 'react';

const inputBorder = "input w-full flex flex-col gap-6 px-4 ";
const labelWrapper = "label-wrapper flex flex-col md:flex-row justify-between px-1";
const inpText = "inp-text py-2 w-full border-2 border-white focus:border-cyan-500 rounded-lg placeholder-blueGray-500 placeholder-opacity-75 h-auto text-2xl text-right px-4 font-semibold bg-blueGray-100 focus:outline-none";
const inputWrapper = "input-wrapper flex flex-row items-center relative"
const iconImage = "absolute left-4 top-4";
const btn = "text-center text-cyan-50 bg-cyan-900 text-2xl font-bold rounded py-2 pr-0 active:bg-teal-400 active:text-cyan-900 w-4/6 cursor-pointer hover:bg-teal-200 hover:text-cyan-900";




const BillContainer = ({inputBillHandler}) => {

    return (
        <div className={inputBorder}>
            <div className="bill-container mb-2 ">
                <div className={labelWrapper}>
                    <label className="text-lg font-semibold" htmlFor="inp-bill"> Bill </label>
                </div>
                <div className={inputWrapper}>
                    <input className={inpText} type="text" name="inp-bill" id="inp-bill" placeholder="0.0" onChange={inputBillHandler} />
                    <img className={iconImage} src="images/icon-dollar.svg" alt="dollar" />
                </div>
            </div>
            <div className="tip container">
                <div className={labelWrapper}>
                    <label className="text-lg font-semibold" htmlFor="inp-tip"> Select Tip % </label>
                </div>
                <div className="btn-wrapper grid grid-cols-2 md:grid-cols-3 gap-4">
                    <div className={`${btn}`}> 5% </div>
                    <div className={`${btn}`}> 10% </div>
                    <div className={`${btn}`}> 15% </div>
                    <div className={`${btn}`}> 25% </div>
                    <div className={`${btn}`}> 50% </div>
                    <input className="text-center placeholder-cyan-800 placeholder-opacity-70 bg-blueGray-50 text-2xl font-bold rounded py-2 focus:outline-none border-2 border-white focus:border-cyan-500 w-4/6" type="text" name="inp-tip" id="inp-tip" placeholder="Custom" />
                </div>
            </div>
            <div className="people-container items-center">
                <div className={labelWrapper}>
                    <label className="text-lg font-semibold" htmlFor="inp-people"> Number of People </label>
                    <div className="error-msg text-red-400 text-lg font-semibold"> Can't be zero </div>
                </div>
                <div className={inputWrapper}>
                    <input className={inpText} type="text" name="inp-people" id="inp-people" placeholder="1" />
                    <img className={iconImage} src="images/icon-person.svg" alt="dollar" />
                </div>
            </div>
        </div>
    )
} 

export default BillContainer 


