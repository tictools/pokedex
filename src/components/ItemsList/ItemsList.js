import React from "react";

export default function ItemsList({ children }) {
  const content = children.length ? children : <p>No values</p>;
  return <ul>{content}</ul>;
}
