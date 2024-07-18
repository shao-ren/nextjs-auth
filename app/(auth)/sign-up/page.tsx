import SignUpForm from "@/components/form/SignUpForm"
import { ReactNode } from "react"

const page = (): ReactNode => {
  return (
    <div className="w-full">
      <SignUpForm />
    </div>
  )
}

export default page