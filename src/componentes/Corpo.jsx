import React from 'react'
import Jumbotron from './sections/Jumbotron'
import Sobre from './sections/Sobre'
import Pratos from './sections/Pratos'
import Sobremesas from './sections/Sobremesas'
import Lanches from './sections/Lanches'
import Delivery from './sections/Delivery'
import Local from './sections/Local'

export default function Corpo(){
  return (
    <section>
      <Jumbotron/>
      <Sobre/>
      <Pratos/>
      <Sobremesas/>
      <Lanches/>
      <Delivery/>
      <Local/>
    </section>
  )
}