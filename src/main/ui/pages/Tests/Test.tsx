import React from 'react'
import SuperButton from "../../common/c2-SuperButton/SuperButton";
import SuperInputText from "../../common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "../../common/c3-SuperCheckbox/SuperCheckbox";
import SuperSelect from "../../common/c5-SuperSelect/SuperSelect";
import SuperRadio from "../../common/c6-SuperRadio/SuperRadio";
import SuperRange from "../../common/c7-SuperRange/SuperRange";
// import SuperDoubleRange from "../../common/c8-SuperDoubleRange/SuperDoubleRange";
import Preloader from "../../common/preloader/Preloader";
import SuperEditableSpan from "../../common/c4-SuperEditableSpan/SuperEditableSpan";

const Test = () => {
    const [range, setRange] = React.useState<number[]>([0, 100]);
    const [min, max] = [...range]

    const onChangeRange = (value: number) => {
        setRange([value, max])
    }

    const handleChange = (event: React.ChangeEvent<{}>, value: number[] | number) => {
        setRange(value as number[]);
    };

    const click = () => {
        alert('clicked on SuperButton')
    }
    return (<>
            <h1>ALL Components</h1>
            <div><SuperButton onClick={click}>click me</SuperButton></div>
            <div><SuperInputText/></div>
            <div><SuperCheckbox/></div>
            <div><SuperEditableSpan value={'change text'}/></div>
            <div><SuperSelect options={['one','two', 'three']}/></div>
            <div><SuperRadio/></div>
            <div><SuperRange
                onChangeRange={onChangeRange}
                value={min}
                // сделать так чтоб value1 изменялось
            /></div>


            {/*<SuperDoubleRange*/}
            {/*    // value={range}*/}
            {/*    range={range}*/}
            {/*    handleChange={handleChange}*/}
            {/*    // сделать так чтоб value1 и value2 изменялось*/}
            {/*/>*/}
            <Preloader/>
        </>
    )
}

export default Test