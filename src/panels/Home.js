import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Div from '@vkontakte/vkui/dist/components/Div/Div'

import Icon56NewsfeedOutline from '@vkontakte/icons/dist/56/newsfeed_outline';

const Home = (props) => (
	<Panel id={props.id}>
    <PanelHeader>
        Дневник студента
    </PanelHeader>
    <Div>
      Тут будет главная страница
    </Div>
    <Div>
      <Icon56NewsfeedOutline/>
    </Div>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
	today: PropTypes.string.isRequired
};

export default Home;
