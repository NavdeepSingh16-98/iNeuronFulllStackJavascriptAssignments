import { useCallback, useEffect, useState } from "react";
import { useKeyPressEvent } from "react-use";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Input,
  VStack,
  StackDivider,
} from "@chakra-ui/react";

import "./search.css";
import ActionList from "../actionList/ActionList";
import actionListData from "../../../constants/actionListData";

export default function Search(props) {
  const { isOpen, onClose, onOpen } = props;
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [action, setAction] = useState(actionListData);

  const hideSearch = useCallback(() => {
    onClose();
    setFocusedIndex(0);
    setAction(actionListData);
  }, [onClose, setFocusedIndex]);

  useEffect(() => {
    setAction(actionListData);
    setSearchQuery("");
  }, [isOpen]);

  useKeyPressEvent((e) => {
    if (!isOpen && e.key === "k" && (e.metaKey || e.ctrlKey)) {
      e.stopPropagation();
      e.preventDefault();
      onOpen();
    }
    return true;
  });

  useKeyPressEvent("Escape", hideSearch);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus
      blockScrollOnMount
      closeOnEsc
      closeOnOverlayClick
      size={"3xl"}
      className="search-model"
      style={{ zIndex: 1700 }}
    >
      <ModalOverlay
        bg="blackAlpha.300"
        backdropFilter="blur(5px)"
        style={{ zIndex: 1400 }}
      />
      <ModalContent style={{ zIndex: 1700 }} className="search-content">
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={1}
          align="stretch"
        >
          <Input
            placeholder="Search commands (ex. Change theme)"
            className="search-bar"
            variant="outline"
            focusBorderColor="transparent"
            px={3}
            py={4}
            borderBottomWidth="1px"
            borderBottomStyle="solid"
            autoFocus
            rounded="none"
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <ActionList
            focusedIndex={focusedIndex}
            setFocusedIndex={setFocusedIndex}
            onClose={onClose}
            searchQuery={searchQuery}
            setAction={setAction}
            action={action}
          />
        </VStack>
      </ModalContent>
    </Modal>
  );
}
