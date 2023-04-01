export const baseUrl: string =
  process.env.NODE_ENV === "development"
    ? `${process.env.NEXTAUTH_URL}`
    : `${process.env.BASE_URL}`;
