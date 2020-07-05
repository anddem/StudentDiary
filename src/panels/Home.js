import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import CellButton from '@vkontakte/vkui/dist/components/CellButton/CellButton';

const Home = (props) => (
	<Panel id={props.id}>
    <PanelHeader>
        Дневник студента
    </PanelHeader>
    <CellButton onClick={props.go} data-toview='week' data-topanel='weekdays'>
      Перейти на View 2
    </CellButton>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
	today: PropTypes.string.isRequired
};

export default Home;
