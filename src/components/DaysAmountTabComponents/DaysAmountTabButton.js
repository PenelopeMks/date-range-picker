import React, { useState } from 'react';
import '../../styles/DaysAmountTabStyles/days-amount-tab-button.css';
import { useDaysAmountTab, useLanguage } from '../../context/InitialParametersContext';
import { getOpacityColorStyle } from '../../utils/generalUtils';
import { DaysAmountTab } from './DaysAmountTab';

const chooseDaysAmount = require("../../images/choose-days-amount.png");

export function DaysAmountTabButton(props) {
    const { 
        setSelectedDays,
        boardsNum,
        datesHeaderStateDispatch,
        lowerfooterState, 
    } = props;

    const selectedColor = lowerfooterState.selectedColor;
    const [showDaysAmountTab, setShowDaysAmountTab] = useState(false);
    const language = useLanguage();
    const enableDaysAmountTab = useDaysAmountTab();
    console.log(enableDaysAmountTab);
    console.log(showDaysAmountTab);
    const style = getOpacityColorStyle(selectedColor, 60);
    let templateClassName = "days-amount-tab-button-template";
    if (showDaysAmountTab) {
        templateClassName += " show-tab"
    }
    
    const handleClick = () => {
        setShowDaysAmountTab(!showDaysAmountTab);
    }
    console.log(enableDaysAmountTab === "enabled");

    return (
        <>
            { enableDaysAmountTab === "enabled" && 
                <div 
                    className={templateClassName} 
                    lang={language}
                >
                    <div 
                        className="days-amount-tab-button-div" 
                        style={style}
                        lang={language}
                        onClick={handleClick}
                    >
                        <img 
                            className="days-amount-icon"
                            alt="Choose Days Amount"
                            lang={language}
                            src={chooseDaysAmount}
                        />
                    </div>
                </div>
            }
            { showDaysAmountTab &&
                <DaysAmountTab
                    lowerfooterState={lowerfooterState}
                    setSelectedDays={setSelectedDays}
                    boardsNum={boardsNum}
                    datesHeaderStateDispatch={datesHeaderStateDispatch}
                />
            }
        </>
    )
}
        