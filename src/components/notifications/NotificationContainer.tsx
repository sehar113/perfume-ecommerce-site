
"use client";

import { useNotification } from "@/hooks/use-notification";
import { ErrorAlert } from "./ErrorAlert";
import { SuccessAlert } from "./SuccessAlert";
import { OrderAlert } from "./OrderAlert";

export function NotificationContainer() {
  const { notifications, removeNotification } = useNotification();

  if (notifications.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 right-0 z-[100] flex w-full flex-col p-4 md:max-w-[380px] gap-4">
      {notifications.map((notif) => {
        switch (notif.type) {
          case 'error':
            return <ErrorAlert key={notif.id} id={notif.id} title={notif.title} />;
          case 'success':
            return <SuccessAlert key={notif.id} id={notif.id} title={notif.title} message={notif.message} />;
          case 'order':
            return <OrderAlert key={notif.id} id={notif.id} title={notif.title} message={notif.message} />;
          default:
            return null;
        }
      })}
    </div>
  );
}
