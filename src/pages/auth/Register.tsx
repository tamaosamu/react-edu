import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { DataGridPro, GridColDef, GridRowsProp } from '@mui/x-data-grid-pro';
import axios from 'axios';
import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

// 接口定义
interface RegisterProps {}

const Register: FC<RegisterProps> = (): JSX.Element => {

  const [username, setUsername] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const onSubmit = () => {
    console.log(username)
    console.log(password)
    const http = axios.create({
      baseURL: 'http://localhost:8080',
    })

    // 异步处理， 日语：非同期处理
    http.post("/api/doRegister", {
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

  const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 4, col1: 'Hello', col2: 'World' },
    { id: 5, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 6, col1: 'MUI', col2: 'is Amazing' },
    { id: 7, col1: 'Hello', col2: 'World' },
    { id: 8, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 9, col1: 'MUI', col2: 'is Amazing' },
    { id: 10, col1: 'Hello', col2: 'World' },
    { id: 11, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 12, col1: 'MUI', col2: 'is Amazing' },
    { id: 13, col1: 'Hello', col2: 'World' },
    { id: 14, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 15, col1: 'MUI', col2: 'is Amazing' },
    { id: 16, col1: 'Hello', col2: 'World' },
    { id: 17, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 18, col1: 'MUI', col2: 'is Amazing' },
    { id: 19, col1: 'Hello', col2: 'World' },
    { id: 20, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 21, col1: 'MUI', col2: 'is Amazing' },
  ];

  const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { 
      field: 'col2', 
      headerName: 'Column 2', 
      width: 150,
      editable: true
    },
  ];

  const [columnList, setColumnList] = useState<GridRowsProp>([])

  useEffect(() => {
    setColumnList(rows)
  }, [])

  const [rowList, setRowList] = useState([
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
    { id: 4, col1: 'Hello', col2: 'World' },
    { id: 5, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 6, col1: 'MUI', col2: 'is Amazing' },
    { id: 7, col1: 'Hello', col2: 'World' },
    { id: 8, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 9, col1: 'MUI', col2: 'is Amazing' },
    { id: 10, col1: 'Hello', col2: 'World' },
    { id: 11, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 12, col1: 'MUI', col2: 'is Amazing' },
    { id: 13, col1: 'Hello', col2: 'World' },
    { id: 14, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 15, col1: 'MUI', col2: 'is Amazing' },
    { id: 16, col1: 'Hello', col2: 'World' },
    { id: 17, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 18, col1: 'MUI', col2: 'is Amazing' },
    { id: 19, col1: 'Hello', col2: 'World' },
    { id: 20, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 21, col1: 'MUI', col2: 'is Amazing' },
  ])

  const editing = () => {
    console.log(selectRows)
    const id = selectRows[0] as unknown as number
    const row = rowList.filter(item => item.id === id)
    console.log(row)

    setRowList(row)
    setColumnList(columns.map((column) => {
      column.editable = true
      return column
    }))
  }

  const [selectRows, setSelectRows] = useState<GridRowsProp[]>([])

  const selectRowEvt = (selected) => {
    setSelectRows(selected)
  }

  return <>
      <Box bgcolor="white" sx={{
        p: 2
      }}>
        <Typography variant="h5" component="h5" color="textPrimary">Register</Typography>
        <Typography sx={{
          marginBottom: 2
        }} variant="h6" component="h6" color="textSecondary">Welcome, please input info</Typography>
        <Stack useFlexGap spacing={2}>
          <TextField size="small"  label="Username" variant="outlined" onChange={(evt) => setUsername(evt.currentTarget.value)} />
          <TextField size="small"  label="Password" variant="outlined" onChange={(evt) => setPassword(evt.currentTarget.value)} />
          <Button variant='contained' onClick={()=> onSubmit()}>Register1</Button>
          <Link to={"/"}>
            Login
          </Link>
        </Stack>
      </Box>
      <Box sx={{width: "960px", backgroundColor: "white"}}>
        <Button onClick={() => editing()}>editing</Button>
        <DataGridPro rows={rowList} columns={columnList} onRowSelectionModelChange={selectRowEvt}></DataGridPro>
      </Box>
  </>
}

export default Register

