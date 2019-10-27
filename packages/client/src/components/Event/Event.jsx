import * as React from 'react';
import styled from 'styled-components';
import { connect } from  'react-redux';
import { setOrder } from '../../redux/actions/battle';


const EventEl = styled.div`
    margin: 2  auto;
    background-color: grey;
    height: 4rem;
    width: 14rem;
`

const Event = ({event}) => {
    return <EventEl>{`${event.description}`}</EventEl>
}

export default Event;
