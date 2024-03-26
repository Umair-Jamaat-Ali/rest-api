"use client"

import { useState } from "react";


export default function Form() {


    const [firstName, setFirsttName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [ password, setPassword] = useState('');
    const [ re_password, setRe_password] = useState('');

  return (
    <>
    <div>Form</div>
    <div>
        <form>
        <div>
            <label>Name</label>
            <input type='text' onChange={(e)=>setFirsttName(e.target.value)} placeholder='enter your name'/>
            </div>
            <div>
            <label>Last Name</label>
            <input type='text' onChange={(e)=>setLastName(e.target.value)} placeholder='enter your last name'/>
            </div>
            <div>
            <label>E-mail</label>
            <input type='text' onChange={(e)=>setEmail(e.target.value)} placeholder='enter your last name'/>
            </div>
            <div>
            <label>Password</label>
            <input type='text' onChange={(e)=>setPassword(e.target.value)} placeholder='enter your password'/>
            </div>
            <div>
            <label>Re-password</label>
            <input type='text' onChange={(e)=>setRe_password(e.target.value)} placeholder='enter your re-password'/>
            </div>
        </form>
    </div>
    </>
  )
}
