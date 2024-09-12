"use client"
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React, { useEffect } from "react";

export default function Home() {
  // ++use async up d function//async
  //useEffect(()=> {
  //   const getData= async()=>{
  //     try{
  //       const res = await fetch('http://localhost:3000/api/search')
  //       const data = await res.json()
  //       console.log(data)
  //     }
  //     catch(e){
  //       console.log("something wemt wrong")
  //     }
  //   }
  // })
  return (
  <main>
     <Navbar/>
     <Hero/>
  </main>
  );
}
