import React, {useState} from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const More = ({children, toggle, setToggle}) => {
    return (
        <motion.div className="details" layout>
            {toggle ? children : ''}
        </motion.div>
    )
}

export default More