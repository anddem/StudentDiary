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

const TBarItem = ({onClick, story, text, selected, icon}) => { //Шаблон элемента нижнего меню
	return (
		<TabbarItem onClick={onClick} selected={selected === story}	data-story={story} text={text}>
				{icon}
		</TabbarItem>
	)
}

const TBar = ({onClick, selected}) => { //Нижнее меню
	return (
	<Tabbar>
		<TBarItem story='today' text='Сегодня' onClick={onClick} selected={selected} icon={<Icon36HomeOutline/>}/>
		<TBarItem story='week' text='Неделя' onClick={onClick} selected={selected} icon={<Icon36Article/>}/>
		<TBarItem story='form' text='Добавить занятие' onClick={onClick} selected={selected} icon={<Icon36Add/>}/>
	</Tabbar>
	)
}

const CEpic = ({activeStory, onClick, db}) =>
	<Epic activeStory={activeStory} tabbar={<TBar selected={activeStory} onClick={onClick}/>}>
		<Home id='today' db={db}/>
		<Week id='week' db={db}/>
		<Form id='form' db={db}/>
	</Epic>

const App = () => { //Основа приложения
	const db = window.openDatabase('studentdiaryshedule', '1.0', 'Database for shedule in student diary.', 1*1024*1024); //База данных WebSQL
	const [activeStory, setActiveStory] = useState('today'); //id элемента, который необходимо рендерить в данный момент

	const onStoryChange = e => {
		setActiveStory(e.currentTarget.dataset.story)
	}

	return (
		<CEpic activeStory={activeStory} onClick={onStoryChange} db={db}/>
	);
}

export default App;