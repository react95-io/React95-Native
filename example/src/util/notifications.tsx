import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Snackbar } from 'react95-native';

type Notification = {
  message: string;
  closeButtonLabel?: string;
};

type NotificationCallback = (data: Notification[]) => void;

class NotificationService {
  public notifications: Notification[];

  public subscribers: { (data: Notification[]): void }[];

  constructor() {
    this.notifications = [];
    this.subscribers = [];
  }

  get messages() {
    return this.notifications;
  }

  send = (notification: Notification) => {
    this.notifications.push(notification);
    this.notify();
  };

  remove = (notification: Notification) => {
    this.notifications = this.notifications.filter(n => n !== notification);
    this.notify();
  };

  subscribe = (callback: NotificationCallback) => {
    this.subscribers.push(callback);
  };

  notify = () => {
    this.subscribers.forEach(callback => callback(this.notifications));
  };

  unsubscribe = (callback: NotificationCallback) => {
    this.subscribers = this.subscribers.filter(cb => cb !== callback);
  };
}

export const notificationService = new NotificationService();

export const NotificationProvider = () => {
  const [notifications, setNotifications] = React.useState(
    notificationService.messages,
  );

  React.useEffect(() => {
    const onNotificationsAdded = (n: Notification[]) => {
      setNotifications([...n]);
    };
    notificationService.subscribe(onNotificationsAdded);

    return () => notificationService.unsubscribe(onNotificationsAdded);
  }, []);

  return (
    <View style={styles.container} pointerEvents='box-none'>
      {notifications.map((notification, i) => (
        <Snackbar
          key={i}
          visible
          onDismiss={() => notificationService.remove(notification)}
          action={{
            label: notification.closeButtonLabel || 'OK',
            onPress: () => notificationService.remove(notification),
          }}
          duration={1000}
        >
          {notification.message}
        </Snackbar>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
