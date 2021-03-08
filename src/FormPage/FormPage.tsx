import React, {useCallback, useState} from 'react';
import {Input} from '../Components/Input/Input';
import {CheckBox} from '../Components/Checkbox/CheckBox';
import {TextArea} from '../Components/TextArea/TextArea';
import Button from '../Components/Button/Button';

import s from './FormPage.module.scss'

export const FormPage: React.FC = () => {

    const [input, setInput] = useState<string>('')
    const [checkbox, setCheckbox] = useState<string>('')
    const [textarea, setTextarea] = useState<string>('')

    const [inputElements, setInputElements] = useState<number[]>([])
    const [checkboxElements, setCheckboxElements] = useState<number[]>([])
    const [textareaElements, setTextareaElements] = useState<number[]>([])

    //handlers
    const changeInputValue = useCallback((value: string) => {
        setInput(value)
    }, [input])
    const changeCheckboxValue = useCallback((value: string) => {
        setCheckbox(value)
    }, [checkbox])
    const changeTextareaValue = useCallback((value: string) => {
        setTextarea(value)
    }, [textarea])

    //create dom elements
    const createElements = () => {
        setInputElements(createElementsArray(+input))
        setCheckboxElements(createElementsArray(+checkbox))
        setTextareaElements(createElementsArray(+textarea))
    }

    //create array
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

    //map
    const mappedInputs = inputElements && inputElements.map((el, i) => {
        return <Input key={i} type={'input'} label='new input'/>
    })
    const mappedCheckBox = checkboxElements && checkboxElements.map((el, i) => {
        return <CheckBox key={i} type={'checkbox'} label='value'/>
    })
    const mappedTArea = textareaElements && textareaElements.map((el, i) => {
        return <TextArea key={i} placeholder='Your message...'/>
    })

    return (
        <div className={s.formPage_wrapper}>
            <h1>FORM PAGE</h1>
            <div className={s.inputs_container}>
                <div className={s.input_wrapper}>
                    <Input label={'input'}
                           value={input}
                           onChangeText={changeInputValue}/>
                    <div className={s.createBtn_wrapper}>
                        <Button onClick={createElements}>BUILD</Button>
                    </div>
                </div>
                <div className={s.input_wrapper}>
                    <Input label={'checkbox'}
                           value={checkbox}
                           onChangeText={changeCheckboxValue}/>
                    <div className={s.createBtn_wrapper}>
                        <Button onClick={createElements}>BUILD</Button>
                    </div>
                </div>
                <div className={s.input_wrapper}>
                    <Input label={'textarea'}
                           value={textarea}
                           onChangeText={changeTextareaValue}/>
                    <div className={s.createBtn_wrapper}>
                        <Button onClick={createElements}>BUILD</Button>
                    </div>
                </div>
            </div>
            <form className={s.form_wrapper}>
                <h1 className={s.form_headline}>Form generator</h1>
                <div>
                    {
                        mappedInputs
                    }
                    <div className={s.checkbox_area}>
                        {
                            mappedCheckBox
                        }
                    </div>
                    <div className={s.textarea_block}>
                        {
                            mappedTArea
                        }
                    </div>
                </div>
            </form>
        </div>
    );
}
