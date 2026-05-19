export type SignupData = {
  fullName: string;
  email: string;
  password: string;
};

export type SigninData = {
  email: string;
  password: string;
};

export type createDocumentData = {
  title: string;
  content: string;
  type: string;
  tone?: string;
  userId: string;
};

export type updateDocumentData = {
  title?: string;
  content?: string;
  type?: string;
  tone?: string;
};
