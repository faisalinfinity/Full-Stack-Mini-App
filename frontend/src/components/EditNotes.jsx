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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAction, updateAction } from "../redux/notes/notesAction";

const EditNotes = ({ id }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.notes);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [date, setdate] = useState("");
  const [currentNotes, setcurrentNotes] = useState({});

  useEffect(() => {
    if (notes) {
      notes.map((el) => {
        if (el._id == id) {
          // setcurrentNotes(el)
          settitle(el.title);
          setdate(el.date);
          setbody(el.body);
        }
        return el;
      });
    }
  }, []);

  const handleSave = () => {
    if (token) {
      dispatch(
        updateAction(token, id, {
          title,
          body,
          date,
        })
      );
    } else {
      alert("Invalid User ");
    }
  };

  return (
    <>
      <Button colorScheme={"blue"} onClick={onOpen}>
        Edit
      </Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Notes</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                value={title}
                onChange={(e) => settitle(e.target.value)}
                ref={initialRef}
                placeholder="Title"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Body</FormLabel>
              <Input
                value={body}
                onChange={(e) => setbody(e.target.value)}
                placeholder="Body"
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Date</FormLabel>
              <Input
                value={date}
                onChange={(e) => setdate(e.target.value)}
                placeholder="Date"
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button
              onClick={() => {
                handleSave();
                onClose();
              }}
              colorScheme="blue"
              mr={3}
            >
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default EditNotes;
