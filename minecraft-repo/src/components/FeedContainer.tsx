import * as React from "react";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { MdCheck } from "react-icons/md";

import { DateUtils } from "../utils/DateUtils";

interface IFeedItem {
  summary: String,
  date: Date,
  icon: {
    name: any,
    color: any
  }
}

interface IFeedProps {
  feed?: Array<IFeedItem>
}

function FeedContainer({ feed }: IFeedProps) {
  return (
    <div>
      {
        feed.length > 0 ? feed.map((feedItem: IFeedItem, index: number) =>
          <HStack key={index}>
            <div>
              <Icon color="green" as={MdCheck} />
            </div>
            <div>
              <div>
                {feedItem.summary}
                <Text>{DateUtils.calculateDaysFromNow(feedItem.date)} days ago</Text>
              </div>
            </div>
          </HStack>
        ) : null
      }
    </div >
  );
}

export { FeedContainer };