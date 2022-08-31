import React from 'react'
import Containerright from "../components/containers/Containerright"
import Containerleft from "../components/containers/Containerleft"
import Form from "../components/forms/Form"
import Input from "../components/forms/Input"
import Title from "../components/headers/Title"
import SubmitButton from "../components/buttons/SubmitButton"
import Flogin from "../components/fondos/flogin"
import Banner from "../components/headers/Banner"

export default function Login() {
  return (
    <>
    <Containerright>
        <Form>
            <Title>login</Title>
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <SubmitButton>Login</SubmitButton>
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
