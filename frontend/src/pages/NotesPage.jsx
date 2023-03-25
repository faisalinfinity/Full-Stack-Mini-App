import { Box, Button, Center, Heading, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr,  } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddNotes from '../components/AddNotes'
import { getAction } from '../redux/notes/notesAction'

const NotesPage = () => {
const dispatch=useDispatch()
const {notes}=useSelector(state=>state.notes)
const {token}=useSelector(state=>state.auth)
console.log(notes)
useEffect(()=>{
    if(token){
        dispatch(getAction(token))
    }
},[token])
  return (
   <Box w="90%" margin={"auto"}>
    <Center><Heading>My Notes</Heading></Center>
    <br />
    <br /><AddNotes/>
    <br />
    <br />
    <TableContainer>
  <Table variant='striped' colorScheme='teal'>
    <TableCaption>My notes</TableCaption>
    <Thead>
      <Tr>
        <Th>Title</Th>
        <Th>Body</Th>
        <Th>Edit</Th>
        <Th>Delete</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Thead>
    <Tbody>
        {notes?.map((el)=>{
            return  <Tr>
            <Td>{el.title}</Td>
            <Td>{el.body}</Td>
            <Td>Edit</Td>
            <Td>Delete</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
        })}
     
      
    </Tbody>
    
  </Table>
</TableContainer>
   </Box>
  )
}

export default NotesPage