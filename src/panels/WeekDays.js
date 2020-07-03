import React from 'react';
import PropTypes from 'prop-types';
import { Panel, PanelHeader, PanelHeaderBack, PanelHeaderContent } from '@vkontakte/vkui';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';

const Day = props => (
    <Panel id = {props.id}>
        <PanelHeader left={<PanelHeaderBack onClick={props.onBackClick} data-to='home'/>}>
            {/* <PanelHeaderContent
              aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
              onClick={this.toggleContext}
            >
                {props.name}
            </PanelHeaderContent> */}

            {props.name}
        </PanelHeader>

        Тело панели {props.name}
    </Panel>
);

Day.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired
}

export default Day;