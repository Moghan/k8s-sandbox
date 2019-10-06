import React from 'react';
// import { connect } from 'react-redux';
import styled from 'styled-components';
import { Col } from '../common/common';

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

const Unit = styled.div`
    padding: 20px;
    margin: 20px;
    box-sizing: border-box;
    flex: 0 1 8rem;
    background-color: red;
    cursor: move;
`

const Home = () => {
    const dragStart = () => {
        console.log("dragStart");
    }

    const drop = () => {
        console.log("drop");
    }

    const dragOver = (e) => {
        e.preventDefault();
        console.log("dragOver");
    }

    return (
        <PageContainer>
            <ArmyContainer>
                <Unit draggable onDragStart={(e) => dragStart(e)} onDragOver={(e) => dragOver(e)} onDrop={drop} className="home">1</Unit>
                <Unit draggable onDragStart={(e) => dragStart(e)} onDragOver={(e) => dragOver(e)} onDrop={drop} className="home">2</Unit>
                <Unit draggable onDragStart={(e) => dragStart(e)} onDragOver={(e) => dragOver(e)} onDrop={drop} className="home">3</Unit>
                <Unit onDragOver={dragOver} onDrop={drop} className="home">4</Unit>
            </ArmyContainer>
            <ArmyContainer>
                <Unit className="home">1</Unit>
                <Unit className="home">2</Unit>
                <Unit className="home">3</Unit>
                <Unit className="home">4</Unit>
            </ArmyContainer>
        </PageContainer>
    );
}

export default Home;