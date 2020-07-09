import React, {useState} from 'react'
import {List, Cell, SimpleCell} from '@vkontakte/vkui'

const DeleteNode = ({db, note}) => {
    db.transaction(
        t=> {
            t.executeSql('DELETE FROM shedule WHERE subject = ? day = ? week = ? time = ? teacher = ? notes = ?',
            [note.subject, note.day, note.week, note.time, note.teacher, note.notes])
        }
    )
}

const GeneralList = ({db, shedule}) => {
    const [removeList, removeCell] = useState(Object.entries(shedule.rows))

    const remove = (note, index) => {
        removeCell([...removeList.slice(0, index), ...removeList.slice(index + 1)])
        DeleteNode(db, note)
    }

    if (shedule.length) {
        const list = removeList.map((note, index) =>
        <Cell key={note} multiline removable onRemove={remove(note, index)}>
            {note.day}
        </Cell>)

        return <List>{list}</List>
    }
    return (<SimpleCell>Занятий нет</SimpleCell>)
}

const CheckShedule = ({db, day}) => {
    const [sheduleList, changeList] = useState(null)
    db.readTransaction(
        t => {
            t.executeSql(
                'SELECT time, subject, teacher FROM shedule WHERE day = ?', [day],
                (t, success) => {
                    if (sheduleList === null) {
                        changeList(<GeneralList db={db} shedule={success}/>)
                    }
                }
            )
        }
    )
    return (sheduleList)
}

export default CheckShedule