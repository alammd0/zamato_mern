import FoodPartnerAuthForm from "../../../components/core/FoodPartnerAuthForm";

export default function FoodPartnerLogin() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <FoodPartnerAuthForm type="login" />
        </div>
    )
}