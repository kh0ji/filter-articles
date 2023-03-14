
import React from 'react'
import { Form } from 'react-bootstrap';
import { optionsProps } from '../typings';

interface filterProps {
    options: optionsProps[]
    onChange: (value: optionsProps) => void
}
function Filters({ options, onChange }: filterProps) {

    return (
        <Form.Select onChange={({ target }) => {
            let value = options?.find(option => option.value === target.value)
            if (value) {
                onChange(value)
            }
        }}>
            {options.map((option) => {
                return <option key={option.id} value={option.value}>{option.name}</option>
            })}
        </Form.Select>
    )
}



export default Filters
