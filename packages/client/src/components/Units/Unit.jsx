import * as React from 'react';
import styled from 'styled-components';
import { connect } from  'react-redux';
import { setTarget } from '../../redux/actions/battle';

const UnitEl = styled.div`
    display: flex;
    padding: 5px;
    margin: 20px;
    height: 6rem;
    box-sizing: border-box;
    flex-direction: column;
    flex: 0 1 8rem;
    background-color: red;
    justify-content: space-between;
    cursor: move;
`

const UnitHeader = styled.div`
    display:flex;
    justify-content: space-between;
`

const Name = styled.div`
    font-weight: bold;
    width: 4rem;
`

const Number = styled.div`
`

const Order = styled.div`
    display:flex;
    justify-content: space-between;
`

const OrderTitle = styled.div`
    font-weight: bold;
`

const OrderValue = styled.div`
`

const Unit = ({unit, setTarget}) => {
    const dragStart = (e) => {
        e.dataTransfer.setData("text", e.target.id);
        console.log("dragStart", e.target.id);
    }

    const drop = (e) => {
        const unit = parseInt(e.dataTransfer.getData("text"));
        const target = parseInt(e.target.id);
        if(!target) return;
        console.log("u", unit, "t", target);
        setTarget(unit, target);
    }

    const dragOver = (e) => {
        e.preventDefault();
        console.log("dragOver", e.target.id);
    }

    return (
        <UnitEl id={unit.id} draggable onDragStart={(e) => dragStart(e)} onDragOver={(e) => dragOver(e)} onDrop={(e) => drop(e)}>
            <UnitHeader>
                <Name>{unit.name}</Name>
                <Number>{unit.number}</Number>
            </UnitHeader>
            <Order>
                <OrderTitle>{unit.order.order}</OrderTitle>
                <OrderValue>{unit.order.target}</OrderValue>
            </Order>
        </UnitEl>
    );
}

const dispatchToProps = (dispatch) => ({
    setTarget: (u, t) => dispatch(setTarget(u, t))
});

export default connect(null, dispatchToProps)(Unit);