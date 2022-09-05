import styled from 'styled-components';

const Containerleft = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    display: inline-block;
    position: absolute;

    @media (max-width: 667px){
        width: 0%;
    }
`
export default Containerleft;