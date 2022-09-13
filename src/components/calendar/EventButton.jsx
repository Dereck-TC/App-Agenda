import styled from "styled-components";

const Button = styled.div`
    background-color: var(--secondary-color);
    height: 100%;
    border: 1px solid var(--color-rose-2);
`

export default function EventButton({hour}) {
    const createEvent = ()=>{
        alert("Click: "+hour)
    }
    return (
        <Button onClick={createEvent}></Button>
    )
}