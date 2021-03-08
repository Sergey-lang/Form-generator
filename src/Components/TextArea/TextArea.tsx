import React, {ChangeEvent, DetailedHTMLProps, KeyboardEvent, TextareaHTMLAttributes} from 'react'

import s from './TextArea.module.scss'

type DefaultTextAreaPropsType = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

type TextAreaPropsType = DefaultTextAreaPropsType & {
    onEnter?: () => void
    onChangeText?: (value: string) => void
    placeholder?: string
}

export const TextArea: React.FC<TextAreaPropsType> =
    ({
         className,
         onChange,
         onKeyPress,
         onEnter,
         onChangeText,
         placeholder,

         ...restProps
     }) => {

        const onChangeCallback = (e: ChangeEvent<HTMLTextAreaElement>) => {
            onChange
            && onChange(e)

            onChangeText && onChangeText(e.currentTarget.value)
        }

        const onKeyPressCallback = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            onKeyPress && onKeyPress(e)

            e.key === 'Enter'
            && onEnter
            && onEnter()
        }
        const finalClassName = `${s.default} ${className}`
        return (
            <>
            <textarea className={finalClassName}
                      onChange={onChangeCallback}
                      onKeyPress={onKeyPressCallback}
                      placeholder={placeholder}

                      {...restProps}/>
            </>
        )
    }


