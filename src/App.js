import React, { useState } from 'react';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar'
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem'
import '@vkontakte/vkui/dist/vkui.css';

import Icon36HomeOutline from '@vkontakte/icons/dist/36/home_outline';
import Icon36Article from '@vkontakte/icons/dist/36/article';

import Home from './panels/Home';
import Shedule from './panels/Shedule';

const App = () => {
	const [activeStory, setActiveStory] = useState('today')

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
				selected={activeStory === 'shedule'}
				data-story='shedule'
				text='Неделя'>
					<Icon36Article />
				</TabbarItem>
			</Tabbar>
		}>

			<Home id='today'/>
			<Shedule id='shedule'/>
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