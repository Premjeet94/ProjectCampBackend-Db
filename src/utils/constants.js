export const UserRolesEnum = {
  ADMIN: "admin",
  USER: "user",
  Member: "member",
  GUEST: "guest",
};
export const AvailableUserRoles = Object.values(UserRoles);

export const TaskStatusEnum = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};
export const AvailableTaskStatuses = Object.values(TaskStatusEnum);

export const StatusCodes = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};
