import {useState} from 'react';

import './PartyNamePicker.css';

const PartyNamePicker = (props) => {
    const [defaultNames, setDefaultNames] = useState(['Partido del pueblo', 'Partido democratico de pelados', 'OPRA'])
    const [name, setName] = useState('')

    const onChangeHandler = (event) => {
        setName(event.target.value)
    };

    const onUpdateHandler = () => {
        const rand = Math.random()
        setName(defaultNames[Math.trunc(rand * defaultNames.length)])
    };

    return (
        <div className="PartyNamePicker">
            <label className="label" htmlFor="party_name">Nombre del partido</label>
            <div className="name">
                <input className="input" value={name} onChange={onChangeHandler} id="party_name" type="text" />
                <button className="update" onClick={onUpdateHandler}>R</button>
            </div>
        </div>
    )
};

export default PartyNamePicker;
