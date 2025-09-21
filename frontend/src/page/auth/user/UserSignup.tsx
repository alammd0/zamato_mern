import UserAuthForm from "../../../components/core/UserAuthForm";


export default function UserSignup() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <UserAuthForm type="register" />
        </div>
    )
}