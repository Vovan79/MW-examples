import { DefaultTeacherInterface, TeacherInterface, TeacherStatusInterface } from "./teachers";

export interface StudentInterface {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  telephone: string;
  marketing: boolean;
  view_status: string;
  creator: DefaultTeacherInterface | TeacherInterface;
  creators: TeacherStatusInterface[];
}