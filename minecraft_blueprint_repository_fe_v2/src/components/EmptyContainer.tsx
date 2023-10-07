import * as React from "react";
import { Icon, Heading } from "@chakra-ui/react";
import { MdClose } from "react-icons/md";


function EmptyContainer() {
  return (
    <div>
      <Heading>
        <Icon as={MdClose} />We don't have any objects matching your query.
      </Heading>
    </div>
  );
}

export { EmptyContainer };