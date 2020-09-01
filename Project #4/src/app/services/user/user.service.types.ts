export interface Card {
  id: string;
  object: string;
  billing_details: {
    address: {
      city: string;
      country: string;
      line1: string;
      line2: string;
      postal_code: number;
      state: string;
    };
    email: string;
    name: string;
    phone: string;
  };
  card: {
    brand: string;
    checks: {
      address_line1_check: any;
      address_postal_code_check: any;
      cvc_check: any;
    };
    country: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    funding: string;
    generated_from: null;
    last4: string;
    three_d_secure_usage: {
      supported: boolean;
    };
    wallet: any;
  };
  created: number;
  customer: string;
  livemode: boolean;
  metadata: {};
  type: string;
}