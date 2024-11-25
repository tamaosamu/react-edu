import { Box, Button, Stack, Switch, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Link } from "react-router-dom";
import './App.css';

function App() {

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const onSubmit = () => {
    console.log(username)
    console.log(password)
    const http = axios.create({
      baseURL: 'http://localhost:8080',
    })

    // 异步处理， 日语：非同期处理
    // http://localhost:8080/api/doLogin
    http.post("/api/doLogin", {
      userName: username,
      password: password
    }).then(({status, data}) => { // resources
      // 正常返回的数据
      console.log(status)
      // 200 201 OK

      if (status === 200) {
        alert(data)
      }else{
      // 404 500
        console.log(status)
      }
    }).catch(() => {
      // 异常返回的数据
    })

  }

  return (
    <>
      <Box bgcolor="white" sx={{
        p: 2
      }}>
        <Typography variant="h5" component="h5" color="textPrimary">Sign in</Typography>
        <Typography sx={{
          marginBottom: 2
        }} variant="h6" component="h6" color="textSecondary">Welcome, please sign in to continue</Typography>
        <Stack useFlexGap spacing={2}>
          <TextField size="small"  label="Username" variant="outlined" onChange={(evt) => setUsername(evt.currentTarget.value)} />
          <TextField size="small"  label="Password" variant="outlined" onChange={(evt) => setPassword(evt.currentTarget.value)} />
          <Switch defaultChecked />
          <Button variant='contained' onClick={()=> onSubmit}>Login</Button>
          <Link to={"/register"}>
            Register
          </Link>
        </Stack>
      </Box>
    </>
  )
}

export default App
