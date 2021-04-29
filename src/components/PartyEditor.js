import {Fragment} from 'react'
import PartyLogoPicker from './UI/PartyLogoPicker';
import PartyNamePicker from './UI/PartyNamePicker';

const PartyEditor = () => {
    return (
        <Fragment>
            <PartyLogoPicker />
            <PartyNamePicker />
        </Fragment>
    )
};

export default PartyEditor;