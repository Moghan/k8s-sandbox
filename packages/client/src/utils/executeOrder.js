export const attack = (unit) => {
    console.log("execute attack");
    return {
        description: `${unit.name} attacked ${unit.order.target}`
    }
}

export const defend = () => {
    console.log("execute defend");
}