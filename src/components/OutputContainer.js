import React from 'react';

const lineOutput = "flex items-center justify-between my-4";
const title = "text-cyan-50 text-lg font-semibold";
const desc = "text-blueGray-400 text-l font-semibold";
const value = "text-teal-400 font-bold text-3xl";
const btn = "text-center text-cyan-50 bg-cyan-900 text-2xl font-bold rounded py-2 pr-0 active:bg-teal-400 active:text-cyan-900";


const OutputContainer = () => {
    return (
        <div className="output bg-cyan-900 w-full rounded-2xl p-8 md:flex md:flex-col md:justify-between md:w-11/12">
            <div className="line-wrapper ">
                <div className={`${lineOutput}`}>
                    <div className="title-wrapper">
                        <div className={`${title}`}> Tip Amount </div>
                        <div className={`${desc}`}>/ person </div>
                    </div>
                    <div className={`${value}`}>$4.27</div>
                </div>
                <div className={`${lineOutput}`}>
                    <div className="title-wrapper">
                        <div className={`${title}`}> Total </div>
                        <div className={`${desc}`}>/ person </div>
                    </div>
                    <div className={`${value}`}>$32.79</div>
                </div>
            </div>
            <div className={`bg-teal-400 text-cyan-900 ${btn} uppercase`}> Reset </div>
        </div>
    );
}

export default OutputContainer;

