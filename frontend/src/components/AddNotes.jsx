import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction } from "../redux/notes/notesAction";

const AddNotes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch=useDispatch()
  const {token}=useSelector(state=>state.auth)

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [title,settitle]=useState("")
  const [body,setbody]=useState("")
  const [date,setdate]=useState("")

  const handleSave=()=>{
    if(token){
        dispatch(addAction(token,{
            title,
            body,date
        }))
    }else{
        alert("Invalid User ")
    }
   
  }

  return (
    <>
      <Button colorScheme={"teal"} onClick={onOpen}>Add Notes</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input onChange={(e)=>settitle(e.target.value)} ref={initialRef} placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Body</FormLabel>
              <Input onChange={(e)=>setbody(e.target.value)} placeholder="Body" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input onChange={(e)=>setdate(e.target.value)} placeholder="Date" />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button onClick={()=>{
                handleSave()
                onClose()
            }} colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AddNotes;
