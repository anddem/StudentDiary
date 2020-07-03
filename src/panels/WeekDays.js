import React from 'react';
import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';

const Day = ({id, name, onBackClick}) => {
    <Panel>
        <PanelHeader left={<PanelHeaderBack onClick={onBackClick} />}>
            <PanelHeaderContent
              aside={<Icon16Dropdown style={{ transform: `rotate(${this.state.contextOpened ? '180deg' : '0'})` }} />}
              onClick={this.toggleContext}
            >
                {name}
            </PanelHeaderContent>
        </PanelHeader>

        Тело панели {name}
    </Panel>
}

