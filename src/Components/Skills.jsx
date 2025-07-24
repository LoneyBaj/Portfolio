import Card from './Card'
import csharp from "../assets/Images/csharp.png"
import html from "../assets/Images/html.png"
import css from "../assets/Images/css.png"
import js from "../assets/Images/js.png"
import ts from "../assets/Images/ts.png"
import react from "../assets/Images/react.png"
import mongodb from "../assets/Images/mongodb.png"
import nodejs from "../assets/Images/nodejs.png"
import sql from "../assets/Images/sql.png"
import ex from "../assets/Images/ex.png"
import tw from "../assets/Images/tw.png"
import dotnet from "../assets/Images/dotnet.png"
import Atropos from 'atropos/react'
import docker from "../assets/Images/docker.png"
import nextjs from "../assets/Images/nextjs.png"
import github from "../assets/Images/github.png"
import gcp from "../assets/Images/gcp.png"
import python from "../assets/Images/py.png"
import postman from "../assets/Images/postman.png"
import bash from "../assets/Images/bash.png"
import git from "../assets/Images/git.png"

export default function Skills() {
  return (
    <div className='w-full p-4 md:p-8 flex justify-center'>
      <div className='w-full fade-in max-w-[1400px] grid grid-cols-2 md:grid-cols-4 gap-8'>
        <Card image={html} title="HTML"/>
        <Card image={css} title="CSS"/>
        <Card image={js} title="Javascript"/>
        <Card image={ts} title="Typescript"/>
        <Card image={csharp} title="C#"/>
        <Card image={react} title="React"/>
        <Card image={mongodb} title="MongoDB"/>
        <Card image={tw} title="Tailwind"/>
        <Card image={nodejs} title="NodeJS"/>
        <Card image={ex} title="ExpressJS"/>
        <Card image={sql} title="SQL"/>
        <Card image={dotnet} title=".NET"/>
        <Card image={docker} title="Docker"/>
        <Card image={nextjs} title="NextJS"/>
        <Card image={git} title="Git"/>
        <Card image={github} title="Github"/>
        <Card image={gcp} title="Google Cloud"/>
        <Card image={python} title="Python"/>
        <Card image={postman} title="Postman"/>
        <Card image={bash} title="Bash"/>
      </div>
    </div>
  )
}
