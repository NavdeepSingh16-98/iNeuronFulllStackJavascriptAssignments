import {
  Icon,
  Text,
  HStack,
  ListItem,
  useMenuDescendant,
} from "@chakra-ui/react";
import { useEffect, useRef } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { BsArrowReturnLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useKeyPressEvent } from "react-use";

export default function ActionCommand(props) {
  const { icon, title, onClick, href, activeIndex, onClose } = props;
  const ref = useRef();
  const navigate = useNavigate();
  const isExternal = href && href.startsWith("http");

  const { register, index } = useMenuDescendant();

  const isFocused = activeIndex === index;

  useEffect(() => {
    if (ref && ref.current) {
      register(ref.current);
    }
  }, [ref, register]);

  const activateItem = () => {
    if (href) {
      if (isExternal) {
        window.open(href, "blank");
      } else {
        navigate(href);
      }
    } else if (onClick) {
      onClick?.();
    }
    onClose();
  };

  useKeyPressEvent("Enter", () => {
    if (isFocused) {
      activateItem();
    }
  });

  return (
    <ListItem
      ref={ref}
      className="list-actionable-item"
      bg={isFocused ? "blackAlpha.50" : "transparent"}
      _hover={{ bg: "blackAlpha.50" }}
      _dark={{
        bg: isFocused ? "whiteAlpha.50" : "transparent",
        _hover: {
          bg: "whiteAlpha.50",
        },
      }}
      cursor="pointer"
      onClick={activateItem}
      rounded="md"
    >
      <HStack className="actionable-item-container">
        <HStack className="actionable-item-text-container">
          <Icon as={icon} />
          <Text>{title}</Text>
          {isExternal && <Icon as={FiArrowUpRight} d="inline" />}
        </HStack>
        {isFocused && (
          <HStack spacing={1}>
            <Text fontSize="xs">Enter</Text>
            <Icon as={BsArrowReturnLeft} h={3} />
          </HStack>
        )}
      </HStack>
    </ListItem>
  );
}
