import LoginForm from "@/organisms/LoginForm/LoginForm";
import SimpleTemplate from "@/templates/SimpleTemplate/SimpleTemplate";

export default function LoginPage() {
  return (
    <SimpleTemplate sx={{ px: 5, my: 5 }}>
      <LoginForm />
    </SimpleTemplate>
  );
}
