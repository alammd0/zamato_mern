import UserAuthForm from "../../../components/core/UserAuthForm";


export default function UserLogin() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <UserAuthForm type="login" />
        </div>
    )
}