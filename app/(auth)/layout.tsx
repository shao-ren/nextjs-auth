import { FC } from "react"

interface AuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
    return (
        <div className="bg-slate-200 p-10 rounded-md">{children}</div>
    )
}

export default AuthLayout