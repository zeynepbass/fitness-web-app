
import InputField from "../../components/InputField"
import Button from "../../components/Button"

export default function Login() {
  return (
    <form className="space-y-4 p-4">
    

      <InputField label="Email" type="email" placeholder="Emailiniz" />

      <InputField  label="Parola" type="password" placeholder="Parolanız" />
      <Button text="Giriş Yap" />


    </form>
  );
}
