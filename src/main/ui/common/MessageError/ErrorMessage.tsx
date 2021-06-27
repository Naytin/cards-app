import React, { HTMLAttributes} from 'react'
import s from './ErrorMessage.module.scss'


const ErrorMessage: React.FC<HTMLAttributes<HTMLDivElement>> = React.memo(({
                                      className,
                                      ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
                                  }) => {

    const finalClassName = `${className ? className : ''} ${s.box__message}`;
    return <div className={finalClassName} {...restProps}/>
})

export default ErrorMessage