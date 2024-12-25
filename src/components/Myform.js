import { Button, Container, Input } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserSlice } from "../redux/slice/user";
import { addUserSlice, editUserSlice } from "../redux/slice/users";
import { nanoid } from "@reduxjs/toolkit";
import { CREATE_USER, UPDATE_USER_BY_ID } from "../redux/types";

const MyForm = () => {
    // const [user, setUser] = useState({
    //     id: 0,
    //     name: '',
    //     email: '',
    //     password: '',
    // });
    const dispatch = useDispatch();
    const user = useSelector(state => state.user)
    const handleChange = (prop) => (event) => {
        dispatch(setUserSlice({ ...user, [prop]: event.target.value }))
    }
    const handleSunmit = () => {
        console.log("user", user);
       // user.id === 0 ?  dispatch(addUserSlice({...user, id:nanoid(8)})) : dispatch(editUserSlice(user)) 
        user.id === 0 ?  dispatch({type:CREATE_USER, user:{...user, id:nanoid(8)}}) : dispatch({type:UPDATE_USER_BY_ID, user}) 
        
        dispatch(setUserSlice(
            {
                id: 0,
                name: '',
                email: '',
                password: '',
            }
        ));

    }
    return (
        <>
            <Container>
                <Input value={user.id} fullWidth disabled />
                <Input onChange={handleChange('name')} placeholder="Enter Name" value={user.name} fullWidth />
                <Input onChange={handleChange('email')} placeholder="Enter Email" value={user.email} fullWidth />
                <Input onChange={handleChange('password')} placeholder="Enter Password" value={user.password} fullWidth />
                <Button onClick={handleSunmit} fullWidth variant="contained">Submit</Button>

            </Container>
        </>
    )
};

export default MyForm;