import styled from "styled-components";

const Banner = styled.div`
    margin-top: 30%;
    position: absolute;
    width: 90%;
    padding: 30px 0px 30px 50px;
    font-size: 2.5rem;
    font-weight: bold;
    color: var(--primary-color);

    @media (max-width: 667px) {
        width: 100%;
        font-size: 1.5rem;
        position: fixed;
        margin-top: 10%;
    }
`

export default Banner;