import React, { useState } from 'react';
import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar'
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem'
import '@vkontakte/vkui/dist/vkui.css';

import Icon36HomeOutline from '@vkontakte/icons/dist/36/home_outline';
import Icon36Article from '@vkontakte/icons/dist/36/article';
import Icon36Add from '@vkontakte/icons/dist/36/add';

import Home from './panels/Home';
import Week from './panels/Week';
import Form from './panels/Form';

const TBarItem = ({onClick, story, text, selected, icon}) => {
	return (
		<TabbarItem onClick={onClick} selected={selected === story}	data-story={story} text={text}>
				{icon}
		</TabbarItem>
	)
}

const TBar = ({onClick, selected}) => {
	return (
	<Tabbar>
		<TBarItem story='today' text='Сегодня' onClick={onClick} selected={selected} icon={<Icon36HomeOutline/>}/>
		<TBarItem story='week' text='Неделя' onClick={onClick} selected={selected} icon={<Icon36Article/>}/>
		<TBarItem story='form' text='Добавить занятие' onClick={onClick} selected={selected} icon={<Icon36Add/>}/>
	</Tabbar>
	)
}

const App = () => {
	const db = window.openDatabase('studentdiaryshedule', '1.0', 'Database for shedule in student diary.', 1*1024*1024);
	const [activeStory, setActiveStory] = useState('today');

	const onStoryChange = e => {
		setActiveStory(e.currentTarget.dataset.story)
	}


	return (
		<Epic activeStory={activeStory} tabbar={
			<TBar selected={activeStory} onClick={onStoryChange} />
			}>

			<Home id='today' db={db}/>
			<Week id='week' db={db}/>
			<Form id='form' db={db}/>
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