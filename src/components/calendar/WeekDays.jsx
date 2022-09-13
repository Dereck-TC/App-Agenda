import React from 'react'
import Title from './Title'

export default function WeekDays() {
    // Reto: Generar la fecha actual y mostrar en la interfaz
    // Reto: Al dar click, mostrar hora y fecha del click
    const currentdate = new Date()
    let oneJan = new Date(currentdate.getFullYear(),0,1)
    let numberOfDays = Math.floor((currentdate - oneJan) / (24 * 60 * 60 * 1000))
    let result = Math.ceil(( currentdate.getDay() + 1 + numberOfDays) / 7)
    let week = result;
    const fecha = new Date(currentdate.getFullYear(), 0, (week-1) * 7 + 2)
    let days = ['DO', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

    
  return (
    <>   
        <Title>Horario</Title>
        {days.map((day) => {
          return <Title>{day} {fecha.getDate() + days.indexOf(day)}</Title>
        })}
        {/* <Title>{days[0]} {fecha.getDate()}</Title>
        <Title>{days[1]} {fecha.getDate() + 1}</Title>
        <Title>{days[2]} {fecha.getDate() + 2}</Title>
        <Title>{days[3]} {fecha.getDate() + 3}</Title>
        <Title>{days[4]} {fecha.getDate() + 4}</Title>
        <Title>{days[5]} {fecha.getDate() + 5}</Title>
        <Title>{days[6]} {fecha.getDate() + 6}</Title> */}
    </>
  )
}
