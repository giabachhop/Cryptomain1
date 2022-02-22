import React from "react";
import Table from "./Table";
import Timer from "./Timer";
import "./Timer.css";
import ConnectWallet from "./Connect";

export default function Buy() {
    return (
        <div>            
            <div className="justify-center items-center min-h-screen bg-white text-center">
            
                <div className="flex justify-center items-center mt-16">
                    <h1 className="text-3xl text-black font-semibold uppercase">Let's countdown for the Pre-sale coming!</h1>
                </div>
                <div className="flex justify-center items-center">
                    <Timer date="12/02/2021" />
                </div>

                <div className="flex justify-center items-center mt-16">
                    <h1 className="text-3xl font-semibold text-black uppercase">Metabot Token Availability</h1>
                </div>
                <div className="flex justify-center items-center mb-12">
                    <Table />
                </div>
            
                <div className="flex justify-center items-center mt-16">
                    <h1 className="text-6xl font-bold text-black uppercase">How to buy?</h1>
                </div>
                <div className="flex justify-center items-center -mt-3 mb-6">
                    <p className="text-xl text-black ">Send the equivalent of BNB to the following wallets</p>
                </div>

                <div className="flex justify-center items-center mt-3">
                    <input className="text-white text-center bg-blue-500 text-xl" type="text" value="Seed Round: 0xbA06f7d910b7C0fFd0F5EaC45d00d78Ef17cf71F" readonly="readonly" />
                </div>
                <div className="flex justify-center items-center -mt-6">
                    <input className="text-white text-center bg-blue-600 text-xl" type="text" value="Private Sale: 0xFeDE12F1F45478111125f0827dE2b073D3c6E4ea
" readonly="readonly" />
                </div>
                <div className="flex justify-center items-center -mt-6">
                    <input className="text-white text-center bg-blue-700 text-xl" type="text" value="Pre-Sale: 0xC7970Af255BDD99afc29Ba362De6E222668020B8
" readonly="readonly" />
                </div>
                <div className="flex justify-center items-center -mt-6">
                    <input className="text-white text-center bg-blue-800 text-xl" type="text" value="Public Sale: 0x9b1aA0c234c889aC7aa9382a3e5F80d5c5Af5510" readonly="readonly" />
                </div>
                <ConnectWallet />

                

            </div>
        </div>
    );
}