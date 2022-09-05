import styled from 'styled-components';

const Containerright = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 auto;
    display: inline-block;
    margin-left: 50%;
    position: absolute;
    background-color: var(--background-color);

    @media (max-width: 667px) {
        width: 100%;
        height: 50%;
        margin-left: 0%;
        background: linear-gradient(125deg, #FFFFFF 0%, #000000 100%), linear-gradient(200deg, #FFD9E8 0%, #FFD9E8 50%, #DE95BA calc(50% + 1px), #DE95BA 60%, #7F4A88 calc(60% + 1px), #7F4A88 75%, #4A266A calc(75% + 1px), #4A266A 100%), linear-gradient(113deg, #FFD9E8 0%, #FFD9E8 40%, #DE95BA calc(40% + 1px), #DE95BA 50%, #7F4A88 calc(50% + 1px), #7F4A88 70%, #4A266A calc(70% + 1px), #4A266A 100%);
        background-blend-mode: overlay, overlay, normal;    
        height: 100%;
    }
`

// eslint-disable-next-line import/no-anonymous-default-export
export default Containerright;
