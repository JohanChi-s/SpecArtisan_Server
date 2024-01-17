import { ActionEvent as TActionEvent } from "../api/actionEvent/ActionEvent";

export const ACTIONEVENT_TITLE_FIELD = "actor";

export const ActionEventTitle = (record: TActionEvent): string => {
  return record.actor?.toString() || String(record.id);
};
