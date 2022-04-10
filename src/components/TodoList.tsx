import React, { useState } from "react";
import { IsState as Props } from '../interfaces'

interface InputProps {
    people: Props['people']
    setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

const TodoList: React.FC<InputProps> = ({ people, setPeople }) => {
    const [input, setInput] = useState({
        name: "",
        age: "",
        url: "",
        note: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (): void => {
        if (
            !input.name || !input.age || !input.url
        ) {
            return
        }

        setPeople([
            ...people, {
                name: input.name,
                age: parseInt(input.age),
                url: input.url,
                note: input.note
            }
        ])

        setInput({
            name: "",
            age: "",
            url: "",
            note: ""
        })
    }

    return (
        <div className="AddToList">
            <input
                type="text"
                placeholder="Name"
                name="name"
                className="AddToList-input"
                value={input.name}
                onChange={handleChange}
            />

            <input
                type="text"
                placeholder="Age"
                name="age"
                className="AddToList-input"
                value={input.age}
                onChange={handleChange} />

            <input
                type="text"
                placeholder="Image Url"
                name="url"
                className="AddToList-input"
                value={input.url}
                onChange={handleChange} />

            <input
                type="text"
                placeholder="Notes"
                name="note"
                className="AddToList-input"
                value={input.note}
                onChange={handleChange} />

            <button type="submit" className="AddToList-btn" onClick={handleClick}>Add To List</button>
        </div>
    )
}

export default TodoList;