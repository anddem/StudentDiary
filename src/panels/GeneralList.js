import React, {useState} from 'react'
import {List, Cell, SimpleCell} from '@vkontakte/vkui'

const DeleteNode = (db, note) => {
    console.log(note)
    db.transaction(
        t => {
            t.executeSql('DELETE FROM shedule WHERE subject = ? and day = ? and week = ? and time = ?',
            [note.subject, note.day, note.week, note.time], (e, res) => console.log(res.rows.length))
        }
    )
}

const GeneralList = ({db, shedule}) => {
    const [removeList, removeCell] = useState(Object.entries(shedule.rows))

    const remove = (note, index) => {
        debugger
        removeCell([...removeList.slice(0, index), ...removeList.slice(index + 1)])
        DeleteNode(db, note[1])
    }

    if (shedule.rows.length) {
        const list = removeList.map((note, index) =>
        <Cell key={note} multiline removable onRemove={() => remove(note, index)}>
            {note[1].time} {note[1].subject}
        </Cell>)

        return <List>{list}</List>
    }
    else {
        return (<SimpleCell>Занятий нет</SimpleCell>)
    }
}

const CheckShedule = ({db, day}) => {
    const [sheduleList, changeList] = useState(null)
    db.readTransaction(
        t => {
            t.executeSql(
                'SELECT * FROM shedule WHERE LOWER(day) = ? ORDER BY time', [day],
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