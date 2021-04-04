import React, { useState } from 'react'
import {Form, Button, } from 'react-bootstrap'
import useHttp from '../hooks/http.hook'

export default function UslugiPage() {

  const [form, setForm] = useState({
    tip:'', /*drive:''*/ src:'', /*title:''*/ number:''
  })
  const {loading,error,request} = useHttp(); 
  const changeHandler = event =>{
    setForm({...form,[event.target.name]:event.target.value})
  }

  const sendHandler = async()=>{
    try {
      console.log(1)
      const data = await request('/api/razr/sendlightbox', 'POST', {...form})
      
    } catch (e) {}
  }
  return (
    
    <Form className="w-25 container-fluid">
                <Form.Group controlId="formBasicTip">
                    <Form.Label>Tip</Form.Label>
                    <Form.Control type="tip" placeholder="Enter email" name="tip" value={form.tip} onChange={changeHandler}/>
                    <Form.Text className="text-muted">
                    We'll never share your Tip with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>src</Form.Label>
                    <Form.Control type="src" placeholder="src" name="src" value={form.src} onChange={changeHandler}/>
                </Form.Group>
                {/* <Form.Group controlId="formBasicPassword">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="drive" placeholder="title" name="title" value={form.title} onChange={changeHandler}/>
                </Form.Group> */}
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>number</Form.Label>
                    <Form.Control type="number" placeholder="number" name="number" value={form.number} onChange={changeHandler}/>
                </Form.Group>
                
                
                <Button variant="primary" type="submit" onClick={sendHandler} disabled={loading}>
                    ОТПРАВИТЬ
                </Button>
             </Form>
  )
}