import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, Group, Header, CellButton } from '@vkontakte/vkui';

const Day = ({name, id, onBackClick}) => (
    // //const [contextOpened, toggleContext] = useState(true);
    //const [day, selectDay] = useState('Понедельник');



    <Panel id = {id}>
        <PanelHeader left={<PanelHeaderBack onClick={onBackClick} data-to='home'/>}>
            {name}
        </PanelHeader>
        <Group header={<Header mode="secondary">Дни недели</Header>}>
            <CellButton onClick={name = "Понедельник"}>
                Понедельник
            </CellButton>
            <CellButton onClick={name = "Вторник"}>
                Вторник
            </CellButton>
            <CellButton onClick={name = 'Среда'}>
                Среда
            </CellButton>
            <CellButton onClick={name='Четверг'}>
                Четверг
            </CellButton>
            <CellButton onClick={name='Пятница'}>
                Пятница
            </CellButton>
            <CellButton onClick={name='Суббота'}>
                Суббота
            </CellButton>
        </Group>
    </Panel>
);

Day.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired
}

export default Day;