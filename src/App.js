import React, { useState } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar'
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem'
import '@vkontakte/vkui/dist/vkui.css';

import Icon36HomeOutline from '@vkontakte/icons/dist/36/home_outline';
import Icon36Article from '@vkontakte/icons/dist/36/article';

import Home from './panels/Home';
import Days from './panels/WeekDays';

function getWeekDay() {
    var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    var day = new Date().getDay();

    return days[day];
}

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [activeStory, setActiveStory] = useState('today')
	const [lastPressedDay, setLastPressedDay] = useState(null);

	var date = getWeekDay();

	const setLPD = e => {
		setLastPressedDay(e.currentTarget.dataset.day)
	}

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to)
	}

	const onStoryChange = e => {
		setActiveStory(e.currentTarget.dataset.story)
	}

	return (
		<Epic activeStory={activeStory} tabbar={
			<Tabbar>
				<TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'today'}
				data-story='today'
				text='Сегодня'>
					<Icon36HomeOutline />
				</TabbarItem>
				<TabbarItem
				onClick={onStoryChange}
				selected={activeStory === 'week'}
				data-story='week'
				text='Неделя'>
					<Icon36Article />
				</TabbarItem>
			</Tabbar>
		}>

			<View id='today' activePanel={activePanel}>
				<Home id='home' go={go} today={date}/>
			</View>

			<View id='week' activePanel={activePanel}>
				<Days id='home' day={date} lastPD={lastPressedDay} setLPD={setLPD}/>
			</View>
		</Epic>
	);
}

export default App;

/*
	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);
*/