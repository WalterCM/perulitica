import {useState} from 'react';

import './PartyLogoPicker.css';


const PartyLogoPicker = (props) => {
    const [logos, setLogos] = useState(['A', 'B', 'C']);
    const [index, setIndex] = useState(0)

    const onLeft = (event) => {
        let newIndex = index;
        if (--newIndex < 0) {
            newIndex = logos.length - 1
        }

        setIndex(newIndex)
    };

    const onRight = (event) => {
        let newIndex = index;
        if (++newIndex >= logos.length) {
            newIndex = 0
        }

        setIndex(newIndex)
    };

    return (
        <div className="PartyLogoPicker">
            <button className="arrow" onClick={onLeft}>{"<"}</button>
            <span className="LogoPreview">{logos[index]}</span>
            <button className="arrow" onClick={onRight}>{">"}</button>
        </div>
    )
};

export default PartyLogoPicker;
