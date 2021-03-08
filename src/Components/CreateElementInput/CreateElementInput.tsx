import React, {ChangeEvent} from 'react';
import s from './CreateElementInput.module.scss';
import {Input} from '../Input/Input';
import Button from '../Button/Button';

type PropsType = {
    label: string
    value: string
    changeValue: (value: string) => void
    createElementCallback: () => void
}

export const CreateElementInput: React.FC<PropsType> = React.memo((
    {
        label,
        value,
        changeValue,
        createElementCallback
    }
) => {
    console.log(`${label} rerender`)
    const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeValue(e.currentTarget.value)
    }

    const btnHandler = () => {
        createElementCallback()
    }

    return (
        <div className={s.input_wrapper}>
            <Input type='number' onChange={inputHandler} label={label} value={value}/>
            <div className={s.createBtn_wrapper}>
                <Button onClick={btnHandler}>BUILD</Button>
            </div>
        </div>
    );
})
