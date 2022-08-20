import Links from "./Links/Links";
import Part2 from "./Part2/Part2";
import {Last} from "./Footer.styles";
import GradientCircle from "../GradientCircle/GradientCircle";
import React from "react";

export default function Footer () {
    return (
        <div>
            <Links/>
            <Part2/>
            <Last>
                <p>NFT Powerhouse</p>
                <p>All rights reserved © 2022 Visqorium Labs Inc.</p>
            </Last>
        </div>
    )
}