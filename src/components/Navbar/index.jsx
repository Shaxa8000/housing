import React from 'react';
import {Container, Wrapper, Section, Logo, Link, Main} from './style';
import { navbar } from '../../utils/navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import { Button } from '../Generic';
import Filter from '../Filter';


const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={()=> navigate('/home')} logo={true}>
             <Logo/><h3>Houzing</h3>
          </Section>
          <Section>
            {navbar.map(({title, path, id}, index) => {
              return <Link className={({isActive}) => isActive && 'active'} key={index} to={path}>{title}</Link>
            })}
          </Section>
          <Section>
            <Button type='dark'>Sign In</Button>
          </Section>
        </Wrapper>
      </Main>
        <Filter/>
        <Outlet/>
    </Container>
  )
};

export default Navbar