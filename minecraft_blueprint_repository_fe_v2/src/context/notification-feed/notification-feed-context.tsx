import * as React from "react";
import { useState } from "react";
import {
  Notification,
  NotificationProps
} from "../../components/notification/notification";
import "./notification-feed.scss";

const NotificationFeedContext = React.createContext({
  createNotification: (notification: React.ReactNode) => {}
});

function NotificationFeedProvider(props: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<React.ReactNode[]>([]);

  const createNotification = (notification: React.ReactNode) => {
    setNotifications([...notifications, notification]);
  };

  const removeNotification = (indexToRemove: number) => {
    setNotifications(
      notifications.filter((item, index) => index !== indexToRemove)
    );
  };

  return (
    <NotificationFeedContext.Provider
      value={{ createNotification: createNotification }}
    >
      {props.children}
      {notifications && notifications.length > 0 ? (
        <div className="notification-feed">
          {notifications.map((notification, index) => (
            <Notification
              key={index}
              onClose={(event) => removeNotification(index)}
            >
              {notification}
            </Notification>
          ))}
        </div>
      ) : null}
    </NotificationFeedContext.Provider>
  );
}

export { NotificationFeedProvider, NotificationFeedContext };
