import styled from "styled-components";

const Layout = styled.div`
    display: grid;
    grid-template-columns: repeat(8,1fr);
    grid-template-rows: repeat(24,50px);
    margin: 50px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow:  -20px 20px 60px #bebebe,
                20px -20px 60px #ffffff;
`

export default Layout