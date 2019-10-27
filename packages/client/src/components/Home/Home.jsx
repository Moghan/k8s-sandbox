import React from 'react';
// import { connect } from 'react-redux';
import styled from 'styled-components';
import { Col } from '../common/common';
import UnitList from '../Units/UnitList';
import { connect } from 'react-redux';

const PageContainer = styled.div`
    min-height: 100vh;
    background-color: green;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const ArmyContainer = styled.div`
    background-color: pink;
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
`

const Home = ({units, pOne, pTwo}) => {
    
    return (
        <PageContainer>
            <ArmyContainer>
                <UnitList units={units}/>
            </ArmyContainer>
            <ArmyContainer>
                <UnitList units={units}/>
            </ArmyContainer>
        </PageContainer>
    );
}

const stateToProps = ({battleEngine}) => {
    console.log("state", battleEngine);
    return ({
        units: battleEngine.units,
        pOne: battleEngine.pOne,
        pTwo: battleEngine.pTwo        
    });
}
  
export default connect(stateToProps)(Home);