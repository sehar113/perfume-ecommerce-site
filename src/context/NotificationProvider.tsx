
"use client";

import { createContext, useState, useCallback, ReactNode, useEffect } from "react";

type NotificationType = 'success' | 'error' | 'order';

interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  duration?: number;
}

interface NotificationContextType {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id'>) => void;
  removeNotification: (id: string) => void;
}

export const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

let idCounter = 0;

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);
  
  const addNotification = useCallback((notification: Omit<Notification, 'id'>) => {
    const id = (idCounter++).toString();
    const newNotification = { ...notification, id };
    setNotifications((prev) => [newNotification, ...prev]);

    const duration = notification.duration || 5000;
    setTimeout(() => {
        removeNotification(id);
    }, duration);

  }, [removeNotification]);


  const value = {
    notifications,
    addNotification,
    removeNotification,
  };

  return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>;
};
