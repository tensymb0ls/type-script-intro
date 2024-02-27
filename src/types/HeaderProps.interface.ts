import { User } from "./User.types";

export interface HeaderProps {
    user: User
    isAuth: boolean
    theme?: string
    func: Function
}