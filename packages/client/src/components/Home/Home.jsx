import React from 'react';
// import { connect } from 'react-redux';
import styled from 'styled-components';
import { Col } from '../common/common';
import UnitList from '../Units/UnitList';
import { connect } from 'react-redux';
import Battlefield from '../Battlefield';

const PageContainer = styled.div`
    min-height: 100vh;
    background-color: green;
    display: flex;
    flex-direction: column;
`

const ArmyContainer = styled.div`
    background-color: pink;
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
`

const Home = ({units, p1Units, p2Units}) => {
    
    return (
        <PageContainer>
            <ArmyContainer>
                <UnitList units={p1Units}/>
            </ArmyContainer>
            <Battlefield>battlefield</Battlefield>
            <ArmyContainer>
                <UnitList units={p2Units}/>
            </ArmyContainer>
        </PageContainer>
    );
}

const stateToProps = ({battleEngine: be}) => {
    // console.log("state", be);
    const p1Units = be.units.filter((u) => u.armyId === 1);
    const p2Units = be.units.filter((u) => u.armyId === 2);

    return ({
        units: be.units,
        p1Units,
        p2Units
    });
}
  
export default connect(stateToProps)(Home);