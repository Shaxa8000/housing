import React, {forwardRef} from 'react';
import {Container, Wrapper, Icon} from './style';

export const Input = forwardRef(({
    onChange,
    type,
    placeholder,
    name,
    value,
    defaultValue,
    width,
    height,
    icon},
     ref) => {
  return (
    <Wrapper>
      <Icon>{icon}</Icon>
      <Container
      ref={ref}
      icon={icon}
      onChange={onChange}
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      name={name}
      width={width}
      height={height}
    />
    </Wrapper>
  )
})

export default Input