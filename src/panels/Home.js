import React from 'react';
import PropTypes from 'prop-types';
import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {SheduleForToday} from './SheduleForToday'

const PHome = ({id, db, day}) => {
  return (
    <Panel id={id}>
      <PanelHeader>
          Дневник студента
      </PanelHeader>
      <SheduleForToday db={db} day={day}/>
    </Panel>
  )
}

const Home = ({id, db}) => {
    const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    const activePanel  = 'home';
    const day = days[new Date().getDay()];

    return (
        <View id={id} activePanel={activePanel}>
            <PHome id='home' db={db} day={day}/>
        </View>
    )
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Home;
