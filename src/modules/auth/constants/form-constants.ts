interface CommonField {
  type: 'text' | 'email' | 'password' | 'phone';
  label: string;
  placeholder?: string;
}

export interface LoginField extends CommonField {
  name: 'email' | 'password';
}

export interface SignupField extends CommonField {
  name: 'username' | 'email' | 'phone' | 'password';
}

const emailField: LoginField = {
  name: 'email',
  placeholder: 'email@email.com',
  type: 'email',
  label: 'Email',
};

const passwordField: LoginField = {
  name: 'password',
  type: 'password',
  label: 'Password',
};

const usernameField: SignupField = {
  name: 'username',
  placeholder: 'John Doe',
  type: 'text',
  label: 'Username',
};

const phoneField: SignupField = {
  name: 'phone',
  placeholder: '+14842989051',
  type: 'phone',
  label: 'Phone number',
};

export const loginFields: LoginField[] = [emailField, passwordField];

export const signupFields: SignupField[] = [
  usernameField,
  emailField,
  phoneField,
  passwordField,
];

export const initialLoginValues = {
  email: '',
  password: '',
};

export const initialSignupValues = {
  username: '',
  phone: '',
  email: '',
  password: '',
};
