import React, {useState} from 'react';
import PropTypes from 'prop-types';
import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';
import Header from '@vkontakte/vkui/dist/components/Header/Header'

const Home = ({id}) => {
  const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
  const today = new Date();

  const [activePanel, setActivePanel] = useState('home');
  const [day, setToday] = useState(days[today.getDay()]);

  return (
    <View id={id} activePanel={activePanel}>
      <Panel id='home'>
        <PanelHeader>
            Дневник студента
        </PanelHeader>
        <Header>
          Сегодня {day}
        </Header>
      </Panel>
    </View>
  )
};

Home.propTypes = {
	id: PropTypes.string.isRequired,
};

export default Home;
