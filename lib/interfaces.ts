export interface Company {
  _id: string;
  name: string;
  zip: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: string;
  status: boolean;
}

export interface Job {
  _id: string;
  title: string;
  description: string;
  type: string;
  status: boolean;
}
