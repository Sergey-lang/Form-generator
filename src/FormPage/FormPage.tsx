import React, {useState} from 'react';
import {CreateElementInput} from '../Components/CreateElementInput/CreateElementInput';
import {Input} from '../Components/Input/Input';
import {CheckBox} from '../Components/Checkbox/CheckBox';
import {TextArea} from '../Components/TextArea/TextArea';

import s from './FormPage.module.scss'

export const FormPage: React.FC = () => {

    const [input, setInput] = useState<string>('')
    const [checkbox, setCheckbox] = useState<string>('')
    const [textarea, setTextarea] = useState<string>('')

    const [inputElements, setInputElements] = useState<number[]>([])
    const [checkboxElements, setCheckboxElements] = useState<number[]>([])
    const [textareaElements, setTextareaElements] = useState<number[]>([])

    const changeInputValue = (value: string) => {
        setInput(value)
    }

    const changeCheckboxValue = (value: string) => {
        setCheckbox(value)
    }

    const changeTextareaValue = (value: string) => {
        setTextarea(value)
    }

    const createElements = () => {
        setInputElements(createElementsArray(+input))
        setCheckboxElements(createElementsArray(+checkbox))
        setTextareaElements(createElementsArray(+textareaElements))
    }

    const createElementsArray = (value: number): number[] => {
        if (value === 0) {
            return []
        } else {
            const elementsArray = []
            for (let i = 0; i < value; i++) {
                elementsArray.push(i)
            }
            return elementsArray
        }
    }

    return (
        <div className={s.formPage_wrapper}>
            <h1>FORM PAGE</h1>
            <div className={s.inputs_container}>
                <CreateElementInput label={'input'}
                                    value={input}
                                    changeValue={changeInputValue}
                                    createElementCallback={createElements}/>
                <CreateElementInput label={'checkbox'}
                                    value={checkbox}
                                    changeValue={changeCheckboxValue}
                                    createElementCallback={createElements}/>
                <CreateElementInput label={'textarea'}
                                    value={textarea}
                                    changeValue={changeTextareaValue}
                                    createElementCallback={createElements}/>
            </div>
            <form className={s.form_wrapper}>
                <h1 className={s.form_headline}>Form generator</h1>
                <div>
                    {inputElements && inputElements.map((el, i) => {
                        return <Input key={i} type={'input'} label='new input'/>

                    })}
                    <div className={s.checkbox_area}>
                        {checkboxElements && checkboxElements.map((el, i) => {
                            return <CheckBox key={i} type={'checkbox'} label='value'/>
                        })}
                    </div>
                    <div className={s.textarea_block}>
                        {checkboxElements && checkboxElements.map((el, i) => {
                            return <TextArea key={i} placeholder='Your message...'/>
                        })}
                    </div>
                </div>
            </form>
        </div>
    );
}
