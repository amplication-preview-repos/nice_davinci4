import { Roles as TRoles } from "../api/roles/Roles";

export const ROLES_TITLE_FIELD = "roleName";

export const RolesTitle = (record: TRoles): string => {
  return record.roleName?.toString() || String(record.id);
};
