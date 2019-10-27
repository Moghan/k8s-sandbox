import * as React from 'react';
import Unit from './Unit';
import styled from 'styled-components';

const UnitList = ({units}) => {
    
    return (
        <>
            { units.map((unit) => <Unit unit={unit} /> )}
        </>
    );
}

export default UnitList;