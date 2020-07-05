import React, { useState } from 'react';
import View from '@vkontakte/vkui/dist/components/View/View';
import Root from '@vkontakte/vkui/dist/components/Root/Root'
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Day from './panels/WeekDays';

function getWeekDay() {
    var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    var day = new Date().getDay();

    return days[day];
}

const App = () => {
	const [activeView, setActiveView] = useState('today');
	const [activePanel, setActivePanel] = useState('home');
	const [activeStory, setActiveStory] = useState('main')

	var date = getWeekDay();

	const go = e => {
		if (e.currentTarget.dataset.toview) {
			setActiveView(e.currentTarget.dataset.toview)
		}
		if (e.currentTarget.dataset.topanel) {
			setActivePanel(e.currentTarget.dataset.topanel)
		}
	}

	return (
		<Root activeView={activeView}>
			<View id='today' activePanel={activePanel}>
				<Home id='home' go={go} today={date}/>
			</View>

			<View id='week' activePanel={activePanel}>
				<Day id='weekdays' go={go} day={date}/>
			</View>
		</Root>
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