import React from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import SheduleForToday from './SheduleForToday'

const PHome = ({id, db}) => {
  return (
    <Panel id={id}>
      <PanelHeader>
          Дневник студента
      </PanelHeader>
      <SheduleForToday db={db}/>
    </Panel>
  )
}

const Home = ({id, db}) => { //Главная страница приложения
    return (
        <View id={id} activePanel='home'>
            <PHome id='home' db={db}/>
        </View>
    )
};

export default Home;
