import {
  Box,
  Button,
  Center,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddNotes from "../components/AddNotes";
import EditNotes from "../components/EditNotes";
import { deleteAction, getAction } from "../redux/notes/notesAction";

const NotesPage = () => {
  const dispatch = useDispatch();
  const { notes } = useSelector((state) => state.notes);
  const { token } = useSelector((state) => state.auth);
  console.log(notes);
  useEffect(() => {
    if (token) {
      dispatch(getAction(token));
    }
  }, [token]);
  return (
    <Box w="90%" margin={"auto"}>
      <Center>
        <Heading>My Notes</Heading>
      </Center>
      <br />
      <br />
      <AddNotes />
      <br />
      <br />
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>My notes</TableCaption>
          <Thead>
            <Tr>
              <Th>Title</Th>
              <Th>Body</Th>
              <Th>Edit</Th>
              <Th>Delete</Th>
            </Tr>
          </Thead>
          <Tbody>
            {notes?.map((el,i) => {
              return (
                <Tr key={i}>
                  <Td>{el.title}</Td>
                  <Td>{el.body}</Td>
                  <Td>
                    <EditNotes id={el._id} />
                  </Td>
                  <Td>
                    <Button
                      onClick={() => dispatch(deleteAction(token, el._id))}
                      colorScheme={"red"}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default NotesPage;
