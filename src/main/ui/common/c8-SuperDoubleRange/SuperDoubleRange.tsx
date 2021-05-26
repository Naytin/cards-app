import React, {DetailedHTMLProps, InputHTMLAttributes} from "react";
import s from "../c7-SuperRange/SuperRange.module.scss";
// import Slider from '@material-ui/core/Slider';

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

type SuperDoubleRangePropsType = DefaultInputPropsType & {
    onChangeRange?: (value: [number, number]) => void
    value?: number[]
    handleChange: (event: React.ChangeEvent<{}>, value: number[] | number) => void
    range: number[]
    // min, max, step, disable, ...
}



const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange,
        value,
        handleChange,
        range,
        // min, max, step, disable, ...
        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    // сделать самому, можно подключать библиотеки

    return (
     <div style={{width: '300px', margin: 'auto'}}>
          {/*<Slider*/}
          {/*    value={range}*/}
          {/*    onChange={handleChange}*/}
          {/*    valueLabelDisplay="auto"*/}
          {/*/>*/}
      </div>

    );
}

export default SuperDoubleRange;
