import React from "react";
import { CirclePicker } from "react-color";
import {calendarConfig} from '../configuration/config';
import '../styles/lower-footer.css';

const rightHandIcon = require('../images/right-hand.png');

export const LowerFooter = (props) => {

    const {
        id,
        selectedColor, 
        showColorPicker, 
        setSelectedColor, 
        setShowColorPicker} = props;

    const changeColor = (color) => {
        setSelectedColor(color.hex);
        setShowColorPicker(false);
        localStorage.setItem("selectedColor", color.hex);
    }

    const toggleColorPicker = () => {
        const toggled = !showColorPicker;
        setShowColorPicker(toggled);
    }

    return (
    <div className="settings">
        {id === 0 && !showColorPicker && (
            <button
                style={{ backgroundColor: selectedColor }}
                onClick={toggleColorPicker}
                className="picker-toggler"
            ></button>
        )}

        {showColorPicker && (
            <div className="color-picker" onClick={toggleColorPicker}>
                <img
                    alt=""
                    src={rightHandIcon}
                    className="hand-right"
                />
                <CirclePicker
                    colors={calendarConfig.pickableColors}
                    circleSize={15}
                    circleSpacing={3}
                    onChangeComplete={changeColor}
                    width="150px"
                />
            </div>
        )}
    </div>
    );
}