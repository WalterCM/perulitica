import {useState} from 'react';

import Button from './UI/Button';
import Modal from './UI/Modal';
import PartyEditor from './PartyEditor';

import './Menu.css'

const Menu = () => {
    const [showNewGame, setShowNewGame] = useState(false);
    const [showTutorial, setShowTutorial] = useState(false);

    const newGameHandler = () => {
        console.log('NewGameHandler')
        setShowNewGame(true)
    };

    const onStartNewGame = () => {
        console.log("onStartNewGame")
    };

    const tutorialHandler = () => {
        console.log('tutorialHandler')
        setShowTutorial(true)
    };

    const creditsHandler = () => {
        console.log('creditsHandler')
    };

    const onCancel = () => {
        setShowNewGame(false)
        setShowTutorial(false)
    };

    let modal = null;

    if (showNewGame) {
        modal = (
            <Modal
                title="Nuevo Juego"
                onConfirm={{text: "Empezar", action: onStartNewGame}}
                onCancel={{action: onCancel}}
            >
                <PartyEditor />
            </Modal>
        )
    }

    return (
        <div className="Menu">
            {modal}
            <Button className="MenuButton" onClick={newGameHandler}>Nuevo juego</Button>
            <Button className="MenuButton" onClick={tutorialHandler}>Tutorial</Button>
            <Button className="MenuButton" onClick={creditsHandler}>Creditos</Button>
        </div>
    )
};

export default Menu;
