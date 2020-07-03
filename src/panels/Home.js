import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Group from '@vkontakte/vkui/dist/components/Group/Group';

const Home = ({ id, go, today }) => (
	<Panel id={id}>
		<PanelHeader>Дневник студента</PanelHeader>
		<Group>
			Сегодня {today}
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	today: PropTypes.string.isRequired
};

export default Home;
