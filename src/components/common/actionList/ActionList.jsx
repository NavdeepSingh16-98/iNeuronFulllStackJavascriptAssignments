import { useEffect } from "react";
import { List, ListItem, Text, useMenu, useColorMode } from "@chakra-ui/react";
import { createDescendantContext } from "@chakra-ui/descendant";
import { useKeyPressEvent } from "react-use";

import "./actionList.css";
import actionListData from "../../../constants/actionListData";
import ActionCommand from "./ActionCommand";
import ICONS from "../../../constants/icons";

export const [
  MenuDescendantsProvider,
  useMenuDescendantsContext,
  useMenuDescendants,
  useMenuDescendant,
] = createDescendantContext();

export default function ActionList(props) {
  const {
    focusedIndex,
    setFocusedIndex,
    onClose,
    searchQuery,
    setAction,
    action,
  } = props;
  const { descendants } = useMenu();
  const { colorMode, toggleColorMode } = useColorMode();

  const filterCommands = (query) => {
    setFocusedIndex(0);
    if (query?.lenght !== 0) {
      const data = actionListData.map((ele) => ({
        ...ele,
        children: ele.children?.filter((e) =>
          e.key.includes(query.toLowerCase())
        ),
      }));
      setAction(data);
    } else {
      console.log(query);
      setAction(actionListData);
    }
  };

  useEffect(() => {
    filterCommands(searchQuery);
  }, [searchQuery]);

  const actionItemGrid = (data, section, activeIndex) =>
    data?.map((command) => {
      if (section === "pages") {
        const { key, title, link } = command;

        return (
          <ActionCommand
            onClose={onClose}
            activeIndex={activeIndex}
            key={key}
            title={title}
            icon={ICONS.RIGHT_ARROW}
            href={link}
          />
        );
      } else if (section === "social") {
        const { key, title, link, icon } = command;

        return (
          <ActionCommand
            onClose={onClose}
            activeIndex={activeIndex}
            key={key}
            title={title}
            icon={icon}
            href={link}
          />
        );
      } else if (section === "youtube-links") {
        const { key, title, link, icon } = command;

        return (
          <ActionCommand
            onClose={onClose}
            activeIndex={activeIndex}
            key={key}
            title={title}
            icon={icon}
            href={link}
          />
        );
      } else if (section === "theme") {
        const { title, key } = command;

        const icon = colorMode === "dark" ? ICONS.SUNNY : ICONS.MOON;

        return (
          <ActionCommand
            onClose={onClose}
            activeIndex={activeIndex}
            key={key}
            title={title}
            icon={icon}
            onClick={toggleColorMode}
          />
        );
      } else if (section === "resume") {
        const { key, title, link, icon } = command;

        return (
          <ActionCommand
            onClose={onClose}
            activeIndex={activeIndex}
            key={key}
            title={title}
            icon={icon}
            href={link}
          />
        );
      }
    });

  useKeyPressEvent("ArrowDown", () => {
    const next = descendants.nextEnabled(focusedIndex);
    if (next) {
      setFocusedIndex(next.index);
      next.node.focus();
      next.node.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  useKeyPressEvent("ArrowUp", () => {
    const prev = descendants.prevEnabled(focusedIndex);
    if (prev) {
      setFocusedIndex(prev.index);
      prev.node.focus();
      prev.node.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  });

  return (
    <List
      spacing={3}
      className="list-style"
      overflow="auto"
      w="full"
      pb={2}
      px={2}
    >
      <MenuDescendantsProvider value={descendants}>
        {action?.map((data) => (
          <span key={data?.key}>
            <ListItem>
              <Text className="list-heading-text">{data?.title}</Text>
            </ListItem>

            {data?.children?.length > 0 ? (
              actionItemGrid(data?.children, data?.key, focusedIndex)
            ) : (
              <Text fontSize="xs" as="i">
                No selection available
              </Text>
            )}
          </span>
        ))}
      </MenuDescendantsProvider>
    </List>
  );
}
