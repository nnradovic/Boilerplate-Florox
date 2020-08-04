import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TreeMenu from "react-simple-tree-menu";
import "../../../../node_modules/react-simple-tree-menu/dist/main.css";

const ItemTree = ({ treeData }) => {
  // as an array

  const ICON_SIZE = 15;
  const LEVEL_SPACE = 16;
  const ToggleIcon = ({ on }) => (
    <FontAwesomeIcon
      icon="caret-right"
      className={`muted-icon animate + ${on ? "rotate" : ""}`}
    />
  );

  const ListItem = ({
    level = 0,
    hasNodes,
    isOpen,
    label,
    searchTerm,
    openNodes,
    toggleNode,
    matchSearch,
    focused,
    ...props
  }) => (
      <ListGroup.Item
        {...props}
        style={{
          paddingLeft: ICON_SIZE + level * LEVEL_SPACE,
        }}
        className="border-bottom d-flex tree-group"
      >
        <div
          style={{ display: "inline-block" }}
          onClick={(e) => {
            hasNodes && toggleNode && toggleNode();
            e.stopPropagation();
          }}
        >
          <div className="toggle-icon-space">
            {hasNodes && <ToggleIcon on={isOpen} />}
          </div>
        </div>
        <span className="muted-text weight-500">{label}</span>
        <Button variant="primary" className="ml-auto">
          <FontAwesomeIcon
            icon="caret-down"
            className="white mr-2 active-text fa-lg text-primary"
          />
        Button
      </Button>
      </ListGroup.Item>
    );

  return (
    <TreeMenu data={treeData} debounceTime={500}>
      {({ items }) => (
        <>
          <ListGroup>
            {items.map(({ reset, ...props }) => (
              <ListItem {...props} />
            ))}
          </ListGroup>
        </>
      )}
    </TreeMenu>
  );
};

export default ItemTree;
