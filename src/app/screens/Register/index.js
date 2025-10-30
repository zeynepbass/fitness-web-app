
import InputField from "../../components/InputField"
import Button from "../../components/Button"
import Select from "../../components/Select"
export default function Register() {
  const people = [
    { id: 1, name: "Eğitmen" },
    { id: 2, name: "Eğitici" },
  ];
  return (
    <form className="space-y-4 p-4">
     <Select people={people} baslik="Seçim"/>
    
         <InputField label="Ad Soyad"  type="text" placeholder="Adınız Soyadınız" />

      <InputField label="Email" type="email" placeholder="Emailiniz" />

      <InputField label="Parola" type="password" placeholder="Parolanız" />
      <Button text="Kayıt Ol" />


    </form>
  );
}
