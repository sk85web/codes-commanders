export interface IPost {
  userId?: number;
  id?: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export interface InputFormProps {
  placeholder?: string;
  type: 'text' | 'submit';
  value: string;
  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IButtonProps {
  className?: string;
  text: string;
  onClick?: () => void;
  type: 'button' | 'submit';
  isDisabled?: boolean;
}

export interface ICommentsProps {
  id: string;
}
