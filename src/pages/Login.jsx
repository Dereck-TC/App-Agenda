import React, { useContext, useRef } from 'react'
import Containerright from "../components/containers/Containerright"
import Containerleft from "../components/containers/Containerleft"
import Form from "../components/forms/Form"
import Input from "../components/forms/Input"
import Title from "../components/headers/Title"
import SubmitButton from "../components/buttons/SubmitButton"
import Flogin from "../components/fondos/flogin"
import Banner from "../components/headers/Banner"
import { authContext } from '../context/AuthContext'
import { themeContext } from '../context/ThemeContext'
// import ThemeButton from '../components/buttons/ThemeButton'
import CheckBox from '../components/buttons/CheckBox'

export default function Login() {

    const email = useRef()
    const password = useRef()
    const {setUser} = useContext(authContext)

    const login = (event) => {
        event.preventDefault()  

        setUser({
            logged: true,
            data: {
                email: email.current.value,
                password: password.current.value
            }
        })
    }

    const { checked, setChecked } = useContext(themeContext)
    
    const toggleThemeChange = () => {
        console.log(checked)
        if (checked === false) {
          localStorage.setItem("theme", "dark");
          setChecked(true);
        } else {
          localStorage.setItem("theme", "light");
          setChecked(false);
        }
    };
  return (
    <>
    <Containerright>
        <Form onSubmit={login}>
            <Title>login</Title>
            <Input ref={email} placeholder="Email" type="email" />
            <Input ref={password} placeholder="Password" type="password" />
            <SubmitButton>Login</SubmitButton>
            {/* <ThemeButton type="checkbox" defaultChecked={checked} onChange={()=>toggleThemeChange()}></ThemeButton> */}
            <CheckBox  defchecked={checked} press={()=>toggleThemeChange()}></CheckBox>
        </Form>
    </Containerright>
    <Containerleft>
        <Flogin>
            <Banner>Bienvenido!! 😎<br/>
                <span>Empieza a organizar tus actividades</span>
            </Banner>
        </Flogin>
    </Containerleft>
    </>
  )
}
