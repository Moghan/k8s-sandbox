import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { setPrevState, setPhase, createEvents } from '../../redux/actions/battle';
import { attack } from '../../utils/executeOrder';
import Event from '../Event';

const Container = styled.div`
    display: flex;
    background-color: green;
    flex: 1 0 300px;
`

const StartBtn = styled.button`
    width: 9rem;
    height: 6rem;
    color: grey;
    margin: auto auto;
`

const Battlefield = ({ round, phase, units, setPrevState, setPhase, createEvents, events }) => {

    const handleOnClick = () => {
        setPrevState();
        setPhase("executeOrders");
    }

    if (phase === "executeOrders") {
        const events = units.map((u) => attack(u));
        createEvents(events);
        setPhase("initialTODO");
    }

    console.log("evetns", events);
    return (
        <Container >
            { phase === "initial" &&
                <StartBtn onClick={handleOnClick}>Start Round {round}</StartBtn>
            }
            { events && events.map((e) => <Event event={e} /> )}
        </Container>
    )
}

const stateToProps = ({battleEngine: be}) => ({
    units: be.units,
    round: be.round,
    phase: be.phase,
    events: be.events,
})

const dispatchToProps = (dispatch) => ({
    setPrevState: () => dispatch(setPrevState()),
    setPhase: (p) => dispatch(setPhase(p)),
    createEvents: (events) => dispatch(createEvents(events)),
})

export default connect(stateToProps, dispatchToProps)(Battlefield);