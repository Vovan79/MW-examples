import { StudentInterface } from "./students";

export interface DefaultTeacherInterface {
  user: number;
  slug: string;
  city: string;
  description: string;
  image: string;
  profile_title: string;
  qualifications: string;
  stripe_user_id: string;
  style: string;
  vimeo_url: string;
}

export interface TeacherInterface extends DefaultTeacherInterface{
  classes: string;
  email: string;
  first_name: string;
  last_name: string;
  links: {
    label: string;
    url: string;
  }[];
  sample_classes: string;
  telephone: string;
  subscribed: StudentInterface[];
}

export interface TeacherStatusInterface {
  creator: TeacherInterface;
  status: string;
}

export interface TeacherListInterface {
  name: string;
  slug: string;
}