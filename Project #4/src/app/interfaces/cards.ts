interface CardInterface {
  brand: string;
  country: string;
  exp_month: number;
  exp_year: number;
  fingerprint: string;
  funding: string;
  generated_from: string | any;
  last4: string;
  checks: {
    address_line1_check: string;
    address_postal_code_check: string;
    cvc_check: string;
  };
  three_d_secure_usage: {
    supported: boolean;
  }
}

interface AddressInterface {
  city: string;
  country: string;
  line1: string;
  line2: string;
  postal_code: string | number;
  state: string;
}

interface BillingInterface {
  name: string;
  email: string;
  phone: string;
  address: AddressInterface;
}

export interface CardDetailInterface {
  id: string;
  type: string;
  created: number;
  customer: string;
  livemode: boolean;
  object: string;
  card: CardInterface;
  billing_details: BillingInterface;
  metadata: any;
}