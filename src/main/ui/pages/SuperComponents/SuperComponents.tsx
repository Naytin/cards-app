import React, {ChangeEvent} from 'react'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperSelect from "../../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../common/c6-SuperRadio/SuperRadio";
import SuperRange from "../../common/c7-SuperRange/SuperRange";
// import SuperDoubleRange from "../../common/c8-SuperDoubleRange/SuperDoubleRange";
import Preloader from "../../common/preloader/Preloader";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";
import MessageInform from "../../common/MessageInform/MessageInform";
import Button from "../../common/Button/Button";
import s from './SuperComponents.module.scss'


const SuperComponents = () => {
    const [range, setRange] = React.useState<number[]>([0, 100]);
    const [value, setValue] = React.useState<string>('Change');
    const [min, max] = [...range]

    const onChangeRange = (value: number) => {
        setRange([value, max])
    }

    const changeValue = (e: any) => {
        console.log(e.currentTarget.value)
        setValue(e.currentTarget.value)
    }

    const handleChange = (event: React.ChangeEvent<{}>, value: number[] | number) => {
        setRange(value as number[]);
    };

    const click = () => {
        alert('clicked on SuperButton')
    }
    return (<div className={s.wrapper}>
            <h1>ALL Components</h1>
            <div><SuperButton onClick={click}>click me</SuperButton></div>
            <div><Button >Button</Button></div>
            <div><SuperInputText/></div>
            <div><SuperCheckbox/></div>
            <div><SuperEditableSpan value={value} onChange={changeValue}/></div>
            <div><SuperSelect options={['one','two', 'three']}/></div>
            <div><SuperRadio/></div>
            <div><SuperRange
                onChangeRange={onChangeRange}
                value={min}
                // сделать так чтоб value1 изменялось
            /></div>
            <div style={{position: 'relative', display: 'flex', justifyContent: 'center', marginBottom: '100px'}}><MessageInform>Error Message</MessageInform></div>

            {/*<SuperDoubleRange*/}
            {/*    // value={range}*/}
            {/*    range={range}*/}
            {/*    handleChange={handleChange}*/}
            {/*    // сделать так чтоб value1 и value2 изменялось*/}
            {/*/>*/}
            <Preloader/>
        </div>
    )
}

export default SuperComponents