import SignupForm from "@/organisms/SignupForm/SignupForm";
import SimpleTemplate from "@/templates/SimpleTemplate/SimpleTemplate";

export default function SignupPage() {
  return (
    <SimpleTemplate sx={{ px: 5, my: 5 }}>
      <SignupForm />
    </SimpleTemplate>
  );
}
